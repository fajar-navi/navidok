import React, {Fragment} from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";



export default function App() {
    let imageStyle = {
       backgroundImage:
       'url("https://www.shutterstock.com/shutterstock/photos/2121701399/display_1500/stock-photo-painters-painting-a-ship-at-a-shipyard-2121701399.jpg")',
       backgroundSize: "contain",
       backgroundRepeat: "no-repeat", padding: 180,
       color: "white", 
       backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',textAlign: "center",
        width: '100vw',
        height: '40vh'
    };
    return (
       <div  className="intro-body introhalf" class = "image" style = {imageStyle}>
            <div  className="introhalf" >
            <h1 style={{fontWeight: '900'}}>The Company</h1>
            </div>
       </div>
       
    );
 }
