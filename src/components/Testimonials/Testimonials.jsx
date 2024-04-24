import React from 'react'
import './Testimonials.scss'
import tesImage1 from '../../assets/images/testimonials-1.jpg';
import tesImage2 from '../../assets/images/testimonials-2.jpg';
import tesImage3 from '../../assets/images/testimonials-3.jpg';

function Testimonials() {
  return (
    <section className='testimonials container-center'>
        <div className="width-page">
            <h1 className='h1-title'>What people are saying...</h1>
            <div className="testimonials-container">
                <div className="testimonial-item">
                    <div className="avatar">
                        <img src={tesImage1} alt="avatar" />
                    </div>
                    <h3>Margaret E.</h3>
                    <p>"This is fantastic! Thanks so much guys!"</p>
                </div>
                <div className="testimonial-item">
                    <div className="avatar">
                        <img src={tesImage2} alt="avatar" />
                    </div>
                    <h3>Fred S.</h3>
                    <p>"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                </div>
                <div className="testimonial-item">
                    <div className="avatar">
                        <img src={tesImage3} alt="avatar" />
                    </div>
                    <h3>Sarah W.</h3>
                    <p>"Thanks so much for making these free resources available to us!"</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials
