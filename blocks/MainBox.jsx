import React from 'react'
import "./mainbox.css"
import { UilTemperatureQuarter } from '@iconscout/react-unicons'
export default function MainBox(props) {
  return (
    <div className='mainbox' >
        <div className="temperature">
            <div className="logo">
                 <div className='tempIcon'><UilTemperatureQuarter size="80" color="#E49800" /></div>
                 <div className='temperature'>temperature</div>
            </div>
            <div className="temp-value">
                 {props.temperature } <span className="celsius">&#8451;</span>
            </div>
        </div>
        <div className="address">
               <h3> {props.name} ,</h3>
               <div className="address-country">
                {props.state},  {props.country}
               </div>
               <p > Gmt:{props.gmt} Hours</p>
            </div>
    </div>
  )
}
