import React from 'react';
import "../assets/css/Skills.css"

import { FaHtml5,FaCss3Alt ,FaGithub  } from "react-icons/fa";
import { RiJavascriptFill ,RiReactjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";


function SkillsBody() {
  return (
    <div className='skills'>
        <h1>Ski<span>lls</span></h1>
        <p className='description'>Proficient in developing dynamic and interactive websites using a combination of HTML, CSS, and JavaScript. Skilled in crafting visually appealing layouts and designs with CSS frameworks like Tailwind CSS. Experienced in building responsive and mobile-friendly interfaces to ensure optimal user experience across devices. Proficiency in frontend libraries like React.js to create efficient and scalable web applications. Dedicated to adhering to web standards and best practices for accessibility, performance, and cross-browser compatibility.</p>

        <div className='row'>
            <div className="box">
                <div>

                <FaHtml5 size={50} color="#ffff" className='box-icons'/>
                </div>
                <p>Html5</p>
            </div>
            <div className="box">
                <div>
                <FaCss3Alt size={50} color="#ffff" className='box-icons'/>
                </div>
                <p>CSS3</p>
            </div>
            <div className="box">
                <div>
                <SiTailwindcss size={50} color="#ffff" className='box-icons'/>
                </div>
                <p>Tailwind CSS</p>
            </div>
            <div className="box">
                <div>
                <RiJavascriptFill size={50} color="#ffff" className='box-icons'/>
                </div>
                <p>JavaScript</p>
            </div>
            <div className="box">
                <div>
                <RiReactjsFill size={50} color="#ffff" className='box-icons'/>
                </div>
                <p>React js</p>
            </div>
            <div className="box">
                <div>
            <FaGithub size={50} color="#ffff" className='box-icons'/>
                </div>
            <p>Git & Github</p>
            </div>
        </div>
    </div>
  )
}

export default SkillsBody