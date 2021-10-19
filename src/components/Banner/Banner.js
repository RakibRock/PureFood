import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="container-fluid background mt-5">
        <div className="row">
          <div className="col-md-6 ps-5 pt-5 pb-5">
            <h6>FINDING BALANCE IN FOOD, HEALTH AND WELLNESS</h6>
            <h2>Get Health and Instruction Coach</h2>
          </div>
          <div className="col-md-6 pe-5 pt-5 pb-5">
            <button className="btn-custom-banner">Make an appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
