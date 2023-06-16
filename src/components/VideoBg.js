import React, {Fragment} from "react";
import sample from "../video/navidok-web-splash.mp4"
import {CarouselHome} from "./CarouselHome";


export function VideoBg(){

    return (
        <Fragment>
            <div>
                <div className="container intro intro-body main-vid-text">
                    <CarouselHome/>
                </div>
                <video className="intro z-10" autoPlay loop muted >
                    <source src={sample} type='video/mp4' />
                </video>
            </div>
        </Fragment>
    );
}
