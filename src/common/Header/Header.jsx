import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Header.scss'
import avatar from '../../assets/images/user-avatar.jpg'

function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem('auth-token');
  const handleLogout = () => {
    localStorage.clear();
    navigate('/')
  }
  return (
    <header className='container-center header'>
        <div className="width-page">
            <Link to="/"> <h1>Start Bootstrap</h1></Link>
            {
              !token ? 
              <button className='btn btn-sign-up' onClick={() => navigate('/login')}>Login</button>
              :
              <div className="user">
                <div className="user-avatar">
                 <img src={avatar} alt="" />
                </div>
                <p>Hi, I'm Trang</p>
                <div className="drop-down">
                  <ul>
                    <li>
                      <Link to="/about-us">About us</Link>
                    </li>
                    <li>
                      <Link to='/contact'>Contact</Link>
                    </li>
                    <li onClick={handleLogout}>
                      Logout
                    </li>
                  </ul>
                </div>
              </div>
            }
        </div>
    </header>
  )
}

export default Header
