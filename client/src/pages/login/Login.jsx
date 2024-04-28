import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { HOME,SIGNUP } from "../../helper/PageRoute";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container className="p-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="login-user">
            <Card.Header>
              <Row>
                <Link to={HOME} className="text-light mx-2">
                  Home
                </Link>
              </Row>
            </Card.Header>
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              <Form onSubmit={handleSubmit} className="p-2">
                <Form.Group controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    autoComplete="username"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mt-4">
                  Login
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer>
              <Row className="justify-content-center p-3">
                <Col sm={3}>
                  <Button
                    variant="light"
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    Back
                  </Button>
                </Col>
                <Col sm={9} className="justify-content-center">
                  <p>
                    Don't have an account yet?
                    <Link to={SIGNUP} className="text-light mx-2">
                      Register
                    </Link>
                  </p>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
