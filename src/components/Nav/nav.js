import React from "react";
import { NavLink, BrowserRouter, Route, Switch} from "react-router-dom";
import $ from "jquery";
import Bus from "../../eventBus";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const scrollToFooter = () => {
    Bus.emit('toFooter')
  }


  const Hamburger = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="24"
      viewBox="0 0 52 24"
    >
      <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
        <rect
          id="Rectangle_3"
          data-name="Rectangle 3"
          width="30"
          height="3"
          rx="1"
          transform="translate(304 47)"
          fill="#fff"
        />
        <rect
          id="Rectangle_5"
          data-name="Rectangle 5"
          width="30"
          height="3"
          rx="1"
          transform="translate(304 67)"
          fill="#fff"
        />
        <rect
          id="Rectangle_4"
          data-name="Rectangle 4"
          width="30"
          height="3"
          rx="1"
          transform="translate(304 57)"
          fill="#fff"
        />
      </g>
    </svg>
  );



  return (
    <nav className="navbar">
      <div className="container">
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul className="links">
            <NavLink to="/">Projects</NavLink>
            <NavLink to="/detail">About me</NavLink>
            <a className={'contact-btn'} onClick={scrollToFooter}>Contact</a>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;