import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import useFirebase from "../../hooks/useFirebase";

const Header = () => {
  const { user } = useFirebase();
  console.log(user.email);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 p-0 ">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">
                <h3>
                  <span id="brand-pure">Pure</span>
                  <span id="brand-food">Food</span>
                </h3>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={NavLink} to="/home">
                    Home
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/about">
                    About
                  </Nav.Link>
                  <NavDropdown title="Services" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={NavLink} to="/services">
                      All Services
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link as={NavLink} to="register">
                    Register
                  </Nav.Link>
                  {user.email ? (
                    <Nav.Link as={NavLink} to="">
                      LogOut
                    </Nav.Link>
                  ) : (
                    <Nav.Link as={NavLink} to="login">
                      LogIn
                    </Nav.Link>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default Header;
