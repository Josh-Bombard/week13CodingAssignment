//create a username component that takes text and has a placeholder of Username

import React from 'react'

export default class Username extends React.Component {
  render() {
    return (
      <input type='text' className='username' placeholder='Username'></input>
    );
  }
};