import React,{useState,useRef} from 'react'

import "../assets/css/Contact_usBody..css";

// EMAIL JS 
import emailjs from '@emailjs/browser';
import SMS_send from './SMS_send';


function Contact_usBody() {
    let [SUCCESS, SetSUCCESS] = useState(false)  
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_998rg3r', 'template_m1g3whb', form.current, {
          publicKey: 'vHvgJ-jM15VWYdrJh',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            SetSUCCESS(!SUCCESS);
          },
          (error) => {
            alert("SMS Send Failed");
            console.log('FAILED...', error.text);
          },
        );
    };

  
  return (
    <div className="contactus">
        <h1 className='Contactus_heading'>Contact <span>us</span></h1>
      

        <form onSubmit={sendEmail} ref={form}>
      <input type="text" name="user_name" placeholder='Enter Your Name' required/>
      <input type="email" name="user_email" placeholder='Enter Your Email Address' required />
      <textarea name="message" placeholder='Enter Your Message' required/>
      <input type="submit"  className='SubmitBTN' value="Send" />
            </form>


<SMS_send complate={SUCCESS}/>
    </div>
  )
}

export default Contact_usBody