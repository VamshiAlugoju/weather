import "./navbar.css"
function Navbar()
{
    return(
        <div className="Navbar">
        <nav className="navbar  boot-nav">
        <div className="container-fluid">
           <h2>Weather</h2>
         
          <form className="d-flex" role="search">
            <input className="form-control me-2 nav-input" type="search" placeholder="Eg:hyderabad,mumbai,etc" aria-label="Search" />
            <button  type="submit">  <i class="fa-solid fa-magnifying-glass-location"></i>
           </button>
          </form>
           
        </div>
      </nav>
      </div>
    )
}

export default Navbar;