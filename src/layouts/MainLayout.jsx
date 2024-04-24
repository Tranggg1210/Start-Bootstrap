import React from 'react'
import Header from '../common/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../common/Footer/Footer'

function MainLayout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default MainLayout
