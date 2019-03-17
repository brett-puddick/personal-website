import * as React from 'react'
import linkedinLogo from './../assets/linkedin-logo.svg'
import githubLogo from './../assets/github-logo.svg'
import instagramLogo from './../assets/instagram-logo.svg'

class Footer extends React.Component {
  render () {
    return (
      <footer>
        <div className='footer-content'>
          <ul className='social-links'>
            <li className='social-link'>
              <a
                href='https://www.linkedin.com/in/brettpuddick/'
                className='linkedin'>
                <img src={linkedinLogo}/>
              </a>
            </li>
            <li className='social-link'>
              <a
                href='https://www.instagram.com/brettpuddick93//'
                className='instagram'>
                <img src={instagramLogo}/>
              </a>
            </li>
            <li className='social-link'>
              <a
                href='https://github.com/brett-puddick'
                className='github'>
                <img src={githubLogo}/>
              </a>
            </li>
          </ul>
          <h4 className='copyrighting'>Brett Puddick 2019</h4>
        </div>
      </footer>
    )
  }
}

export default Footer
