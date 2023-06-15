import React, {Fragment} from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ImgBg from "../components/ImgBg";

const Products = () => {
  return (
    <Fragment>
    <Menu />
    <ImgBg/>


<section id="action-slider">
      <div className="container">
	  <div className="row">
          <div className="col-lg-12">
            <div id="carousel-light" className="carousel slide">
              <ol className="carousel-indicators">
                <li data-target="#carousel-light" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-light" data-slide-to="1"></li>
                <li data-target="#carousel-light" data-slide-to="2"></li>
              </ol>
              <div role="listbox" className="carousel-inner">
                <div className="item active mob-m-250 posit-470" >
				
				<div className="col-lg-6">
				</div>
                <div className="col-lg-6 mob-m--300">						
				<h1 className="heading title-dark mt-7 font-blue line-height1">NaviFIND</h1>
                                            <p className="para-desc mx-auto f22 font-blue">It is a highly specialized marine search engine coupled with some specific powerful tools to find answers for maritime queries faster, better, and cheaper.</p>
				</div></div>
                <div className="item mob-m-250 posit-470" >
				
				<div className="col-lg-6">
				</div>
                <div className="col-lg-6 mob-m--300">						
				<h1 className="heading title-dark mt-7 font-blue line-height1">NaviGLOBE</h1>
                                            <p className="para-desc mx-auto f22 font-blue">A maritime Globe that enables users to have a better sense of connectivity and information</p>
				</div></div>
                <div className="item mob-m-250 posit-470" >
				
				<div className="col-lg-6">
				</div>
                <div className="col-lg-6 mob-m--300">						
				<h1 className="heading title-dark mt-7 font-blue line-height1">Maritime Social Media</h1>
                                            <p className="para-desc mx-auto f22 font-blue">An interactive digital forum where all maritime stakeholders will encounter one another</p>
				</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

	  {/* Controls */}

	  <a href="#carousel-light" data-slide="prev" className="left carousel-control"><span className="icon-prev"></span></a>
	  <a href="#carousel-light" data-slide="next" className="right carousel-control"><span className="icon-next"></span></a>
    </section>

    <Footer />
    </Fragment>
  )
}

export default Products

