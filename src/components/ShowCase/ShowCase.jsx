import React from 'react'
import './ShowCase.scss'
import scImage1 from '../../assets/images/bg-showcase-1.jpg'
import scImage2 from '../../assets/images/bg-showcase-2.jpg'
import scImage3 from '../../assets/images/bg-showcase-3.jpg'

function ShowCase() {
  return (
    <section className='show-case'>
      <div className='show-case-item'>
        <div className='show-case-content'>
          <h1 className='h1-title'>Fully Responsive Design</h1>
          <p className='p-desc'>
            When you use a theme created by Start Bootstrap, you know that the theme will look great
            on any device, whether it's a phone, tablet, or desktop the page will behave
            responsively!
          </p>
        </div>
        <div className='show-case-img'>
          <img src={scImage1} alt='show case image 1' />
        </div>
      </div>
      <div className='show-case-item'>
        <div className='show-case-img'>
          <img src={scImage2} alt='show case image 1' />
        </div>
        <div className='show-case-content'>
          <h1 className='h1-title'>Updated For Bootstrap 5</h1>
          <p className='p-desc'>
            Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in
            mobile responsive web development! All of the themes on Start Bootstrap are now using
            Bootstrap 5!
          </p>
        </div>
      </div>
      <div className='show-case-item'>
        <div className='show-case-content'>
          <h1 className='h1-title'>Easy to Use & Customize</h1>
          <p className='p-desc'>
            Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper
            customization options. Out of the box, just add your content and images, and your new
            landing page will be ready to go!
          </p>
        </div>
        <div className='show-case-img'>
          <img src={scImage3} alt='show case image 1' />
        </div>
      </div>
    </section>
  )
}

export default ShowCase
