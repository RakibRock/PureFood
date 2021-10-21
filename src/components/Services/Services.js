import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import ServicesHome from "../ServicesHome/ServicesHome";

const Services = () => {
  return (
    <div>
      <div className="container-fluid pb-5">
        
        <ServicesHome></ServicesHome>
      </div>

      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
};

export default Services;
