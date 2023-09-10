import React from 'react'
import Header from '../components/Header'
import Username from '../components/Username'
import Password from '../components/Password'
import Button from '../components/LogInButton'

export default class LoginForm extends React.Component {
  render() {
    return (
    <div className='container'>
      <div id='login-form' className='card w-75'>
        <div id='header' className='card-header bg-light text-black text-center'><Header /></div>
        <div id='info-here' className='card-body bg-light text-white text-center'><Username /> <Password /></div>
        <div id='button' className='card-footer text-center'><Button /></div>
      </div>
      </div>
    )
  }
}