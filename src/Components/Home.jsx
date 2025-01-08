import React from 'react';

import Footer from './Footer';
import Slider from './Slider';
import JobCategory from './JobCategory';
import Jobdet from './Jobdet';
// import JobCard from './JobCard';
import Stack from './Stack';
import Popularjob from './Popularjob';
// import Client from './Client';
import Services from './Services';
import Header from './Header';


const Home = () => {
  return (
<>
 <Header/>
    <Slider/>
   
    <Popularjob/>
    {/* <Jobdet/> */}
   
    {/* <JobCard/> */}
    <Stack/>
    {/* <Client/> */}
    <JobCategory/>

    <Services/>
    <Footer/>
    
    </>
  );
};

export default Home;
