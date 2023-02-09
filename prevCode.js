<div className="second-row">
<div className="humidity  half">
  <div className="humid-box">
    <span>
      {" "}
      <i class="fa-solid humid-icon fa-temperature-three-quarters"></i>
    </span>
    <p>Feels-like :</p>
  </div>
  <span className="humid-val">
    {" "}
    <span className="values">
      {" "}
      {realdata.alldata.feels_like}{" "}
    </span>{" "}
    <span style={{ color: "black" }} className="">
      &#8451;
    </span>{" "}
  </span>
</div>
<div className=" wind half">
  <div className="humid-box">
    <span>
      {" "}
      <i class="fa-solid wind-icon fa-temperature-three-quarters"></i>
    </span>
    <p>wind-speed :</p>
  </div>
  <span className="humid-val">
    <span className="values"> {realdata.alldata.wind}</span><span style={{color:"black"}} className="windspeed"> km/h</span>
  </span>
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
      <p>humidity :</p>
    </div>
    <span className="humid-val">
      {" "}
      <span className="values">
        {" "}
        {realdata.alldata.humidity} %
      </span>{" "}
    </span>
  </div>
  <div className=" wind half">
    <div className="humid-box">
      <span>
        {" "}
        <i class="fa-solid wind-icon fa-temperature-three-quarters"></i>
      </span>
      <p>precipitation :</p>
    </div>
    <span className="humid-val">
      {" "}
      <span className="values">
        {" "}
        {realdata.alldata.precipitation}  <small>mm</small>
      </span>
    </span>
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
      <p>Pressure :</p>
    </div>
    <span className="humid-val">
      <span className="values"> {realdata.alldata.pressure} hg</span>
    </span>
  </div>
  <div className=" wind half">
    <div className="humid-box">
      <span>
        {" "}
        <i class="fa-solid wind-icon fa-temperature-three-quarters"></i>
      </span>
      <p>wind-speed :</p>
    </div>
    <span className="humid-val">
      {" "}
      <span className="values"> {realdata.alldata.wind}</span>
    </span>
  </div>
</div>