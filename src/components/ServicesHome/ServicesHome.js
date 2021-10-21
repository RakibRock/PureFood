import React from "react";
import { CardGroup, Card, Row, Col, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./ServicesHome.css";
const ServicesHome = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <h6 className="pt-5 text-center">What We Do</h6>
        <h1 className="pb-4 text-center">Services</h1>
        <div className="col-md-12 pt-3 ps-5 pe-5">
          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://www.lifefitness.com/resource/image/37496/portrait_ratio1x1/400/400/5cbd7a48ed5dd9647aad3d2bd2562c90/Bu/lfa-trainers-fitfair2019-20191122-wf2-8495-2-.jpg\"
                />
                <Card.Body>
                  <Card.Title>Workout Routine</Card.Title>
                  <Card.Text>
                    Fitness training balances five elements of good health. Make
                    sure your routine includes aerobic fitness, strength
                    training.
                  </Card.Text>
                </Card.Body>
                <NavLink to="/" className="text-center">
                  View Details
                </NavLink>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/under_400_calories_meatballs-with-fennel-balsamic-beans-courgette-noodles-0531fdb.jpg?quality=90&resize=500,454%5C"
                />
                <Card.Body>
                  <Card.Title>Nutrition</Card.Title>
                  <Card.Text>
                    Nutrition is the study of nutrients in food, how the body
                    uses them, and the relationship between diet, health, and
                    disease.
                  </Card.Text>
                </Card.Body>
                <NavLink to="/" className="text-center">
                  View Details
                </NavLink>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://integrisok.com/-/media/blog/aa/complete-proteins.ashx?as=1&mw=720&usecustomfunctions=1&relativeresize=1&revision=46c0a7a4-320d-4a96-a519-386a3c27215b&hash=F89C4EEB23EB110C74342E962B4E58FAD9D5CE7C%5C"
                />
                <Card.Body>
                  <Card.Title>Personalized Nutrition</Card.Title>
                  <Card.Text>
                    Personalized nutrition is rather defined as an approach that
                    counts on details of an individual characteristics to evolve
                    a package.
                  </Card.Text>
                </Card.Body>
                <NavLink to="/" className="text-center">
                  View Details
                </NavLink>
              </Card>
            </Col>
          </Row>
          <div className="row">
            <NavLink to="/services" className="text-center">
              View all services
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
