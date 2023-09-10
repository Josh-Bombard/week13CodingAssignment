// create a header class that extends into React.Component and has a h3 that says Log In

import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <h3 className='header'>Log In</h3>
    );
  }
}