import React, {Fragment} from "react";
import sample from "../video/navidok-web-splash.mp4"

export function VideoBg(){
    return (
        <Fragment>
            <div className={"position-relative"}>
                <video className="intro position-fixed min-vh-100" autoPlay loop muted>
                    <source src={sample} type='video/mp4' />
                </video>

                <div className="intro-body position-fixed">
                    <h1>YOUR ALIGNMENT</h1>
                    <h4>In Maritime Industry</h4>

                    <div data-wow-delay="1s" className="scroll-btn wow fadeInDown">
                        {/* <a href="#about" class="page-scroll"></a> */}
                    </div>
                </div>
        </div>
        </Fragment>
    );
}
