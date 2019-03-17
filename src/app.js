import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/main.sass'

import NavBar from './components/NavBar'
import Content from './components/Content'
import Footer from './components/Footer'

class App extends React.Component {
  render () {
    return (
      <div id='app'>
        <NavBar />
        <Content />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
