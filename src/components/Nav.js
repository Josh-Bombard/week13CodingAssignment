//create a Nav component, import the Links component, create a nav element that will hold the links and work the CSS through the className of "navbar"

import React from 'react' 
import Links from './Links'

export default class Nav extends React.Component {
  render() {
    return (
      <nav className='navbar'>
        <Links />
      </nav>
    )
  }
}