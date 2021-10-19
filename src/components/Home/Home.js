import React from "react";
import { Carousel } from "react-bootstrap";
import Banner from "../Banner/Banner";
import ServicesHome from "../ServicesHome/ServicesHome";
import "./Home.css";

const Home = () => {
  const imgStyle = {
    width: "100%",
    borderRadius: "100px",
    marginTop: "7%",
  };
  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid">
        <div className="row bg">
          <div className="col-md-6 col-sm-12 p-5 d-flex">
            <div className="left-text">
              <h6 className="text-start fw-normal">
                FINDING BALANCE IN FOOD, HEALTH AND WELLNESS
              </h6>
              <h1 className="text text-start">
                Eat Mindfully, Sweat Often & Self Love Always
              </h1>
              <div className=""></div>
              <button className="btn-custom d-flex">Learn More</button>
            </div>
          </div>
          <div className="right-img col-md-6">
            <img
              style={imgStyle}
              src="images/pexels-foodie-factor-551997.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <ServicesHome></ServicesHome>
      <Banner></Banner>
    </div>
  );
};

export default Home;
