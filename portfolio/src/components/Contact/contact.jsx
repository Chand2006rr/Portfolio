import React from 'react'
import "./contact.css"
import con from "../../assets/contact.png"

function Contact() {
  return (
    <div id='contact'>
      <div className="leftcontact">
        <img src={con} alt="" />
      </div>
      <div className="rightcontact">
        <form action="https://formspree.io/f/myeyrnzk" method='POST'>
          <input name="Username" type="text" placeholder='Name'/>
          <input name="email" type="email" placeholder='Email'/>
          <textarea name="textare" id="textarea" placeholder='Message Me'></textarea>
          <input type="submit" placeholder='Submit' className='btn'/>
        </form>
      </div>
    </div>
  )
}

export default Contact
