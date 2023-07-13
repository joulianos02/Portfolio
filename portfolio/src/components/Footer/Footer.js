import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <Container>
        <Row>
          <Col lg={12} className="text-center text-white">
            <a href="https://www.github.com/your-username" className="text-white me-4">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/your-username" className="text-white">
              <i className="fab fa-linkedin"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
