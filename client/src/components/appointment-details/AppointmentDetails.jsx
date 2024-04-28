import React, { useState } from "react";
import "./AppointmentDetails.css";
import { Form, Row, Col, Container, Button,Alert } from "react-bootstrap";
import Appointment from "../../image/appointment.jpg";
import { useParams ,useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BookAppointmentAsync } from "../../redux/reducers/DoctorReducer";

const AppointmentDetails = () => { 
  // const { doctorId } = useParams();
  const dispatch = useDispatch();
  // const location = useLocation();

  const [formData, setFormData] = useState({
    patientName: "",
    appointmentType: "",
    treatment: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setSuccessMessage("");
  };

  const handleBookingConfirm = () => {
    dispatch(BookAppointmentAsync(formData));
    setSuccessMessage("Appointment booked successfully!"); 
    setFormData({ 
      patientName: "",
      appointmentType: "",
      treatment: "",
    });
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md={6}>
          <h1>
            Find your near by doctor and book your appointment and get treatment
            fast
          </h1>
          <h3 className="mt-2">Appointment Details</h3>
          <Form action="#home" inline={"true"}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className="font-weight-bold">Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter patient Name"
                name="patientName"
                value={formData.patientName}
                onChange={handleFormChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="font-weight-bold">
                Appointment Type
              </Form.Label>
              <Row>
                <Col>
                  <Form.Control
                    placeholder="Consultant"
                    name="appointmentType"
                    value={formData.appointmentType}
                    onChange={handleFormChange}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Treatment"
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleFormChange}
                  />
                </Col>
              </Row>
            </Form.Group>
            <div className="d-flex justify-content-center my-2">
              <Button
                variant="primary"
                type="button"
                className="booking-btn"
                onClick={handleBookingConfirm}
              >
                Booking
              </Button>
            </div>
            {successMessage && (
              <Alert variant="success">{successMessage}</Alert>
            )}
          </Form>
        </Col>
        <Col md={6}>
          <div>
            <img
              src={Appointment}
              alt="Doctor Appointment"
              className="img-fluid mx-auto d-block"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AppointmentDetails;
