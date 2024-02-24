import React,{useState} from 'react';
import "../assets/css/Navbar.css";
import { Link,NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar2() {
let [scrolCount, SetCount] =useState();
    onscroll =()=>{
        let scrolly = window.scrollY;
        // console.log(scrolly);
        SetCount(scrolly);
        
    }
  let [nav,Setnav] = useState(false);
  return (
    <div className={nav ? "navbar active2" : scrolCount > 170 ? "navbar active2": "navbar"}>
        <Link to="/" className='Logo'>Correct <span> Coding</span></Link>

        <ul className={nav?"nav active" : "nav" }>
          <li><NavLink to="/" className={({isActive})=> isActive ? "active" : ""}>Home</NavLink></li>
        <li><NavLink to="/skills" className={({isActive})=> isActive? "active" : ""}>Skills</NavLink></li>
        <li><NavLink to="/service" className={({isActive})=> isActive? "active" : ""}>Service</NavLink></li>
        <li><NavLink to="/about" className={({isActive})=> isActive? "active" : ""}>About</NavLink></li>
        <li><NavLink to="/protfolio" className={({isActive})=> isActive? "active" : ""}>Protfolio</NavLink></li>
        <li><NavLink to="/contact" className={({isActive})=> isActive? "active" : ""}>Contact us</NavLink></li>
        </ul>

        <div className='bars' onClick={()=> Setnav(!nav)}> {nav ? <FaTimes size={20}/> :<FaBars size={20}/>}</div>
    </div>
  )
}

export default Navbar2;