import React from "react";
import "./DoctorNavbar.css";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import DoctorSearch from "../doctor-serach/DoctorSearch";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { LOGIN, SIGNUP } from "../../helper/PageRoute";

const DoctorNavbar = () => {
  return (
    <div className="navbar-bg w-100 mx-auto">
      <Navbar
        className="bg-transparent justify-content-between"
        expand="md"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="#home" className="font-weight-bold">
            Doctor +
          </Navbar.Brand>
          <DoctorSearch />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className=" justify-content-center"
          >
            <Nav className="me-auto ">
              <Nav.Link className="navItem">Home</Nav.Link>
              <Nav.Link
                as={ScrollLink}
                to="service"
                smooth={true}
                duration={500}
                className="navItem"
              >
                Service
              </Nav.Link>
              <Nav.Link
                as={ScrollLink}
                to="aboutus"
                smooth={true}
                duration={500}
                className="navItem"
              >
                About Us
              </Nav.Link>
              <Nav.Link as={RouterLink} to={SIGNUP} className="navItem">
                Register
              </Nav.Link>
            </Nav>
            <Nav>
              <Button variant="light">
                <RouterLink to={LOGIN} className="btn-navitem btn">
                  Login
                </RouterLink>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default DoctorNavbar;
