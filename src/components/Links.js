//create a Links component and export it out, has a div that holds three empty links that has the text; Home, About Us, and Contact Us Here


import React from 'react'

export default class Links extends React.Component {
  render() {
    return (
      <div className='links'>
        <a className='home' href='#'>Home</a>
        <a className='about' href='#'>About Us</a>
        <a className='contact' href='#'>Contact Us Here!</a>
      </div>
    );
  }
}