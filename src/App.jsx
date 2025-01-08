import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer'
import JobCard from './Components/JobCard';
import Joblist from './Components/Joblist'
import JobCategory from './Components/JobCategory'
import Jobdet from  './Components/Jobdet';
import SigninForm from './Components/SigninForm';
import LoginForm from './Components/LoginForm';
import Contact from './Components/Contact';
import Slider from './Components/Slider';
import About from './Components/About';
import Stack from './Components/Stack';
import Popularjob from './Components/Popularjob';
import Client from './Components/Client';
import Services from './Components/Services';

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/header' element={<Header/>}/>
          <Route path='/Footer' element={<Footer/>}/>
          <Route path='/JobCard' element={<JobCard/>}/>
          <Route path='/Joblist' element={<Joblist/>}/>
          <Route path='/JobCategory' element={<JobCategory/>}/>
          <Route path='/Jobdet' element={<Jobdet/>}/>
          <Route path='/SigninForm' element={<SigninForm/>}/>
          <Route path='/LoginForm' element={<LoginForm/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Stack' element={<Stack/>}/>
          <Route path='/Slider' element={<Slider/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Popularjob' element={<Popularjob/>}/>
          <Route path='/Client' element={<Client/>}/>
          <Route path='/Client' element={<Services/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App;
