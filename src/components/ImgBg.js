import React, {Fragment} from "react";



export default function ImgBg(props) {
    let imageStyle = {
        backgroundImage: `url(${props.src})`,
        padding: '180px 0 110px',
        color: 'white',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        width: '100vw',
        height: '40vh',
        position: 'sticky'
    };
    return (
        <Fragment>
           <div  className="intro-body introhalf image" style = {imageStyle}>
                <div  className="intro" >
                <h1 style={{fontWeight: '900'}}>{props.title}</h1>
                </div>
           </div>
        </Fragment>
    );
 }
