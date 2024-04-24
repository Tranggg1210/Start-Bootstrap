import React from 'react'
import './Features.scss'

function Features() {
  return (
    <section className='features container-center'>
      <div className='width-page'>
        <div className='feature-item'>
          <i className='fa-regular fa-window-maximize'></i>
          <h1 className='h1-title'>Fully Responsive</h1>
          <p className='p-desc'>This theme will look great on any device, no matter the size!</p>
        </div>
        <div className='feature-item'>
          <i className='fa-solid fa-layer-group'></i>
          <h1 className='h1-title'>Bootstrap 5 Ready</h1>
          <p className='p-desc'>Featuring the latest build of the new Bootstrap 5 framework!</p>
        </div>
        <div className='feature-item'>
          <i className='fa-solid fa-terminal'></i>
          <h1 className='h1-title'>Easy to Use</h1>
          <p className='p-desc'>
            Ready to use with your own content, or customize the source files!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Features
