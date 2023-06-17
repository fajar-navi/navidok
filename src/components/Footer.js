import React, {Fragment} from "react";
import { Link } from "react-router-dom";

import {HashLink} from "react-router-hash-link";

const onNavbarClick = (e) => {
  const navbarMainCollapse = document.querySelector(".navbar-main-collapse");
  navbarMainCollapse.classList.contains("in")
      ?navbarMainCollapse.classList.remove("in")
      :navbarMainCollapse.classList.add("in");
}
function Footer() {
return(
    <Fragment>
        <section className="section-small footer bg-black">
          <div className="container">
            <div className="row">
              <div className="col-sm-2 text-md-left text-center">
                <h4>THE COMPANY</h4>
                <h6 className="no-pad-foot"><Link to="/company">About us</Link></h6>
                <h6 className="no-pad-foot"><Link to="/ethics">Ethics</Link></h6>
                <h6 className="no-pad-foot"><Link to="/dataprotection">Data Protection</Link></h6>
                <h6 className="no-pad-foot"><Link to="/termsofuse">Terms of Use</Link></h6>
              </div>
              <div className="col-sm-2 text-md-left text-center">
                <h4>OUR USERS</h4>
                <h6 className="no-pad-foot"><Link to="/shipowners">Shipowners & Operators</Link></h6>
                <h6 className="no-pad-foot"><Link to="/shipyardowners">Shipyard Owners</Link></h6>
                <h6 className="no-pad-foot"><Link to="/supportingindustries">Supporting Industries</Link></h6>
                <h6 className="no-pad-foot"><Link to="/individuals">Individuals</Link></h6>
              </div>
              <div className="col-sm-2 text-md-left text-center">
                <h4>OUR PRODUCTS</h4>
                <h6 className="no-pad-foot"><Link to="/navifind">NaviFIND</Link></h6>
                <h6 className="no-pad-foot"><Link to="/naviglobe">NaviGLOBE</Link></h6>
                <h6 className="no-pad-foot"><Link to="/maritime">Maritime Social Media</Link></h6>
                <h6 className="no-pad-foot"><Link to="/getintel">Get Intel!</Link></h6>
              </div>
              <div className="col-sm-2 text-md-left text-center">
                <h4>HELP CENTER</h4>

                <h6 className="no-pad-foot"><HashLink smooth to="/#contact" onClick={onNavbarClick}>Contact Us</HashLink></h6>
                <h6 className="no-pad-foot"><HashLink smooth to="/#contact" onClick={onNavbarClick}>Technical Support</HashLink></h6>
              </div>
              <div className="col-sm-2 col-sm-offset-1 footer-menu">
                <h4>FIND US</h4>
                <Link to={{ pathname: "https://facebook.com" }} target="_blank">
                  <i className="fa fa-facebook fa-fw fa-lg" style={{ textAlign: "left" }} />
                </Link>
                <Link to={{ pathname: "https://twitter.com" }} target="_blank">
                  <i className="fa fa-twitter fa-fw fa-lg" style={{textAlign: 'left'}} /></Link>
                <Link to={{ pathname: "https://instagram" }} target="_blank">
                  <i className="fa fa-instagram fa-fw fa-lg" /></Link>

                <img src="../assets/img/download.png" style={{maxWidth: '100px', marginTop: '10px'}} />
              </div>
            </div>
          </div>
        </section>

    </Fragment>
)
}


export default Footer;