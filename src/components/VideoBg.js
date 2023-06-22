import React, {Fragment} from "react";
import sample from "../video/navidok-web-splash.mp4"
// import {CarouselHome} from "./CarouselHome";
import HomeSwp from "./HomeSwp";


export function VideoBg(){

    return (
        <Fragment>
            <div style={{height: '100vH'}} >
                <div className="container intro intro-body main-vid-text">
                    {/*<CarouselHome/>*/}
                    <HomeSwp />
                </div>
                <video className="intro z-10 ob-fit-cover" autoPlay loop muted >
                    <source src={sample} type='video/mp4' />
                </video>
            </div>
        </Fragment>
    );
}
