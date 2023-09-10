//create a component button that has the text login inside and change some of the css

import React from 'react'

export default class Button extends React.Component {
  render() {
    return <button className='btn btn-primary'>Log In</button>
  }
}