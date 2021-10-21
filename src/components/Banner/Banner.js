import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="container-fluid background mt-5">
        <div className="row">
          <div className="col-md-6 ps-5 pt-5 pb-5 text-center">
            <h6>FINDING BALANCE IN FOOD, HEALTH AND WELLNESS</h6>
            <h2>Get Health and Instruction Coach</h2>
          </div>
          <div className="col-md-6 text-center mt-5">
            <Link className="btn-custom-banner" id="banner-btn" to="/register">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
