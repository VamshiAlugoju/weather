import React from "react";
import "./weather.css";
// import CountryBox from "./CountryBox"
import Navbar from "./Navbar";


// make an oject for setdata and weather data 
export default function Weather() {
  const [city, setcity] = React.useState("mumbai");
  // const [data, setdata] = React.useState({});
  // const [weatherdata, setweatherdata] = React.useState({});
//  let a = React.useRef(1);

  const [realdata,setrealdata] = React.useState( {alldata:  {
    city:{ name:""},
    temperature:0,
  humidity:"",
  wind:"",
  feels_like:"",
  precipitation:"",
  pressure:"",
  weather_text:"",
  weatherIcon:""
  }})
 


  async function waitfordata() {
    const urldata = await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=YTThiHmg9UFHxGpMGd8zYZpiXwGWnHsj&q=${city}&details=true`
      );
    const objectdata = await urldata.json();
    let citykey = objectdata[0].Key
    // setdata(objectdata)
      
    
    const tempurl = await fetch(
      `https://dataservice.accuweather.com/currentconditions/v1/${citykey}?apikey=YTThiHmg9UFHxGpMGd8zYZpiXwGWnHsj&details=true`
    );
    const objecttemp = await tempurl.json();
 
    // setweatherdata(objecttemp)

    setrealdata((prev)=>({
       
      alldata:{
        ...prev.alldata,
        city:{ ...prev.alldata.city , name: objectdata[0].EnglishName},
      temperature:objecttemp[0].Temperature.Metric.Value,
      humidity:objecttemp[0].RelativeHumidity,
      wind:objecttemp[0].Wind.Speed.Metric.Value,
      feels_like:objecttemp[0].RealFeelTemperature.Metric.Value,
      precipitation:objecttemp[0].PrecipitationSummary.Precipitation.Metric.Value,
      pressure:objecttemp[0].Pressure.Imperial.Value,
      weather_text:objecttemp[0].WeatherText,
       weatherIcon:objecttemp[0].WeatherIcon
      }
   }))
    // console.log(realdata)
    // console.log(weatherdata)
    // console.log( data)
    // console.log(objecttemp[0])
  
  }
  console.log(realdata)
   

  React.useEffect(() => {
    waitfordata();
  }, []);
 
 
  //  console.log((a.current)++)

















  return (
    <>
      <div className="Page">
        <Navbar />
        <div className="weather-box">
          <h4>weather in  {realdata.alldata.city.name}</h4>
          <div className="first-row">
            <div className="temp half d-flex">
              <div className="temp-box">
                <span>
                  {" "}
                  <i class="fa-solid temp-icon fa-temperature-three-quarters"></i>
                </span>
                <p>temperature</p>
              </div>
              <span className="temperature">
                 {realdata.alldata.temperature} <span className="celsius">&#8451;</span>{" "}
              </span>
            </div>
            <div className="address">
              <p>mumbai details</p>
            </div>
          </div>


         {/* second rwo */}
          <div className="second-row">
            <div className="humidity  half">
              <div className="humid-box">
                <span>
                  {" "}
                  <i class="fa-solid humid-icon fa-temperature-three-quarters"></i>
                </span>
                <p>Feels-like</p>
              </div>
              <span className="humid-val">{realdata.alldata.feels_like}</span>
            </div>
            <div className=" wind">
              <div className="humid-box">
                <span>
                  {" "}
                  <i class="fa-solid wind-icon fa-temperature-three-quarters"></i>
                </span>
                <p>wind-speed</p>
              </div>
              <span className="humid-val">{realdata.alldata.wind}</span>
            </div>
          </div>


        {/* third row  */}
          <div className="second-row">
            <div className="humidity  half">
              <div className="humid-box">
                <span>
                  {" "}
                  <i class="fa-solid humid-icon fa-temperature-three-quarters"></i>
                </span>
                <p>humidity</p>
              </div>
              <span className="humid-val">{realdata.alldata.humidity}</span>
            </div>
            <div className=" wind">
              <div className="humid-box">
                <span>
                  {" "}
                  <i class="fa-solid wind-icon fa-temperature-three-quarters"></i>
                </span>
                <p>precipitation</p>
              </div>
              <span className="humid-val">{realdata.alldata.precipitation}</span>
            </div>
          </div>
         
         {/* Fourth row  */}
          <div className="second-row">
            <div className="humidity  half">
              <div className="humid-box">
                <span>
                  {" "}
                  <i class="fa-solid humid-icon fa-temperature-three-quarters"></i>
                </span>
                <p>Pressure</p>
              </div>
              <span className="humid-val">{realdata.alldata.pressure}</span>
            </div>
            <div className=" wind">
              <div className="humid-box">
                <span>
                  {" "}
                  <i class="fa-solid wind-icon fa-temperature-three-quarters"></i>
                </span>
                <p>wind-speed</p>
              </div>
              <span className="humid-val">{realdata.alldata.wind}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
