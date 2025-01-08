import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBriefcase, faDollarSign, faClock, faClockFour } from '@fortawesome/free-solid-svg-icons';
import { ClockIcon } from '@heroicons/react/24/outline';
import Header from './Header';
import Footer from './Footer';
const jobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
    jobType: 'Full-Time',
    salary: '90,000 / year',
    src:'https://jobboard.websitelayout.net/img/avatar/avatar-02.jpg',

    
  },
  {
    id: 2,
    title: 'Backend Developer',
    company: 'Innovate Solutions',
    location: 'Austin, TX',
    jobType: 'Remote',
    salary: '85,000  / year',
    src:'https://jobboard.websitelayout.net/img/avatar/avatar-02.jpg',

  },
  {
    id: 3,
    title: 'Project Manager',
    company: 'Creative Minds',
    location: 'New York, NY',
    jobType: 'Contract',
    salary: '75  / hour',
    src:'https://jobboard.websitelayout.net/img/avatar/avatar-02.jpg',


  },
  {
    id: 4,
    title: 'Data Analyst',
    company: 'Data Insights Co.',
    location: 'Chicago, IL',
    jobType: 'Part-Time',
    salary: '60,000 / year',
    src:'https://jobboard.websitelayout.net/img/avatar/avatar-02.jpg',

  },
  {
    id: 5,
    title: 'UI/UX Designer',
    company: 'Design Studio',
    location: 'Los Angeles, CA',
    jobType: 'Full-Time',
    salary: '80,000  / year',
    src:'https://jobboard.websitelayout.net/img/avatar/avatar-02.jpg',

  },
  {
    id: 6,
    title: 'Marketing Specialist',
    company: 'Brand Solutions',
    location: 'Miami, FL',
    jobType: 'Remote',
    salary: '65,000 / year',
    src:'https://jobboard.websitelayout.net/img/avatar/avatar-02.jpg',

  },
  {
    id: 7,
    title: 'Customer Support',
    company: 'Tech Help Inc.',
    location: 'Seattle, WA',
    jobType: 'Full-Time',
    salary: ' 50,000 / year',
    src:'https://jobboard.websitelayout.net/img/avatar/avatar-02.jpg',

  },
  {
    id: 8,
    title: 'Software Engineer',
    company: 'NextGen Tech',
    location: 'Boston, MA',
    jobType: 'Contract',
    salary: ' 130,000 / year',
    src:'https://jobboard.websitelayout.net/img/avatar/avatar-02.jpg',
  },
];
const jobs1=[
{
id:1,
title:'Software Engineer',
location:'New York, USA',
jobType:'Full-Time',
salary:'$123 - $456',
src:'com-logo-1.jpg',
},
{
  id:2,
  title:'Marketing Manager',
  location:'New York, USA',
  jobType:'Full-Time',
  salary:'$123 - $456',
  src:'com-logo-2.jpg',
  },
  {
    id:3,
    title:'Product Designer',
    location:'New York, USA',
    jobType:'Full-Time',
    salary:'$123 - $456',
    src:'com-logo-3.jpg',
    },
    {
      id:4,
      title:'Creative Director',
      location:'New York, USA',
      jobType:'Full-Time',
      salary:'$123 - $456',
      src:'com-logo-4.jpg',
      },
      {
        id:5,
        title:'Wordpress Developer',
        location:'New York, USA',
        jobType:'Full-Time',
        salary:'$123 - $456',
        src:'com-logo-5.jpg',
        },
];

const Joblist = () => {
  return (
    <>
    <Header/>
  <div className='bg-gray-50'>
    <Container className="py-5 ">
      <h2 className="mb-4">Related Jobs</h2>
      <Row>
        {jobs.map((job) => (
          <Col md={3} lg={4} className="mb-4" key={job.id}>
            <Card className=" card-jobs h-100 text-gray-400">
              <Card.Body>
                {/* Job Title and Company */}
                <Card.Title>{job.title}</Card.Title>
                <div className='w-100 flex '>
                <div className='mt-3 h-14 w-14 '><img src={job.src} style={{borderRadius:'50%'}}/></div>
                <Card.Subtitle className=" mt-4 ml-2 text-gray-100">{job.company}</Card.Subtitle></div>
                   {/* Salary */}
                <div className="mt-3 text-green-600">
                  <FontAwesomeIcon icon={faDollarSign} /> {job.salary}
                </div>
                {/* Location and Job Type */}
                <div className="my-3 flex space-x-4  ">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> {job.location} 
                  <FontAwesomeIcon icon={faClockFour} /> {job.jobType}

                </div>
                
                
               

                {/* View Details Button */}
                <Button variant="success" className="w-1/2">Apply Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
   
    <h2 className="mx-auto  px-4 my-5">Job Listing</h2>

    {jobs1.map((job) => (
    <div className='container'>

   
    <div className="job-item p-4 mb-4 border-1 border-teritary" key={job.id}>
    <div className="row g-4">
    <div className="col-sm-12 col-md-8 d-flex align-items-center">
   <img src= {job.src}/>
    {/* <img className="flex-shrink-0 img-fluid border rounded" src="img/com-logo-2.jpg" alt="" style="width: 80px; height: 80px;"/> */}
        <div className="text-start ps-4">
            <h5 className="mb-3">{job.title}</h5>
            <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-success me-2"></i>{job.location}</span>
            <span className="text-truncate me-3"><i className="far fa-clock text-success me-2"></i>{job.jobType}</span>
            <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-success me-2"></i>{job.salary}</span>
        </div>
    </div>
    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
        <div className="d-flex mb-3">
            <a className="btn btn-light btn-square me-3" href=""><i className="far fa-heart text-success"></i></a>
            <a className="btn btn-success" href="">Apply Now</a>
        </div>
      <small className="text-truncate"><i className="far fa-calendar-alt text-success me-2"></i>Date Line: 01 Jan, 2045</small>
                      </div>
                  </div>
              </div>
  
              </div>
             
                
                ))};              
        <div className='mx-auto text-center py-2'>
        <a className=" button btn btn-success  py-3 my-3  " href="">Browse More Jobs</a>
          </div>
        </div>
       <Footer/>
        </>  
  )};

export default Joblist;



