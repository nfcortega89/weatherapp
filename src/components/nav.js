import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-container">
        <ul className="nav-menu">
          <li className="nav-menu-items">Sign Up</li>
          <li className="nav-menu-items">Messages</li>
          <li className="nav-menu-items">Help</li>
        </ul>
      </div>
    )
  }
}
