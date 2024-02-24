import React from 'react'
import "../assets/css/Contact_usBody..css";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

function SMS_send(props) {
  // console.log(props.complate)

  let TrueOrFalse = props.complate;
  return (
    <div className={TrueOrFalse ? 'SMS_SEND_SUCCESS active' :'SMS_SEND_SUCCESS'}>
        <div className="POPUP">
            <FaCheckCircle/>
            <h1>Thanks!</h1>
            <p>The Form was Submited Successfully.</p>
            <Link to="/">Go Back</Link>
        </div>
    </div>
  )
}

export default SMS_send