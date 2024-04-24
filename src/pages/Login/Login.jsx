import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import axios from 'axios'
import './Auth.scss'
import LoadingBar from '../../components/LoadingBar/LoadingBar'

function Login() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  return (
    <div className='container-center auth'>
      <div className='auth-form'>
        {loading && <LoadingBar />}
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string().required('Email is not empty').email('Must be email'),
            password: Yup.string().required('Password is not empty'),
          })}
          onSubmit={async (values) => {
            try {
              setLoading(true)
              const { data } = await axios.post('https://reqres.in/api/login', values)
              localStorage.setItem('auth-token', data.token)
              setTimeout(() => {
                setLoading(false)
                navigate('/')
              }, 2000)
            } catch (error) {
              console.log(error)
            }
          }}>
          {({ errors, touched }) => (
            <Form>
              <div className='auth-close' onClick={() => navigate(-1)}>
                <i className='fa-solid fa-xmark'></i>
              </div>
              <h1 className='h1-title'>Login</h1>
              <Field type='text' name='email' placeholder='Email' className='auth-inp' />
              {errors.email && touched.email && <p className='auth-error'>{errors.email}</p>}
              <Field type='password' name='password' placeholder='Password' className='auth-inp' />
              {errors.password && touched.password && (
                <p className='auth-error'>{errors.password}</p>
              )}
              <button type='submit' className='btn btn-login'>
                Login
              </button>
              <p className='p-desc'>
                Don't have an account? <Link to='/register'>Register</Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Login
