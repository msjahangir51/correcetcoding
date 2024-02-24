import React from 'react'
import "../assets/css/Footer.css";
import { FaFacebook ,FaTwitter,FaInstagram ,FaLinkedin ,FaGithub  } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="footerBody">
      <div className="Footericons">
        <h1>Profile</h1>
        <div className="icons">
        <Link to="https://www.facebook.com/profile.php?id=61556790718289" target='_blank'><FaFacebook/></Link>
        <Link to="https://www.linkedin.com/in/md-jahangir-alom-8816bb2b6/" target='_blank'><FaLinkedin/></Link>
        <Link to="https://www.instagram.com/correct_coding/" target='_blank'><FaInstagram /></Link>
        <Link to="https://github.com/msjahangir51?tab=repositories" target='_blank'><FaGithub/></Link>
        </div>
      </div>
      <div className="Footericons">
        <h1>Pages</h1>
      </div>
      <div className="Footericons">
        <h1>All link</h1>
      </div>
      <p>Copyright © 2024 by Correct Coding | All Right Reserved.</p>
    </div>
  )
}

export default Footer