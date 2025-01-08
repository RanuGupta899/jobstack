// JobDescription.js
import React from "react";
import { Container, Row, Col,Card,Button } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBriefcase, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import "leaflet/dist/leaflet.css";
import Header from "./Header";
import Footer from "./Footer";
const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      jobType: 'Full-Time',
      salary: '$90,000 - $110,000 / year',
    },
    {
      id: 2,
      title: 'Backend Developer',
      company: 'Innovate Solutions',
      location: 'Austin, TX',
      jobType: 'Remote',
      salary: '$85,000 - $100,000 / year',
    },
    {
      id: 3,
      title: 'Project Manager',
      company: 'Creative Minds',
      location: 'New York, NY',
      jobType: 'Contract',
      salary: '$75 - $90 / hour',
    },
    {
      id: 4,
      title: 'Data Analyst',
      company: 'Data Insights Co.',
      location: 'Chicago, IL',
      jobType: 'Part-Time',
      salary: '$60,000 - $70,000 / year',
    },
    {
      id: 5,
      title: 'UI/UX Designer',
      company: 'Design Studio',
      location: 'Los Angeles, CA',
      jobType: 'Full-Time',
      salary: '$80,000 - $95,000 / year',
    },
    {
      id: 6,
      title: 'Marketing Specialist',
      company: 'Brand Solutions',
      location: 'Miami, FL',
      jobType: 'Remote',
      salary: '$50,000 - $65,000 / year',
    },
    {
      id: 7,
      title: 'Customer Support',
      company: 'Tech Help Inc.',
      location: 'Seattle, WA',
      jobType: 'Full-Time',
      salary: '$40,000 - $50,000 / year',
    },
    {
      id: 8,
      title: 'Software Engineer',
      company: 'NextGen Tech',
      location: 'Boston, MA',
      jobType: 'Contract',
      salary: '$110,000 - $130,000 / year',
    },
  ];
const Jobdet= () => {
  return (
    <>
    <Header/>
    <Container fluid className="p-4 ">
      <Row>
        {/* Left Side - Job Description */}
        <Col md={8} className=" p-4">
          <h2>Software Engineer</h2>
          <p><strong>Company:</strong> Tech Solutions</p>
          <p><strong>Experience:</strong> 3-5 years</p>
          <p><strong>Skills:</strong> React, Node.js, Bootstrap, REST APIs</p>
          <h4 className="mt-5">Job Description:</h4>
          <p>
            We are looking for a skilled software engineer to join our team.
            The ideal candidate should have experience with React and Node.js
            and a strong understanding of software development best practices.
            Your precis must offer an outline of your organisation and expectancies for the location
          </p>
          <p>If you like to work in a fast paced retail surroundings and preference 
            an possibility to earn appealing bonuses in your difficult paintings, we need
             to pay attention from you. Our shoe shop franchise wishes an articulate and informed 
             person to take over the Assistant Manager role. You’ll set schedules for all income associates, 
             assist the GM increase and control promotions, make contributions to the high-power surroundings withinside the shop, 
             order products and take care of all budgetary elements of walking the business. We sell from inside each time possible, so
              capability profession
             tracks should encompass GM, DM or advertising </p>
          <h4 className="mt-5">Responsibilities:</h4>
          <ul >
            <li>Develop and maintain web applications using React and Node.js</li>
            <li>Collaborate with cross-functional teams</li>
            <li>Become liaison with company workplace and use contacts to sell the commercial enterprise
                 and align with emblem values.</li>
            <li>Maintain correct purchaser facts for loyalty program.</li>
            <li>Participate in code reviews and contribute to the codebase</li>
         <li>Manage and examine sales and cost reports.</li>
         <li>Continually advance your product understanding and that of different employees.</li>
          </ul>

          <h4 className="mt-5">Requirements:</h4>
          <ul>
            <li>3+ years of experience in software development</li>
            <li>Proficiency in JavaScript and frameworks like React</li>
            <li>Good understanding of REST APIs and backend technologies</li>
          <li>Ability to efficiently teach and inspire income associates.
          </li>
          <li>Familiarity with style tendencies and styles.
          </li>
          </ul>
          <h4 className="mt-5">Other Benifits:</h4>
          <ul>
            <li>Health and life insurance.</li>
            <li>Lunch and Snacks</li>
            <li>2 days of weekend</li>
            <li>2 annuals performance bonuses.</li>
          </ul>
        </Col>

        {/* Right Side - Job Summary and Location */}
        <Col md={4} className="p-4">
          {/* Job Summary */}
          <div className=" p-3 mb-4 border rounded">
            <h4>Job Summary</h4><hr />
            <p><strong>Published:</strong> Nov 6,2021</p><hr />
            <p><strong>Vacancy:</strong>08</p><hr />
            <p><strong>Status:</strong>Full-time</p><hr />
            <p><strong>Experience:</strong>5 years</p><hr />
            <p><strong>Location:</strong> San Francisco, CA</p><hr />
            <p><strong>Salary:</strong> $120,000 - $150,000</p><hr />
            <p><strong>Deadline:</strong>Nov 15,2021</p>
          </div>

          {/* Map Location */}
          <div className="bg-light p-3">
            <h4>Location</h4>
            <MapContainer center={[37.7749, -122.4194]} zoom={13} style={{ height: "300px", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[37.7749, -122.4194]}>
                <Popup>Job location in San Francisco, CA</Popup>
              </Marker>
            </MapContainer>
          </div>
{/* About Company */}
<div className=" p-3  mt-3 border rounded">
            <h4>About Company</h4><hr />
            <p><strong>Phone:</strong> (+44)123456789</p><hr />
            <p><strong>Email:</strong>info@gmail.com</p><hr />
            <p><strong>Website:</strong>www.info.com</p><hr />
            <p><strong>Address:</strong>66 Guild Street 512B, Great North Town</p>
            
          </div>

        </Col>
        <h3 className="py-3 px-3">Related Jobs:</h3>
      <Row>
        {jobs.map((job) => (
          <Col md={4} lg={3} className="mb-4" key={job.id}>
            <Card className="card-jobs h-100">
              <Card.Body>
                {/* Job Title and Company */}
                <Card.Title>{job.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>

                {/* Location and Job Type */}
                <div className="mb-2 color-success">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> {job.location}
                </div>
                <div className="mb-2 color-success">
                  <FontAwesomeIcon icon={faBriefcase} /> {job.jobType}
                </div>
                
                {/* Salary */}
                <div className="mb-3 color-success">
                  <FontAwesomeIcon icon={faDollarSign} /> {job.salary}
                </div>

                {/* View Details Button */}
                <Button variant="success" className="w-1/2">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Row>
    </Container>
<Footer/>
    </>
  );
};

export default Jobdet;
