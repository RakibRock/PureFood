import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
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
        <div className="row bg pb-5">
          <div className="col-md-6 col-sm-12 p-5 d-flex">
            <div className="left-text ">
              <h6 className="text-start fw-normal">
                FINDING BALANCE IN FOOD, HEALTH AND WELLNESS
              </h6>
              <h1 className="text text-start pb-3">
                Eat Mindfully,
                <br /> Sweat Often & <br /> Self Love Always
              </h1>

              <Link to="about" className="btn-custom-banner" id="hero-btn">
                Learn More
              </Link>
            </div>
          </div>
          <div className="right-img col-md-6 p-5">
            <img style={imgStyle} src="images/food.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <ServicesHome></ServicesHome>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
};

export default Home;
