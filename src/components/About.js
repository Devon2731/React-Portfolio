// import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../assets/IMG_2138.jpeg";
import "./styles/about.css";

function About() {
  return (
    // About section
    <section id="about" className="py-5">
      <h1 className="about-heading">About Me</h1>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <Image src={avatar} rounded fluid className="about-image" />
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  About Devon
                </Card.Title>
                <Card.Text>
                  I am a dedicated person with a self-starter attitude. I am the type of person that you would want on your team because I get the job done. I always zero in on the project at hand and focus on the little details. I don&apos;t crack under pressure and I&apos;m used to completing tasks within a short amount of time. I am a personable person who is always willing to help others with their problems. I&apos;m always eager to learn new things from others that will help me in the long run. Optimistically, I always look at the glass as half full instead of half empty. I demonstrate an entrepreneurial spirit by taking the initiative to get things done. My professional and educational experiences have provided me with excellent computer skills.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Export About
export default About;
