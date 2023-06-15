import React, {Fragment} from "react";
import sample from "../video/navidok-web-splash.mp4"

export function VideoBg(){
    return (
        <Fragment>
            <div>

                {/* <div className="intro-body">
                    <h1>YOUR ALIGNMENT</h1>
                    <h4>In Maritime Industry</h4>

                    <div data-wow-delay="1s" className="scroll-btn wow fadeInDown">
                        <a href="#about" class="page-scroll"></a>
                    </div>
                </div> */}

<div className="container intro intro-body main-vid-text">
	  <div className="row">
          <div className="col-lg-12">
            <div id="carousel-light" className="carousel slide">
              <ol className="carousel-indicators">
                <li data-target="#carousel-light" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-light" data-slide-to="1"></li>
                <li data-target="#carousel-light" data-slide-to="2"></li>
              </ol>
              <div role="listbox" className="carousel-inner">
                <div className="item active " >
				
				<div className="col-lg-12">
				</div>
                <div className="col-lg-12 ">						
				<h1 className="heading title-dark mt-7 line-height1">YOUR ALIGNMENT</h1>
                <h2 className="f50">In Maritime Industry</h2>
				</div></div>
                <div className="item " >
				
				<div className="col-lg-12">
				</div>
                <div className="col-lg-12">						
				<h1 className="heading title-dark mt-7 line-height1">ENERGIZING CONNECTIVITY</h1><h2 className="f50">In Maritime Industry</h2>
				</div></div>
                <div className="item " >
				
				<div className="col-lg-12">
				</div>
                <div className="col-lg-12">						
				<h1 className="heading title-dark mt-7 line-height1">TOTAL SHIPCARE</h1><h2 className="f50">Solutions</h2>
				</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
                <video className="intro z-10" autoPlay loop muted >
                    <source src={sample} type='video/mp4' />
                </video>
        </div>
        </Fragment>
    );
}
