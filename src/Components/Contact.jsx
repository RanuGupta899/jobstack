import React from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Footer from './Footer';
// import './SignIn.css'; // for custom styling
// import SigninForm from '../../../jobportal/src/Components/SigninForm';

const Contact = () => {
  return (
    <>
<Header/>
    <Container fluid>
<Row>
      <Col md={12}>
          <h2>Our Location</h2>
          <div style={{ width: '100%', height: '400px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345099394!2d144.95373531571867!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f12c27f%3A0xd5e4c6a4fba5a5f3!2sVictoria!5e0!3m2!1sen!2sus!4v1632744182855!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </Col>
      </Row>
          <Container fluid className="contact-container d-flex align-items-center justify-content-center vh-100 w-100">

      <Row className="contact-card  rounded">
        
        {/* Left Side: Image */}
        <Col md={6} className="d-none d-md-block p-0">
          <Image src="https://jobstack-shreethemes.vercel.app/static/media/contact.fa1dcec179ab187ef0877382779d71df.svg" alt="Sign In" className="contact-image" />
        </Col>

        {/* Right Side: Sign-in Form */}
        <Col md={6} xs={12} className="p-5">
          <h2 className="text-center mb-4">Get in Touch </h2>
          <Form>
          <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3 ">
              <Form.Label>Your Email </Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-4 ">
              <Form.Label>Your Question</Form.Label>
              <Form.Control type="textarea" placeholder="Subject" />
            </Form.Group>
            
            <Form.Group controlId="formPassword" className="mb-4">
              <Form.Label>Your Comment</Form.Label>
              <Form.Control type="password" placeholder="message" />
            </Form.Group>


            <Button variant="success" type="submit" className="w-1/2">Send message</Button>
          </Form>
        
        </Col>
      </Row>
    </Container>
    
      <Row className="my-5">
      <Col md={4}>
        <Card className="text-center" style={{ border: 'none', backgroundColor: '#f8f9fa' }}>
          <Card.Body>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <Card.Title>Location</Card.Title>
            <Card.Text>
              123 Job Portal Lane,<br />
              Suite 456,<br />
              New York, NY 10001
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4}>
        <Card className="text-center" style={{ border: 'none', backgroundColor: '#f8f9fa' }}>
          <Card.Body>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <Card.Title>Phone</Card.Title>
            <Card.Text>
            The phrasal sequence is now so that many campaign and benefit<br/>
              +1 (123) 456-7890
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4}>
        <Card className="text-center" style={{ border: 'none', backgroundColor: '#f8f9fa' }}>
          <Card.Body>
            <div style={{ fontSize: '2rem', marginBottom: '10px' }}>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <Card.Title>Email</Card.Title>
            <Card.Text>
            The phrasal sequence is now so that many campaign and benefit<br/>

              info@jobportal.com
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </Container>
    <Footer/>
    </>

  );
};

export default Contact;
