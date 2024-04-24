import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../../components/Banner/Banner'
import Features from '../../components/Features/Features'
import ShowCase from '../../components/ShowCase/ShowCase'
import Testimonials from '../../components/Testimonials/Testimonials';

function Home() {
  useEffect(() => {
    document.title = 'start-bootstrap'
  },[])
  const navigate = useNavigate();
  return (
    <div>
      <Banner/>
      <Features/>
      <ShowCase/>
      <Testimonials/>
      <Banner title={"Ready to get started? Sign up now!"} className={"banner-sign-up"}>
        <button className='btn' onClick={() => navigate('/register')}>Register</button>
      </Banner>
    </div>
  )
}

export default Home
