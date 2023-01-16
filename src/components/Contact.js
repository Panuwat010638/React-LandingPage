import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import "./Contact.css";
import { FaPhoneSquareAlt, FaFacebookSquare,FaLine} from "react-icons/fa";
function Contact() {
  const [contactName,setName]=useState('');
  const [contactEmail,setEmail]=useState('');
  const [contactMessage,setMessage]=useState('');
  onsubmit = (e)=>{
    e.preventDefault();

    const contactObject = {
      name: contactName,
      email: contactEmail,
      message: contactMessage
    };
    axios.post('http://api-for-resume.vercel.app/create', contactObject).then((res) => {
      console.log(res.data)
  }).catch((error) => {
      console.log(error)
  });
    console.log('Success');
    console.log(`Name: ${contactName}`);
    console.log(`Email: ${contactEmail}`);
    console.log(`Message: ${contactMessage}`);
    setName('');
    setEmail('');
    setMessage('');
  }
  return (
    <div className='BG-contact' id='Contact'>
      <div className='contianer'>
        <div className='BG-contact-con'>
              <div className='contact-text-con'>
                <h1>CONTACT US</h1>
                <p> 
                  <FaPhoneSquareAlt className='icon-contact-con'/>Tel. : 083-390-5478<br/>
                  <FaFacebookSquare className='icon-contact-con'/>Facebook : https://www.facebook.com/makenakup.zii/<br/>
                  <FaLine className='icon-contact-con'/>Line : make1638
                </p>
              </div>
              <h2>Send Message</h2>
              <form >
                <div className='block-contact-con'>
                  <label>
                     Name:
                    <input value={contactName} type="text" name="name" placeholder='Your Name' onChange={e => setName(e.target.value)}/>
                  </label>
                  <label>
                    Email:
                    <input value={contactEmail} type="email" name="email" placeholder='Your Email' onChange={e => setEmail(e.target.value)}/>
                  </label>
                    <label>Message:<textarea value={contactMessage} type="text" name="message"  placeholder='Your Message' onChange={e => setMessage(e.target.value)} required>
                    </textarea>
                  </label>
                  
                </div>
              </form>
              <div >
                <button className='btnSubmit' type='submit' onClick={onsubmit}>SUBMIT</button>
              </div>
              
            
        </div>
      </div>
    </div>
  )
}

export default Contact
