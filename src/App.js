import React, { useState } from "react";
import "./styles.css";
import Car from "./Car";
import Footer from "./Footer";
import { data } from "./data.js";

var carlist = Object.keys(data);

export default function App() {
  var [bodytype, setbody] = useState("All");

  function clickhandler(name) {
    var setter = name;
    console.log("clicked", name);
    setbody(setter);
  }

  function tab() {
    return carlist.map(function (type) {
      console.log(type);
      return (
        <button
          key={type}
          className="button"
          name={type}
          onClick={() => clickhandler(type)}
        >
          {type}
        </button>
      );
    });
  }

  return (
    <div className="App">
      <div className="header">
        CD<span>Car Dikhaow</span>
        <img src="./image/car.png" />
      </div>
      <div className="car-background">
        <img src="./image/car-bg.svg" />
      </div>
      <div className="tagline">Let us fix a date with your dream car</div>
      <div className="tab">{tab()}</div>
      <div>
        {data[bodytype].map(function (item) {
          return (
            <Car
              key={item.name}
              Name={item.name}
              image={item.image}
              price={item.price}
              mil={item.mil}
              eng={item.eng}
              fuel={item.fuel}
              seater={item.seater}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
