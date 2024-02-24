import React, { require} from 'react';
import {v4 as uuidb4} from "uuid";
import "../assets/css/Protfolio.css";

// swiper link 
import { FaExternalLinkAlt } from "react-icons/fa";
// icons


import ProtFolioData from "../../AppData.json";

// import { ProtFolioData } from '..';
function ProtfolioBody() {
  return (
    <div className="Protfolio_body">
        <h1 className='Protfolio_heading'>Letest <span>Projects</span></h1>
        <div className="cards">
            {
                ProtFolioData.map((item)=>{
                    return(
                        <div className="card">
                            <img src={`${item.images}`} className='imgCls' draggable="false"/>
                            <div className="card-inside">
                                <p className='Title'>{item.Title}</p>
                                <p className='description'>{item.description}</p>
                                <a href={item.link} target='_blank'><FaExternalLinkAlt/></a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ProtfolioBody