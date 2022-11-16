import React from "react";
import "./Body.css";
import Logo from "./Assets/img2.svg";
import Background1 from "./Assets/img3.svg";
import Background2 from "./Assets/img5.svg";
import Search from "./Search";


function Body() {
  return (
    <div className="body__container">
      <div className="body__description">
        <h1>
          {" "}
          <span className="red">Nigeria's best online</span> movie platform
        </h1>
      </div>
      <div className="continue">
        <h2>Click <a href="/search" className="red">here</a> to continue...</h2>
      </div>
      <div className="body__img">
        <figure>
          <img className="movie__img" src={Logo} alt="" />
        </figure>
      </div>
    </div>
  );
}

export default Body;
