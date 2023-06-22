import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import {HashLink} from "react-router-hash-link";

// images
import appStoreImage from "./../assets/img/download-app-store.png";
import playStoreImage from "./../assets/img/download-google-play.png";
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
              <div className="col-sm-2 col-sm-offset-1 footer-menu text-md-left text-center">
                <h4>FIND US</h4>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook fa-fw fa-lg" style={{ textAlign: "left" }} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter fa-fw fa-lg" style={{ textAlign: "left" }} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram fa-fw fa-lg" />
                </a>

                <a className="text-md-left text-center icon-mob-store" href="https://apple.com/id/app-store/" target="_blank" rel="noopener noreferrer">
                  <img src={appStoreImage} style={{ marginTop: '10px', display: 'block' }} alt="" className="icon-mob-store" />
                </a>
                <a className="text-md-left text-center icon-mob-store" href="https://play.google.com/" target="_blank" rel="noopener noreferrer">
                  <img src={playStoreImage} style={{ marginTop: '10px', display: 'block' }} alt="" className="icon-mob-store" />
                </a>

              </div>
            </div>
          </div>
        </section>

    </Fragment>
)
}


export default Footer;