import React from "react";
import { Form } from "react-bootstrap";
import CoolButton from "../components/CoolButton";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  return (
    <div className="registerPage">
      <h1 className="registerTitle">Register</h1>
      <Form>
        <Form.Group className=" emailGroup" controlId="formBasicEmail">
          <Form.Label className="label">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>

        <Form.Group className=" passwordGroup" controlId="formBasicPassword">
          <Form.Label className="label">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <CoolButton
          text={"Submit"}
          className="submitBtn"
          pathname={"/"}
        />
      </Form>
    </div>
  );
};

export default Register;
