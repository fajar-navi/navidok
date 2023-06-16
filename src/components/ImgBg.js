import React, {Fragment} from "react";



export default function ImgBg(props) {
    // console.log(props.trading);
    let imageStyle = {
       backgroundImage: `url(${props.src})`,
        padding: 180,
       color: "white", 
       backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        textAlign: "center",
        width: '100vw',
        height: '40vh'
    };
    return (
        <Fragment>
           <div  className="intro-body introhalf image" style = {imageStyle}>
                <div  className="introhalf" >
                <h1 style={{fontWeight: '900'}}>{props.title}</h1>
                </div>
           </div>
        </Fragment>
    );
 }
