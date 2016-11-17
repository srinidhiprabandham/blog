import React, { Component } from 'react'
import { Link } from 'react-router'

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">React - Blog</Link>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li><Link to="/home">Home</Link></li>

              {/*
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Page 1-1</a></li>
                  <li><a href="#">Page 1-2</a></li>
                  <li><a href="#">Page 1-3</a></li>
                </ul>
              </li>

              <li><a href="#">Page 2</a></li>
              <li><a href="#">Page 3</a></li>
              */}
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
              <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;
