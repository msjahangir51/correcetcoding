import React from 'react';
import Navbar2 from '../Component/Navbar2';
import "../assets/css/Home.css";
import { Link } from 'react-router-dom';
import Skills from './Skills';
import AboutBody from '../Component/AboutBody';
import ServiceBody from '../Component/ServiceBody';
import SkillsBody from '../Component/SkillsBody';
import ProtfolioBody from './../Component/ProtfolioBody';
import Footer from '../Component/Footer';

function Model() {
  return(
  <>
        <Navbar2/>
    <div className='Home'>
        <h4>Hello World.</h4>
        <h1>I'm Jahangir Alom</h1>
        <p>FRONT-END DEVELOPER</p>

        <Link to="/contact" className='btn'>Contact us</Link>
    </div>

    <SkillsBody/>

    <AboutBody/>

    <ServiceBody/>

    <ProtfolioBody/>

    <Footer/>
  </> 
  )
}

export default Model