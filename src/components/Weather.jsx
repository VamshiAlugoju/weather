import React from 'react'
import "./weather.css"
// import CountryBox from "./CountryBox"
import Navbar from "./Navbar"



export default function Weather()
{

    const [city , setcity] = React.useState("Hyderabad")
    const [data , setdata] = React.useState({})

   
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4d33af278cmsh75f014a64624085p1ae949jsn05d72e27a589',
            'X-RapidAPI-Host': 'weather338.p.rapidapi.com'
        }
    };

    
    
    React.useEffect( ()=>{
        waitfordata()
        async function waitfordata()
        {

            const urldata=await  fetch('https://weather338.p.rapidapi.com/locations/search?query=Hyderabad&language=en-US', options)
                   const objectdata = await urldata.json()
                //    console.log(objecdata)
                   setdata( prev=>{
                    return{
                        ...prev,
                        ...objectdata
                    }
                   })
                }
                
    },[])
  
    console.log(data)
    return(
        <>
           <div className="Page">
                 <Navbar />
                    <div className="weather-box">

                        <h4>weather in mumbai</h4>
                           <div className="first-row">
                               <div className="temp half d-flex">
                                <div className="temp-box">
                                <span> <i class="fa-solid temp-icon fa-temperature-three-quarters"></i></span>
                                <p>temperature</p>
                                </div>
                                        <span className="temperature">51 <span className='celsius' >&#8451;</span> </span>
                               </div>
                               <div className="address">
                                      <p>mumbai details</p>
                               </div>
                           </div>
                           <div className="second-row">
                               <div className="humidity  half">
                                <div className="humid-box">
                                <span> <i class="fa-solid humid-icon fa-temperature-three-quarters"></i></span>
                                 <p>humidity</p>
                                 </div>
                                 <span className='humid-val' >55</span>
                               </div>
                               <div className=" wind">
                               <div className="humid-box">
                               <span> <i class="fa-solid wind-icon fa-temperature-three-quarters"></i></span>
                                 <p>wind-speed</p>
                                 </div>
                                 <span className='humid-val' >55</span>
                               </div>
                           </div>

                    </div>
                    
           </div>
        </>
    )
}