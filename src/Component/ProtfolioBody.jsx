import React, { require} from 'react';
import {v4 as uuidb4} from "uuid";
import "../assets/css/Protfolio.css";

// swiper link 
import { FaExternalLinkAlt } from "react-icons/fa";
// icons
import ProtfolioData from "../assets/AppData.json";
console.log(ProtfolioData)
// import { ProtFolioData } from '..';
function ProtfolioBody() {
  return (
    <div className="Protfolio_body">
        <h1 className='Protfolio_heading'>Letest <span>Projects</span></h1>
        <div className="cards">
            {
                ProtfolioData.map((item)=>{
                    const {id,Title,description,link,images} = item;
                    return(
                        <div className="card" key={id}>
                            <img src={`${images}`} className='imgCls' draggable="false"/>
                            <div className="card-inside">
                                <p className='Title'>{Title}</p>
                                <p className='description'>{description}</p>
                                <a href={link} target='_blank'><FaExternalLinkAlt/></a>
                            </div>
                        </div>
                    )
                })
            }
                        {/* <div className="card">
                            <img src={`${img1}`} className='imgCls' draggable="false"/>
                            <div className="card-inside">
                                <p className='Title'>web design</p>
                                <p className='description'>HTML CSS React JS Project And These sites are demo sites</p>
                                <a href="https://finexo12.netlify.app/" target='_blank'><FaExternalLinkAlt/></a>
                            </div>
                        </div> */}

                        {/* <div className="card">
                            <img src={`${img2}`} className='imgCls' draggable="false"/>
                            <div className="card-inside">
                                <p className='Title'>web design</p>
                                <p className='description'>HTML CSS React JS Project And These sites are demo sites</p>
                                <a href="https://caregive.netlify.app/" target='_blank'><FaExternalLinkAlt/></a>
                            </div>
                        </div>

                        <div className="card">
                            <img src={`${img3}`} className='imgCls' draggable="false"/>
                            <div className="card-inside">
                                <p className='Title'>web design</p>
                                <p className='description'>HTML CSS JavaScript Project And These sites are demo sites</p>
                                <a href="https://creativedesign97.netlify.app/" target='_blank'><FaExternalLinkAlt/></a>
                            </div>
                        </div> */}
                    
        </div>
    </div>
  )
}

export default ProtfolioBody