import React from 'react'
import './Contact.scss'
import Banner from '../../components/Banner/Banner'

function Contact() {
  return (
    <div className='contact'>
      <Banner title={'Contact Start Bootstrap'}>
        <div className="contact-form">
          <input type="text" placeholder='Email Address'/>
          <button className='btn'>Contact</button>
        </div>
      </Banner>
    </div>
  )
}

export default Contact
