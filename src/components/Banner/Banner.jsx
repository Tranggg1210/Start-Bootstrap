import React from 'react'
import './Banner.scss'

function Banner({ title, children, className }) {
  return (
    <section className={`banner container-center ${className}`}>
      <div className='width-page'>
        <h1> {!title ? `Generate more leads with a professional landing page!` : title}</h1>
        {children}
      </div>
    </section>
  )
}

export default Banner
