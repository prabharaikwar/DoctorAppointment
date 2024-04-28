import React from "react";
import DoctorNavbar from "../components/navbar/DoctorNavbar";
import { Container } from "react-bootstrap";
import AppointmentDetails from "../components/appointment-details/AppointmentDetails";
import AppointmentBooking from "../components/booking/AppointmentBooking";
import Service from "./service/Service";
import FeedbackReview from "../components/feedback/FeedbackReview";
import Footer from "../components/footer/Footer";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <div className="mx-auto">
      <DoctorNavbar />
      <Container>
        <Element id="booking">
          <AppointmentDetails />
        </Element>
        <Element id="aboutus">
          <AppointmentBooking />
        </Element>
        <Element id="service">
          <Service />
        </Element>
        <Element id="knowmore">
          <FeedbackReview />
        </Element>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
