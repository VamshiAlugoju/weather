import React from "react";
import "./weather.css";
// import CountryBox from "./CountryBox"
import Navbar from "./Navbar";


// make an oject for setdata and weather data 
export default function Weather() {
  const [city, setcity] = React.useState("Hyderabad");
  const [data, setdata] = React.useState({});
  const [weatherdata, setweatherdata] = React.useState({});

 
  async function waitfordata() {
    const urldata = await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=YTThiHmg9UFHxGpMGd8zYZpiXwGWnHsj&q=warangal&details=true`
      );
    const objectdata = await urldata.json();

    setdata((prev) => {
      return {
        ...objectdata
      };
    });
    
    const tempurl = await fetch(
      `https://dataservice.accuweather.com/currentconditions/v1/202191?apikey=YTThiHmg9UFHxGpMGd8zYZpiXwGWnHsj&details=true`
    );
    const objecttemp = await tempurl.json();
 
    setweatherdata(prev=>{
      return{
         ...objecttemp
      }
    })
  }
   

  React.useEffect(() => {
    waitfordata();
  }, []);
 
   console.log(weatherdata)
  return (
    <>
      <div className="Page">
        <Navbar />
        <div className="weather-box">
          <h4>weather in mumbai</h4>
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
                51 <span className="celsius">&#8451;</span>{" "}
              </span>
            </div>
            <div className="address">
              <p>mumbai details</p>
            </div>
          </div>
          <div className="second-row">
            <div className="humidity  half">
              <div className="humid-box">
                <span>
                  {" "}
                  <i class="fa-solid humid-icon fa-temperature-three-quarters"></i>
                </span>
                <p>humidity</p>
              </div>
              <span className="humid-val">55</span>
            </div>
            <div className=" wind">
              <div className="humid-box">
                <span>
                  {" "}
                  <i class="fa-solid wind-icon fa-temperature-three-quarters"></i>
                </span>
                <p>wind-speed</p>
              </div>
              <span className="humid-val">55</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
