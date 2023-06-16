import React, {Fragment, Component} from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ImgBg from "../components/ImgBg";



function Company() {
return(
    <Fragment>
    <Menu />
    <ImgBg trading={"crypto"} title={"The Company"} src={"https://media.gettyimages.com/id/916868228/photo/shipyard-maintenance-at-night.jpg?s=612x612&w=0&k=20&c=aFksyeh8cdcK0F_kSodlKiHKcilWRUDI0sMPYx5MxX0="}/>
    {/*<header data-background="assets/img/bg-video.jpg" className="intro introhalf">*/}
    {/*  <div className="intro-body">*/}
    {/*    <h1>The Company</h1>*/}
    {/*  </div>*/}
    {/*</header>*/}

    <section id="about" className="section-small">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="title">Impact</h3>
            <p className="no-pad">Navidok believes in connectivity and sustainability. We will do our best endeavours to democratize data
so everyone will be equal, at least, in maritime world. Our technological tools will help maritime
stakeholders improving their productivities in our attempt to bring down logistic cost so everything
might become more affordable in every corner of the world. We will leverage connectivity for
sustainability</p>
          </div>
          <div data-wow-duration="2s" data-wow-delay=".2s" className="col-lg-5 col-lg-offset-1 wow zoomIn">
            <div className="carousel slide carousel-fade">
              <div role="listbox" className="carousel-inner">
                <div className="item active">
                    <img src="https://media.gettyimages.com/id/916868228/photo/shipyard-maintenance-at-night.jpg?s=612x612&w=0&k=20&c=aFksyeh8cdcK0F_kSodlKiHKcilWRUDI0sMPYx5MxX0="
                         alt="" className="img-responsive center-block"/></div>
              </div>
            </div>
          </div>
        </div>
		
      </div>
    </section>
    
	<section className="quote section-small bg-img4 text-center" >
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-12">
            <h2>ETHICS</h2>
			<p className="no-pad">At Navidok, we are committed to conducting our business in an ethical and responsible manner. This Ethics Policy outlines the principles and standards that guide our actions and interactions with our users, employees, partners, and the broader community. We expect all individuals associated with our app to adhere to this policy and uphold our commitment to ethical conduct.</p>
          </div>
          <div className="col-lg-12 mt-7">
            <h2>DATA PROTECTIONS</h2>
			<p className="no-pad">Navidok is committed to protecting the privacy and personal data of its users. This Data Protection Policy outlines how we collect, use, store, and protect personal information obtained through the use of our mobile app. By using our app, you consent to the practices described in this policy.
</p>
<p>
    <img src="assets/img/genco.jpg" alt="" className="img-responsive center-block mt-7"/></p>

          </div>
        </div>
        
      </div>
    </section>
        
    <Footer />
    </Fragment>
)
}

export default Company;