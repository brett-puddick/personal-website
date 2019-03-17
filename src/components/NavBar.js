import * as React from 'react'
import logo from './../assets/logo-final.svg'

class NavBar extends React.Component {
  render () {
    return (
      <nav>
        <div className='nav-bar'>
          <a href='./index.html' className='home-link'>
            <img className='logo' src={logo}/>
          </a>
          <ul className='nav-links'>
            <li><a href='#about' className='nav-link'>about</a></li>
            <li><a href='#experience' className='nav-link'>experience</a></li>
            <li><a href='#projects' className='nav-link'>projects</a></li>
            <li><a href='#contact' className='nav-link'>contact</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar
