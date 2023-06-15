import React, {Fragment} from "react";
import { Link } from "react-router-dom";



function Menu() {
return(
    <Fragment>
    <nav className="navbar navbar-universal navbar-custom navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" data-toggle="collapse" data-target=".navbar-main-collapse" className="navbar-toggle"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
          <a href="index.html" className="navbar-brand page-scroll">
            
            <img src="assets/img/logo-navidok.png" alt="Logo" className="logo" />
                <img src="assets/img/logo-navidok.png" alt="Logo" className="logodark" /></a>
        </div>
        <div className="collapse navbar-collapse navbar-main-collapse">
          <ul className="nav navbar-nav navbar-left">
            <li><Link to="/">HOME </Link></li>
            <li><Link to="/company">THE COMPANY </Link></li>
            <li><Link to="/company">OUR USERS <span className="caret" /></Link>
              <ul className="dropdown-menu">
                <li><Link to="/shipowners">SHIPOWNERS & OPERATORS</Link></li>
                <li><Link to="/shipyardowners">SHIPYARD OWNERS </Link></li>
                <li><Link to="/supportingindustries">SUPPORTING INDUSTRIES </Link></li>
                <li><Link to="/individuals">INDIVIDUALS </Link></li>
              </ul>
            </li>
            <li><Link to="/products">OUR PRODUCTS </Link></li>
            <li><Link to="/#contact">HELP CENTER </Link></li>
          </ul>
        </div>
      </div>
    </nav>

    </Fragment>
)
}

export default Menu;
