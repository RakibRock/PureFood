import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./Register.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseInitialization from "../../Firebase/firebase.init";

const Register = () => {
  firebaseInitialization();
  const auth = getAuth();

  //declaring individual states for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //event handler
  const handleRegistration = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      const user = result.user;
      console.log(user);
      if (password.length < 6) {
        setError("Password must be atleast 6 chars");
        return;
      }
    });
    console.log(email, password);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
              <h3 className=" text-danger">Please Register</h3>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
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
                  recquired
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
                  recquired
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Form.Text className="text-danger">{error}</Form.Text>
              <Button className="btn-custom" variant="primary" type="submit">
                Submit
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
