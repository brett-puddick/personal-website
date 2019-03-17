import * as React from 'react'
import About from './content/About'
import Experience from './content/Experience'
import Projects from './content/Projects'
import Contact from './content/Contact'

class Content extends React.Component {
  render () {
    return (
      <div className='content'>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    )
  }
}

export default Content
