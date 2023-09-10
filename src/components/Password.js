//create a password component that makes the text turn into dots when it gets put into the box,

import React from 'react'

export default class Password extends React.Component {
  render() {
    return (
      <input type='password' className='password' placeholder='Password'></input>
    );
  }
};