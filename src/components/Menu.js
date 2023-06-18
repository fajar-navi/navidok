import React, {Fragment, useEffect, useState} from "react";
import { Link } from "react-router-dom";

import {HashLink} from "react-router-hash-link";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

function Menu() {

// TAMBAHAN coba source 2
  const [click, setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const changeClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const onMouseEnter = () => {
    setDropdown(true)
  }

  const onMouseLeave = () => {
    setDropdown(false)
  }
// END TAMBAHAN

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  });

  // Cara baru bikin function
  const onScroll = (e) => {
    const navBar = document.querySelector(".navbar");
    const scrollTop = window.scrollY;
    scrollTop >= 250
        ? navBar.classList.add("top-nav-collapse")
        : navBar.classList.remove("top-nav-collapse")
  }

  const onNavbarClick = (e) => {
    const navbarMainCollapse = document.querySelector(".navbar-main-collapse");
    navbarMainCollapse.classList.contains("in")
        ?navbarMainCollapse.classList.remove("in")
        :navbarMainCollapse.classList.add("in");
  }
  // const element = (
  //     <FontAwesomeIcon icon={faCoffee} />
  // )

  // Cara lama bikin function
  // function onScroll(e){}

return(
    <Fragment>
    <nav className="navbar navbar-universal navbar-custom navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" data-toggle="collapse" data-target=".navbar-main-collapse" className="navbar-toggle"
                  onClick={onNavbarClick}>
            <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
          <a href="/" className="navbar-brand page-scroll">

            <img src="../assets/img/logo-navidok.png" alt="Logo" className="logo" />
                <img src="../assets/img/logo-navidok.png" alt="Logo" className="logodark" /></a>
        </div>
        <div className="collapse navbar-collapse navbar-main-collapse">
          <ul className="nav navbar-nav navbar-left">
            <li><Link to="/">HOME </Link></li>
            <li><Link to="/company">THE COMPANY </Link></li>
            <li className='nav-items' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
              <Link className='nav-links' onClick={closeMobileMenu}> OUR USERS <i className='fas fa-caret-down' />
                {/*{dropdown && <DropDown />}*/}
                <ul className={`${dropdown?"dropdown":"hide"}`}>
                  <li><Link to="/shipowners">SHIPOWNERS & OPERATORS</Link></li>
                  <li><Link to="/shipyardowners">SHIPYARD OWNERS </Link></li>
                  <li><Link to="/supportingindustries">SUPPORTING INDUSTRIES </Link></li>
                  <li><Link to="/individuals">INDIVIDUALS </Link></li>
                </ul>
              </Link>

            </li>
            {/*<li><Link to="/company">OUR USERS <span className="caret" /></Link>*/}
            {/*  <ul className="dropdown-menu">*/}
            {/*    <li><Link to="/shipowners">SHIPOWNERS & OPERATORS</Link></li>*/}
            {/*    <li><Link to="/shipyardowners">SHIPYARD OWNERS </Link></li>*/}
            {/*    <li><Link to="/supportingindustries">SUPPORTING INDUSTRIES </Link></li>*/}
            {/*    <li><Link to="/individuals">INDIVIDUALS </Link></li>*/}
            {/*  </ul>*/}
            {/*</li>*/}
            <li><Link to="/products">OUR PRODUCTS </Link></li>
            <li>
              <HashLink smooth to="/#contact" onClick={onNavbarClick}>HELP CENTER</HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </Fragment>
)
}

export default Menu;
