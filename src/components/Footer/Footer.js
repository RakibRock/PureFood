import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid bg-color text-white">
      <div className="row">
        <div className="col-md-4 p-5">
          <h3>
            <span id="brand-pure">Pure</span>
            <span id="brand-food">Food</span>
          </h3>
          <h5 id="brand-food">Switch to a better lifestyle</h5>
          <p>
            "We can show you the path to a healthy lifestyle you have been
            looking for and make your dream a reality."
          </p>
        </div>
        <div className="col-md-4 p-5 text-white text-center">
          <ListGroup as="ul">
            <Link to="/home" id="brand-food">
              Home
            </Link>
            <Link to="/about" id="brand-food">
              About
            </Link>
            <Link to="/services" id="brand-food">
              Services
            </Link>
            <Link to="/register" id="brand-food">
              Register
            </Link>
          </ListGroup>
        </div>
        <div className="col-md-4 p-5">
          <h6 id="brand-food">email: purefood@gmail.com</h6>
          <h6 id="brand-food">phone: 125438462833</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
