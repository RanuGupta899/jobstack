import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import Header from'./Header'
const Footer = () => {
  return (
   
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          {/* Company Information */}
          <Col md={3}>
            <h5>About Us</h5>
            <p>
              Your go-to platform for the best job listings and career opportunities. We help you find your dream job with ease and simplicity.
            </p>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 1234 Job St, Employment City, EC 56789
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> +1 234 567 890
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> support@jobportal.com
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={2}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/jobs" className="text-light">Jobs</a></li>
              <li><a href="/companies" className="text-light">Companies</a></li>
              <li><a href="/blog" className="text-light">Blog</a></li>
              <li><a href="/contact" className="text-light">Contact</a></li>
              <li><a href="/privacy" className="text-light">Privacy Policy</a></li>
            </ul>
          </Col>

          {/* Support */}
          <Col md={2}>
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><a href="/help-center" className="text-light">Help Center</a></li>
              <li><a href="/faq" className="text-light">FAQ</a></li>
              <li><a href="/terms" className="text-light">Terms of Service</a></li>
              <li><a href="/sitemap" className="text-light">Sitemap</a></li>
            </ul>
          </Col>

          {/* Social Media Links */}
          <Col md={2}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li className="me-3">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="me-3">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </Col>

          {/* Newsletter Subscription */}
          <Col md={3}>
            <h5>Subscribe to our Newsletter</h5>
            <Form>
              <Form.Group controlId="formNewsletterEmail" className="mb-3">
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Button variant="primary" type="submit">Subscribe</Button>
            </Form>
          </Col>
        </Row>

        <hr className="my-2" />

        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; 2024 Job Portal. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    
  );
};

export default Footer;
