import React from "react";
import "./styles.css";

export default function Car(props) {
  return (
    <div className="Car">
      <div className="car-block">
        <div className="car-img">
          <img src={props.image} alt="loading"></img>
        </div>
        <div className="car-details">
          <div className="title">{props.Name}</div>
          <div className="price">
            <span>Rs</span> {props.price}Lacs
          </div>
          <div className="car-props">
            <div className="subblock">
              <div className="mil">
                <div>Milege</div>
                {props.mil} kmpl
              </div>
              <div className="eng">
                <div>Engine</div>
                {props.eng} cc
              </div>
            </div>
            <div className="subblock">
              <div className="fuel">
                <div>Fuel Type</div>
                {props.fuel}
              </div>
              <div className="seater">
                <div>Seater</div>
                {props.seater}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
