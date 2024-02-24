import React from 'react';
import { FaQuoteRight } from "react-icons/fa";
import "../assets/css/Service.css";
import { Link } from 'react-router-dom';
function ServiceBody() {
  return (
    <div className='Service'>
        <h1>Services</h1>
        <div className='service-box'>
        <FaQuoteRight />  
            <h3>Web Design</h3>
            <p>Crafting dynamic and visually appealing websites using HTML, CSS, and JavaScript, ensuring optimal user experience and adherence to web standards</p>

            <Link to="/contact">Contact us</Link>

        </div>
    </div>
  )
}

export default ServiceBody