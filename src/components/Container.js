import React, { Component } from 'react'

import NavBar from "./Navbar.js"

class Container extends Component {
  render() {
    return (
      <div className='body'>
        <NavBar />

        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Container
