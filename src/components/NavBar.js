import * as React from 'react'
import logo from './../assets/logo-final.svg'

class NavBar extends React.Component {
  render () {
    return (
      <nav>
        <img className='logo' src={logo}/>
        <div className='nav-links'>
          <h1>about</h1>
          <h1>experience</h1>
          <h1>projects</h1>
          <h1>contact</h1>
        </div>
      </nav>
    )
  }
}

export default NavBar
