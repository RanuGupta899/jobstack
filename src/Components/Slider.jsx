import React from 'react';
import { Carousel, Container, Form, Button } from 'react-bootstrap';
// import './App.css';

const Slider = () => {
  return (
    <Carousel className="job-slider">
      {/* Slide 1 */}
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="https://jobstack-shreethemes.vercel.app/static/media/bg.9f5fc6c84f7a4eb68e0c.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Discover Top Jobs</h3>
          <p>Apply to thousands of jobs available worldwide</p>
          <SearchForm />
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="https://jobstack-shreethemes.vercel.app/static/media/bg2.bfccecc679de287507db.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Connect with Leading Companies</h3>
          <p>Explore opportunities with top employers</p>
          <SearchForm />
        </Carousel.Caption>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src="https://jobstack-shreethemes.vercel.app/static/media/bg3.b53090a36ed85cc017cd.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Advance Your Career</h3>
          <p>Find roles that fit your skills and goals</p>
          <SearchForm />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

// Search Form Component
const SearchForm = () => {
  return (
    <Container className="search-form-container">
      <Form className="d-flex">
        <Form.Control
          type="text"
          placeholder="Job title, keywords, or company"
          className="me-2"
        />
        <Form.Control
          type="text"
          placeholder="Location"
          className="me-2"
        />
        <Button variant="primary">Find Jobs</Button>
      </Form>
    </Container>
  );
};

export default Slider;