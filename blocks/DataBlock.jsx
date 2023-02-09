import React from 'react'
 
import "./DataBlock.css"
export default function DataBlock(props) {
  return (
    <div className='block' > 
       <div className="icon">
         {props.icon}
       </div>
       <div className="property">
       {props.property} 
       </div>
       <div className="value">
         {props.Value}<span>{props.unit}</span>
       </div>
    </div>
  )
}
