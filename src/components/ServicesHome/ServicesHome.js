import React from "react";
import { CardGroup, Card, Row, Col, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./ServicesHome.css";
const ServicesHome = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <h6 className="pt-5 text-center fw-normal">What We Do</h6>
        <h1 className="pb-4 text-center">Services</h1>
        <div className="col-md-12 pt-3 ps-5 pe-5">
          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://us.123rf.com/450wm/volff/volff1901/volff190100224/116035024-food-pyramid-or-diet-pyramid-diagram-presents-basic-food-groups-.jpg?ver=6"
                />
                <Card.Body>
                  <Card.Title>Workout Routine</Card.Title>
                  <Card.Text>
                    Fitness training balances five elements of good health. Make
                    sure your routine includes aerobic fitness, strength
                    training.
                  </Card.Text>
                </Card.Body>
                <NavLink to="/service1" className="text-center btn btn-warning">
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
                <NavLink to="/service2" className="text-center btn btn-warning">
                  View Details
                </NavLink>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://us.123rf.com/450wm/ifong/ifong1008/ifong100800003/7499029-food-pyramid-represents-way-of-healthy-eating.jpg?ver=6"
                />
                <Card.Body>
                  <Card.Title>Personalized Nutrition</Card.Title>
                  <Card.Text>
                    Personalized nutrition is rather defined as an approach that
                    counts on details of an individual characteristics to evolve
                    a package.
                  </Card.Text>
                </Card.Body>
                <NavLink to="/service3" className="text-center btn btn-warning">
                  View Details
                </NavLink>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://us.123rf.com/450wm/ifong/ifong1008/ifong100800003/7499029-food-pyramid-represents-way-of-healthy-eating.jpg?ver=6"
                />
                <Card.Body>
                  <Card.Title>Personalized Nutrition</Card.Title>
                  <Card.Text>
                    Personalized nutrition is rather defined as an approach that
                    counts on details of an individual characteristics to evolve
                    a package.
                  </Card.Text>
                </Card.Body>
                <NavLink to="/service4" className="text-center btn btn-warning">
                  View Details
                </NavLink>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://us.123rf.com/450wm/ifong/ifong1008/ifong100800003/7499029-food-pyramid-represents-way-of-healthy-eating.jpg?ver=6"
                />
                <Card.Body>
                  <Card.Title>Personalized Nutrition</Card.Title>
                  <Card.Text>
                    Personalized nutrition is rather defined as an approach that
                    counts on details of an individual characteristics to evolve
                    a package.
                  </Card.Text>
                </Card.Body>
                <NavLink to="/service5" className="text-center btn btn-warning">
                  View Details
                </NavLink>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://us.123rf.com/450wm/ifong/ifong1008/ifong100800003/7499029-food-pyramid-represents-way-of-healthy-eating.jpg?ver=6"
                />
                <Card.Body>
                  <Card.Title>Personalized Nutrition</Card.Title>
                  <Card.Text>
                    Personalized nutrition is rather defined as an approach that
                    counts on details of an individual characteristics to evolve
                    a package.
                  </Card.Text>
                </Card.Body>
                <NavLink
                  to="/service6  "
                  className="text-center btn btn-warning"
                >
                  View Details
                </NavLink>
              </Card>
            </Col>
          </Row>
          <div className="row">
            <NavLink
              to="/services"
              className="text-center btn btn-warning border mt-5 "
            >
              View all services
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
