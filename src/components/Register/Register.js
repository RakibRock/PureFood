import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./Register.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { signInUsingGoogle } = useAuth();

  const auth = getAuth();

  //declaring individual states for email and password
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  //event handler
  const handleRegistrationOrLogin = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password must be atleast 6 chars");
      return;
    }
    //if logged in then call signInUser, else call createNewUser
    //conditional function call
    isLogin ? signInUser(email, password) : createNewUser(email, password);
  };

  const signInUser = (email, password) => {
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const createNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        console.log(email, password);
        setUserName();
        //if no error, then an empty error message
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const setUserName = (e) => {
    updateProfile(auth.currentUser, { displayName: name }).then(() => {});
  };
  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  return (
    <div>
      <div className="container-fluid pb-5">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <Form
              onSubmit={handleRegistrationOrLogin}
              className="bg-custom p-4 mt-5 rounded"
            >
              <h3 className=" text-danger">
                Please {isLogin ? "Log in" : "Register"}
              </h3>

              {!isLogin && (
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    onBlur={handleNameChange}
                    placeholder="Enter your name"
                    required
                  />
                  <Form.Text className="text-muted">
                    Your details are safe with us
                  </Form.Text>
                </Form.Group>
              )}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onBlur={handleEmailChange}
                  type="email"
                  placeholder="Enter email"
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onBlur={handlePasswordChange}
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  onChange={toggleLogin}
                  type="checkbox"
                  label="Already registered?"
                />
              </Form.Group>

              <p className="text-danger bold">{error}</p>

              <Button
                onClick={handleRegistrationOrLogin}
                className="btn-custom"
                variant="primary"
                type="submit"
              >
                {isLogin ? "Login" : "Register"}
              </Button>
              <span> or </span>
              <Button
                onClick={signInUsingGoogle}
                className="btn-custom"
                variant="primary"
                type="submit"
              >
                Sign In With Google
              </Button>
            </Form>
          </div>
        </div>
      </div>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  );
};

export default Register;
