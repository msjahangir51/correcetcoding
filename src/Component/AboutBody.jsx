import React, { useRef } from 'react';
import "../assets/css/AboutBody.css";
import { FaCloudDownloadAlt } from "react-icons/fa";
import AboutImg from "../assets/images/about-img.png";
import { Link } from 'react-router-dom';
import resume from "./resume.pdf"
function AboutBody() {
    
  return (
    <div className="AboutBody">
        <div draggable="false" className='aboutIMG'><img src={AboutImg} alt="" /></div>
        <div className='AboutTextContent'>
            <h1>About me</h1>
            <p>Highly skilled frontend developer with expertise in HTML, CSS, Tailwind CSS, JavaScript, and React.js. Equipped with a solid understanding of modern web development principles and best practices. Proven ability to create responsive and visually appealing user interfaces while ensuring cross-browser compatibility and accessibility. Adept at collaborating with multidisciplinary teams to deliver exceptional digital experiences. Passionate about staying updated with the latest technologies and trends in frontend development.</p>
        
        <div className="btns">
        <Link to="/contact">Contact us</Link>
        <a href={resume} download="Resume.pdf">resume <FaCloudDownloadAlt size={20}/></a>
        {/* <Link to="/contact" ref={btn} className='btn'>Contact us</Link> */}
        </div>
        </div>
    </div>
  )
}

export default AboutBody