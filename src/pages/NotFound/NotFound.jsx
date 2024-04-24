import React from 'react'
import {useNavigate} from 'react-router-dom'
import './NotFound.scss'
import notFound from '../../assets/images/not-found.jpg';
function NotFound() {
  const navigate = useNavigate();
  return (
    <div className='not-found'>
      <img src={notFound} alt="notfound" />
      <button className='btn' onClick={() => navigate('/')}>Back Home</button>
    </div>
  )
}

export default NotFound
