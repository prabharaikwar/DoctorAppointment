import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

const FeedbackCard = ({ username, icon, para, backgroundColor }) => {
  return (
    <Card variant="light" className="card-feedback mb-2">
      <Card.Body>
        <Card.Title>
          <Row className="align-items-center">
            <Col xs={3} className="text-sm">
              <div className={`profile-icon ${backgroundColor}`}>{icon}</div>
            </Col>
            <Col xs={9}>
              <div>{username}</div>
            </Col>
          </Row>
          <Row className="justify-content-start mx-auto">
            <IoIosStar size={15} className="text-warning" />
            <IoIosStar size={15} className="text-warning" />
            <IoIosStar size={15} className="text-warning" />
            <IoIosStar size={15} className="text-warning" />
            <IoIosStarOutline size={15} className="text-warning" />
          </Row>
        </Card.Title>
        <Card.Text>{para}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FeedbackCard;
