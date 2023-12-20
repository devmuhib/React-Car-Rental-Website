import React from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate();
  const onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
// if user is logged in
    localStorage.setItem("loggedIn", true)
    navigate("/home");

    const isLoggedIn = localStorage.getItem("loggedIn")
    
    // I have to call the backend on api /login with the data I have.
    // You can use axios to call the backend

    // in case error we can notify the user
    alert("Wrong email or password");
    // do whatever you want
  };

  return (
    <Helmet title="Login">
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">Get In Touch</h6>

              <Form onSubmit={onSubmit}>
                <FormGroup className="contact__form">
                  <Input placeholder="Your Name" type="text" name="name" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" name="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                  />
                </FormGroup>

                <button className="contact__btn" type="submit">
                  Login
                </button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
