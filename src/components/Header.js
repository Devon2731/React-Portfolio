import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
import "../style/Header.css";

// Header component
function Header() {
  return (
    // Header component
    <>
      <Container fluid className="bg-dark">
        <Row className="justify-content-center text-center mb-0">
          <Col className="pb-0">
            <h1 className="text-white" style={{ fontSize: "70px" }}>
              <Link
                to="React-Portfolio/"
                className="text-white text-decoration-none"
                style={{ margin: "0" }}
              >
                Devon Whitaker
              </Link>
              <FontAwesomeIcon
                icon={faChessKnight}
                flip="horizontal"
                className="fa-knight"
                size="xl"
                style={{ color: "#white" }}
              />
            </h1>
          </Col>
        </Row>
      </Container>
      <Navigation />
    </>
  );
}
// Export Header
export default Header;