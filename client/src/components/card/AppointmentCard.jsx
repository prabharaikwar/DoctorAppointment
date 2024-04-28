import React from "react";
import "./CardStyle.css";
import { Card } from "react-bootstrap";

const AppointmentCard = ({ para, icon }) => {
  return (
    <Card variant="secondary" className="card-appointment mb-2">
      <Card.Body className="d-flex flex-column align-items-center">
        <Card.Title variant="secondary" className="justify-content-center">
          <div>{icon}</div>
        </Card.Title>
        <Card.Text className="text-center">{para}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AppointmentCard;
