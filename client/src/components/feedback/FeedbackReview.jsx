import React from "react";
import { Container, Row } from "react-bootstrap";
import FeedbackCard from "../card/FeedbackCard";

const FeedbackReview = () => {
  const data = [
    {
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae quae harum aspernatur, enim, fuga accusantium natus consequuntur",
      icon: "A",
      username:"Arun",
      backgroundColor :"bg-success"
    },
    {
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      icon: "S",
      username:"Soham",
      backgroundColor :"bg-primary"
    },
    {
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi beatae quae harum aspernatur, enim, fuga accusantium ",
      icon: "R",
      username:"Rohan",
      backgroundColor: "bg-danger"
    },
  ];

  return (
    <Container>
      <h1>Customer Review</h1>
      <h1>Feedback about the service</h1>
      <Row className="justify-content-between p-3">
        {data.map((item, index) => (
          <FeedbackCard key={index} para={item.para} icon={item.icon} username={item.username} backgroundColor={item.backgroundColor}/>
        ))}
      </Row>
    </Container>
  );
};

export default FeedbackReview;
