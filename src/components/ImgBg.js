import React, {Fragment} from "react";



export default function ImgBg() {
    let imageStyle = {
       backgroundImage:
       'url("https://www.shutterstock.com/shutterstock/photos/2121701399/display_1500/stock-photo-painters-painting-a-ship-at-a-shipyard-2121701399.jpg")',
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
                <h1 style={{fontWeight: '900'}}>The Company</h1>
                </div>
           </div>
        </Fragment>
    );
 }
