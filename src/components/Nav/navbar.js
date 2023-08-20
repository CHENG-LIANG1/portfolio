import {React, useState, useEffect} from "react";
import { Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import "./nav.css"

function NavigationBar(props){


  return(
  <div className="navi" >

    
    <Navbar className="nav-bar" collapseOnSelect expand="lg"  variant="dark" >
      <Navbar.Collapse id="responsive-navbar-nav">
        <ul className="links">
          <li className="nav-link"><a href="/">Projects</a></li>
          <li className="nav-link"><a href="/detail">About me</a></li>
          <li className="nav-link"><a href="#">CV</a></li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
    
    </div>
    
    )
}

export default NavigationBar