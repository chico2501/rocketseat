import React, { Component } from "react";
import "../App.css";

import logo from "../assets/logo_facebook.png";

class Header extends Component {
  render() {
    return (
      <nav className="header">
        <img src={logo} />
        <a href="#">Meu perfil</a>
      </nav>
    );
  }
}

export default Header;
