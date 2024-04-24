import { useRoutes } from 'react-router-dom'
import './App.scss'
import MainLayout from './layouts/MainLayout'
import Auth from './layouts/Auth'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import AboutUs from './pages/AboutUs/AboutUs'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'


function App() {
  const router = useRoutes([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        {
          path: "",
          element: <Home/>
        }
      ]
    },
    {
      path:'/login',
      element: <Auth/>,
      children: [
        {
          path: '',
          element: <Login/>
        }
      ]
    },
    {
      path:'/register',
      element: <Auth/>,
      children: [
        {
          path: '',
          element: <Register/>
        }
      ]
    },
    {
      path:'/about-us',
      element: <MainLayout/>,
      children: [
        {
          path: '',
          element: <AboutUs/>
        }
      ]
    },
    {
      path:'/contact',
      element: <MainLayout/>,
      children: [
        {
          path: '',
          element: <Contact/>
        }
      ]
    },
    {
      path: '*',
      element:<NotFound/>
    }
  ])
  return (
    router
  )
}

export default App
