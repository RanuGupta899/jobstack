import React from 'react';
import { Container, Row, Col,Card,Button } from 'react-bootstrap';
// import JobCard from './JobCard';


const App = () => {
  // Sample job data
  const jobData = [
    {
      title: "Software Engineer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      description: "Develop and maintain web applications using React, Node.js, and MongoDB.",
      salary: "$80,000 - $100,000",
      postedDate: "2 days ago"
    },
    {
      title: "Data Analyst",
      company: "Data Insights Ltd.",
      location: "New York, NY",
      description: "Analyze and interpret complex datasets complex datasets to drive business insights.",
      salary: "$60,000 - $75,000", 
      postedDate: "5 days ago"
    },
    {
      title: "Product Manager",
      company: "Innovate Tech",
      location: "Remote",
      description: "Lead product development teams to deliver high-quality products on time.",
      salary: "$90,000 - $110,000",
      postedDate: "1 week ago"
    },

       {
          title: "Software Engineer",
          company: "Tech Solutions Inc.",
          location: "San Francisco, CA",
          description: "Develop and maintain web applications using React, Node.js, and MongoDB.",
          salary: "$80,000 - $100,000",
          postedDate: "2 days ago"
        },
        {
          title: "Data Analyst",
          company: "Data Insights Ltd.",
          location: "New York, NY",
          description: "Analyze and interpret complex datasets complex datasets to drive business insights.",
          salary: "$60,000 - $75,000", 
          postedDate: "5 days ago"
        },
        {
          title: "Product Manager",
          company: "Innovate Tech",
          location: "Remote",
          description: "Lead product development teams to deliver high-quality products on time.",
          salary: "$90,000 - $110,000",
          postedDate: "1 week ago"
        }

  ];

  return (
    <>
    <Container>
      <h1 className="my-4 text-center">Job Portal</h1>
      <Row>
        {jobData.map((job, index) => (
          <Col md={4} className="mb-4" key={index}>
             <Card>
      <Card.Body>
        <Card.Title>{job.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{job.company}</Card.Subtitle>
        <Card.Text>
          <strong>Location:</strong> {job.location} <br />
          <strong>Description:</strong> {job.description} <br />
          <strong>Salary:</strong> {job.salary} <br />
          <strong>Posted:</strong> {job.postedDate}
        </Card.Text>
        <Button variant="primary">Apply Now</Button>
      </Card.Body>
    </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
};

export default App;







