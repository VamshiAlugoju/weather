import React ,{useState} from  "react";
import "./weather.css";
import Navbar from "./Navbar";
import DataBlock from "../../blocks/DataBlock";
import MainBox from "../../blocks/MainBox";
import {CircleLoader} from "react-spinners"
import { UilCelsius } from '@iconscout/react-unicons'
import { UilWind } from '@iconscout/react-unicons'
import { UilWater } from '@iconscout/react-unicons'
import { UilCompressArrows } from '@iconscout/react-unicons'
import { UilTemperaturePlus } from '@iconscout/react-unicons'
import { UilCloudDrizzle } from '@iconscout/react-unicons'
import { useBackdrop } from "use-backdrop";


// make an oject for setdata and weather data
export default function Weather() {
  
  const [city, setcity] = React.useState( {
    name:"mumbai",
  });
   const {displayBackdrop,closeBackdrop} = useBackdrop()

  const [isLoading , setisLoading] = useState(false)
   
  const [realdata, setrealdata] = React.useState({
    alldata: {
      city: { name: "",state:"",country:"", gmt:"" },
      temperature: "",
      humidity: "",
      wind: "",
      feels_like: "",
      precipitation: "",
      pressure: "",
      
    },
  });

  async function waitfordata() {
     
    setisLoading(true)
     
    let objectdata;
    
     try{
       let urldata = await fetch(
        `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=YTThiHmg9UFHxGpMGd8zYZpiXwGWnHsj&q=${city.name}&details=true`
         );
         objectdata = await urldata.json();
         if(objectdata.length === 0 ){
          setisLoading(false)
          handleClick();
          console.log(objectdata.length)
          throw new Error("bad place ")
        }
         console.log(objectdata)
     }catch(err){
        console.log( "erroe is ", err)
     };
    let citykey = objectdata[0].Key;
 
    let tempurl;
    let objecttemp;
      
    try{
      tempurl = await fetch(
      `https://dataservice.accuweather.com/currentconditions/v1/${citykey}?apikey=YTThiHmg9UFHxGpMGd8zYZpiXwGWnHsj&details=true`
      );
      objecttemp = await tempurl.json()
      console.log(objecttemp)
    }catch(err){
      let error = new Error("api calls limit is over for today please try again tomarrow")
      handleClick(error)
      throw error;
        console.log( "error is " , err)
    }
     console.log(objecttemp)
    setrealdata((prev) => ({
      alldata: {
        ...prev.alldata,
        city: { ...prev.alldata.city,
           name: objectdata[0].EnglishName,
            state:objectdata[0].AdministrativeArea.EnglishName,
            country:objectdata[0].Country.EnglishName,
            gmt:objectdata[0].TimeZone.GmtOffset
           },
        temperature: objecttemp[0].Temperature.Metric.Value,
        humidity: objecttemp[0].RelativeHumidity,
        wind: objecttemp[0].Wind.Speed.Metric.Value,
        feels_like: objecttemp[0].RealFeelTemperature.Metric.Value,
        precipitation: objecttemp[0].PrecipitationSummary.Precipitation.Metric.Value,
        pressure: objecttemp[0].Pressure.Imperial.Value,
        weather_text: objecttemp[0].WeatherText,
        weatherIcon: objecttemp[0].WeatherIcon,
      },
    }));
     setisLoading(false)
  }
  
  function handelcityname(cityname) {
    setcity(prev=>{
     return { ...prev,
              name:cityname
    }
    });
  }

  React.useEffect(() => {
    waitfordata();
  }, [city]);


  let tempicon =   <UilTemperaturePlus size="50" color="#00E4D5" />;
  let water =   <UilWater size="50" color="#00E4D5" />;
  let wind =   <UilWind size="50" color="#00E4D5" />;
  let pressure =   <UilCompressArrows size="50" color="#00E4D5" />;
  let prec = <UilCloudDrizzle size="50" color="#00E4D5" />;

   
  let errormsg= "api calls limit is over for today please try again tomarrow";
  const handleClick = (error) => displayBackdrop((closeBackdrop) => (
    <div className="backdrop" onClick={closeBackdrop} >
      <div>
        <h4> {error ? errormsg : "please enter a valid city" } </h4>
      { !error ??  <p>(try checking spelling)</p>}
      </div>
      <button onClick={closeBackdrop}>
        Ok
      </button>
    </div>
  ));

  return (
       
    <div>    
       <div className="Page">
        <Navbar cityname={city} onClick={handelcityname} />
        <div className="weather-box">
          <MainBox
           temperature={realdata.alldata.temperature}
           name={realdata.alldata.city.name}
           state={realdata.alldata.city.state}
           country={realdata.alldata.city.country}
           gmt={realdata.alldata.city.gmt}
           />
              
          {isLoading ? 
          <div className="circleLoader">
           <CircleLoader
         color="#8f00ff"
          size={150}
          speedMultiplier={1}
         /> </div>
             : 
             <div className="grid">
             <DataBlock icon={wind} property="wind" Value={realdata.alldata.wind} />
             <DataBlock icon={tempicon} property="Feels-Like" Value={realdata.alldata.feels_like} />
             <DataBlock icon={water} property="humidity" Value={realdata.alldata.humidity} />
             <DataBlock icon={prec} property="precipitation" Value={realdata.alldata.precipitation} />
             <DataBlock icon={pressure} property="pressure" Value={realdata.alldata.pressure} />
            </div>
           }

        </div>
      
      </div>

       </div>
    
  );
}
