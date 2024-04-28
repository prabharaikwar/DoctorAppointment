import React from "react";
import "./Service.css";
import { Row, Col, Container, Button } from "react-bootstrap";
import Card from "../../components/card/AppointmentCard";
import ServiceImg from "../../image/service-img.jpg";
import { FaTooth } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { FaHeadSideVirus } from "react-icons/fa6";
import { Link } from "react-scroll";

const Service = () => {
  const data = [
    {
      para: "Dental doctor to take care of your teeth and gives treatment and provide solution and proper medicine",
      icon: <FaTooth size={35} className="text-warning" />,
    },
    {
      para: "Eye Specialist to take care of your eye check the eye sight and eye ball rotaion",
      icon: <FaRegEye size={35} className="text-primary" />,
    },
    {
      para: "Nero specialist the nervous system is the important to all giving the best treatment",
      icon: <FaHeadSideVirus size={35} className="text-secondary" />,
    },
  ];

  return (
    <Container className="my-3">
      <Row className="align-items-stretch mb-3">
        <Col md={6}>
          <div className="service-box">
            <img
              src={ServiceImg}
              alt="Doctor Services"
              className="img-fluid mx-auto d-block service-img"
            />
          </div>
        </Col>
        <Col md={6} className="service-box">
          <h1>
            Experienced doctor analyse the patient giving them a proper
            treatment
          </h1>
          <div>
            <ul className="list-unstyled">
              <li className="mb-2">Doctor availability</li>
              <li className="mb-2">Treatment & Consulting</li>
              <li className="mb-2">Top Specialist doctor</li>
              <li className="mb-2">Apply coupon for treatment</li>
            </ul>
          </div>
          <Button
            variant="light"
            size="lg"
            type="submit"
            className="book-appoientment-btn p-3"
          >
            <Link to="booking" smooth={true} duration={500}>
              Book Appointment
            </Link>
          </Button>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col md={6}>
          <h1>Various Specialist are here you to take care of your Health</h1>
          <p>Doctor are availible at any time to care your health</p>
          <Button variant="light" className="border border-dark p-2">
            <Link to="knowmore" smooth={true} duration={500}>
              Know more
            </Link>
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-between p-3">
        {data.map((item, index) => (
          <Card key={index} para={item.para} icon={item.icon} />
        ))}
      </Row>
    </Container>
  );
};

export default Service;
