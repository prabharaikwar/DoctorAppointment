import React,{useState} from "react";
import "./Footer.css";
import { Form, Col, Row, Container, InputGroup, Button } from "react-bootstrap";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";
import { Link as LinkAs, useNavigate } from "react-router-dom";
import { SIGNUP } from "../../helper/PageRoute";

const Footer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };


  return (
    <div className="footer-container">
      <Container className="mt-3 p-5 justify-content-center">
        <Row>
          <Col md={6}>
            <h3 className="font-weight-bold">Doctor +</h3>
          </Col>
          <Col md={4}>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Enter your Email ID"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={email}
                onChange={handleEmailChange}
              />
              <Button
                variant="outline-secondary"
                id="button-addon2"
                className="footer-btn"
                onClick={()=>{navigate(`${SIGNUP}?email=${email}`);}}
              >
                Sign Up
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row className="d-flex justify-content-around">
          <Col>
            <ul className="list-unstyled">
              <li className="mb-2 font-weight-bold">About</li>
              <Link to="service" smooth={true} duration={500}>
                <li className="mb-2 ">Service</li>
              </Link>

              <li className="mb-2">Beg</li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li className="mb-2 font-weight-bold">Information</li>

              <li className="mb-2">
                <LinkAs to={SIGNUP} className="li-text-none text-dark">
                  Sign Up
                </LinkAs>
              </li>

              <li className="mb-2">Join Community</li>
              <li className="mb-2">Terms</li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li className="mb-2 font-weight-bold">Contact Us</li>
              <li className="mb-2">Help & Support</li>
              <li className="mb-2">Partner with us</li>
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <li className="mb-2 font-weight-bold">Legal</li>
              <li className="mb-2">Terms & Conditions</li>
              <li className="mb-2">Cookis Policy</li>
              <li className="mb-2">Privacy Policy</li>
            </ul>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <div className="font-weight-bold">Follow us on</div>
        </Row>
        <Row className="justify-content-center">
          <Col className="d-flex justify-content-center">
            <div>
              <AiFillFacebook size={25} className="text-facebook" />
            </div>
            <div>
              <FaInstagramSquare size={25} className="text-insta mx-1" />
            </div>
            <div>
              <FaTwitter size={25} className="text-twitter mx-1" />
            </div>
            <div>
              <FaLinkedinIn size={25} className="text-linkdin" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
