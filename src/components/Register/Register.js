import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./Register.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebaseInitialization from "../../Firebase/firebase.init";

const Register = () => {
  firebaseInitialization();
  const auth = getAuth();

  //declaring individual states for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  //event handler
  const handleRegistration = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter an email");
      return;
    }
    if (!password) {
      setError("Please enter a password");
      return;
    }
    if (password.length < 6) {
      setError("Password must be atleast 6 chars");
      return;
    }
    //if logged in then call signInUser, else call createNewUser
    //conditional function call
    isLogin ? signInUser() : createNewUser(email, password);
  };

  const signInUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
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
        //if no error, then an empty error message
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <Form
              onSubmit={handleRegistration}
              className="bg-custom p-4 mt-5 rounded"
            >
              <h3 className=" text-danger">
                Please {isLogin ? "Log in" : "Register"}
              </h3>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  required
                />
                <Form.Text className="text-muted">
                  Your details are safe with us
                </Form.Text>
              </Form.Group>
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
                onClick={handleRegistration}
                className="btn-custom"
                variant="primary"
                type="submit"
              >
                {isLogin ? "Login" : "Register"}
              </Button>
              <span> or </span>
              <Button className="btn-custom" variant="primary" type="submit">
                Sign In With Google
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
