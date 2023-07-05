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
          <div className="row mob-center">

            <div className="col-lg-12 mob-center desktop-right">

            </div>

            <div className="col-lg-6" style={{ color: '#fff' }}>
              <Link to="/company">About us &nbsp;</Link> | &nbsp;
              <Link to="/ethics">Ethics &nbsp;</Link> | &nbsp;
              <Link to="/dataprotection">Data Protection &nbsp;</Link> | &nbsp;
              <Link to="/termsofuse">Terms of Use &nbsp;</Link><br/>
              Copyright @ Navidok Asia Pacific Pte Ltd. All Rights Reserved.
            </div>

            <div className="col-lg-6 mob-center desktop-right mt--20">

              <div className="mb-3">
                <a href="https://web.facebook.com/profile.php?id=100068479730046" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook fa-fw fa-lg" style={{ textAlign: "left" }} />
                </a>
                {/*<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">*/}
                {/*  <i className="fa fa-twitter fa-fw fa-lg" style={{ textAlign: "left" }} />*/}
                {/*</a>*/}
                <a href="https://instagram.com/navidokapp?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-instagram fa-fw fa-lg" />
                </a>
              </div>
            <span  style={{ display: "flow-root" }}>
              <a className="text-md-left text-center icon-mob-store" href="https://play.google.com/store/apps/details?id=com.navidoksocial.android" target="_blank" rel="noopener noreferrer">
                <img src={playStoreImage} style={{ marginTop: '0px', marginRight: '10px' }} alt="" className="icon-mob-store" />
              </a>
              <a className="text-md-left text-center icon-mob-store" href="https://apps.apple.com/in/app/navidok-app/id1631780497" target="_blank" rel="noopener noreferrer">
                <img src={appStoreImage} style={{ marginTop: '0px',   marginLeft: '10px' }} alt="" className="icon-mob-store" />
              </a></span>
            </div>

          </div>
        </div>
      </section>

    </Fragment>
)
}


export default Footer;