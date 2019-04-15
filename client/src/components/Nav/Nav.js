import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import './nav_style.css'

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <h2 className="navTitle">Pickup Ball</h2>
        {/* <Link className="navBtn" to="/map">
          Map
        </Link>
        <Link className="navBtn" to="/login">
          Login
        </Link>
        <Link className="navBtn" to="/register">
          Register
        </Link> */}
      </div>
    )
  }
}

export default Nav
