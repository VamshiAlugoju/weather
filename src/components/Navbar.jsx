import React from 'react'
import "./navbar.css"
function Navbar(props)
{
   
  const [cityname,setcityname]=React.useState("")

  function handleChange(e)
  {  
    let inputname = e.target.value
        setcityname(inputname)
  }
  
  function submitted(e)
  {
    e.preventDefault()
    props.onClick(cityname)

  }
 


    return(
        <div className="Navbar">
        <nav className="navbar  boot-nav">
        <div className="container-fluid">
           <h2>Weather</h2>
         
          <form className="d-flex" role="search">
            <input name="citysearch" onChange={handleChange} value={cityname} className="form-control me-2 nav-input" type="search" placeholder="Eg:hyderabad,mumbai,etc" aria-label="Search" />
            <button onClick={submitted} type="submit">  <i class="fa-solid fa-magnifying-glass-location"></i>
           </button>
          </form>
           
        </div>
      </nav>
      </div>
    )
}
export default Navbar;