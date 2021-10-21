import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row p-5">
          <div className="col-md-6 left-img p-5 ">
            <img
              className="img-fluid rounded"
              src="images/healthy-lifestyle-elements-vector-9537167.png"
              alt=""
            />
          </div>
          <div className="col-md-6 right-text p-5 text-center rounded ">
            <h1>About Us</h1>
            <h5>We Focus on providing a better healthy lifestyle for you</h5>
            <p>
              Healthy diet, which was calculated and rated based on the reported
              intake of healthy foods like vegetables, fruits, nuts, whole
              grains, healthy fats, and omega-3 fatty acids, and unhealthy foods
              like red and processed meats, sugar-sweetened beverages, trans
              fat, and sodium
            </p>

            <h5>We will provide you with the perfect routine</h5>
            <p>
              1. Measure and Watch Your Weight Keeping track of your body weight
              on a daily or weekly basis will help you see what you’re losing
              and/or what you’re gaining. <br />
              <br /> 2. Limit Unhealthy Foods and Eat Healthy Meals Do not
              forget to eat breakfast and choose a nutritious meal with more
              protein and fiber and less fat, sugar, and calories. For more
              information on weight-control foods and dietary recommendations,
              please check the following website:
              www.hsph.harvard.edu/obesity-prevention-source/obesity-causes/diet-and-weight/.
              <br /> <br /> 3. Take Multivitamin Supplements To make sure you
              have sufficient levels of nutrients, taking a daily multivitamin
              supplement is a good idea
            </p>
          </div>
        </div>
      </div>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
};

export default About;
