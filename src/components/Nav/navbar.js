import React from "react";
import { Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import "./nav.css"

function NavigationBar(){

  return(
  <div className="navi" >

    <Navbar collapseOnSelect expand="lg"  variant="dark" >
      <Navbar.Brand className="logo" href="#home"> 
        Huanyi
      </Navbar.Brand>
      <Navbar.Toggle className="ham" aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <ul className="links">

          <li><NavLink className="link"  to="/"  >首页</NavLink></li>
          <li><NavLink className="link"  to="/timeline">时间线</NavLink></li>
          <li><NavLink className="link"  to="/d">other</NavLink></li>
        </ul>

      </Navbar.Collapse>
    </Navbar>
    
    </div>)
}

export default NavigationBar