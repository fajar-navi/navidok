import React, {Fragment} from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";



function Individuals() {
  let imageStyle = {
    backgroundImage:
    'url("https://media.gettyimages.com/id/1134352403/photo/ship-on-dry-dock.jpg?s=2048x2048&w=gi&k=20&c=GZaOYUo-OgPt4MH7bzuBF19NPCWrKb-x_nrpuL-1GnA=")',
     padding: 180,
    color: "white", 
    backgroundPosition: 'center',
     backgroundSize: 'cover',
     backgroundRepeat: 'no-repeat',
     textAlign: "center",
     width: '100vw',
     height: '40vh'
 };


return(
    <Fragment>
      <Menu />

      <div  className="intro-body introhalf image" style = {imageStyle}>
              <div  className="introhalf" >
              <h1 style={{fontWeight: '900'}}>Individuals</h1>
              </div>
         </div>

{/* <header data-background="https://media.gettyimages.com/id/1134352403/photo/ship-on-dry-dock.jpg?s=2048x2048&w=gi&k=20&c=GZaOYUo-OgPt4MH7bzuBF19NPCWrKb-x_nrpuL-1GnA=" className="intro introhalf">
      <div className="intro-body">
        <h1>Our Users</h1>
      </div>
    </header> */}
    
    <section id="about" className="section-small">
      <div className="container">
        <div className="row">
          <div className="col-lg-2"  />
            <img src="assets/img/icon-4.png" className= "icons" alt=""/>
          </div>
          <div className="col-lg-10">
            <h2 className="font-blue">Individuals</h2>

<div className="row">
<div className="col-lg-5 box-rounded">
<img src="assets/img/icon-navifind.jpg" className= "icons" alt=""/>
<p className="no-pad"><strong>In NaviFIND you could get ;</strong><br/>
This is where you can find everything
and anything related to your
ship needs as we are populating all
relevance maritime information
and equip it with technological
tools to help you make some researches
and broaden your knowledge
and insight</p></div>
<div className="col-lg-1"></div>
<div className="col-lg-5 box-rounded">
<img src="assets/img/icon-naviglobe.jpg" className= "icons" alt=""  />
<p className="no-pad"><strong>In NaviGLOBE you could get ;</strong><br/>
This will be your globe to make
your task and job, hopefully, easier
and more fun to do. At your
fingertips, you could see and
explore ports, shipyards, and ships
all over the world and have sense
of what you are trying to
accomplish as an individual.</p></div>
</div>
            <h2 className="font-blue mt-7">What do you want us to do to make you better ?</h2>
			<p className="no-pad">All we want to do is to create a technology that would make your role, job, responsibility,
and passion as shipowner and ship operator to become simpler, easier, and fun to do.
Please do share with us, your imagination, on what you want to have to make you the
best managed and most profitable shipping co in the world. We will do an effort to make
it happen!<br/>
If you own and/or operate a shipping company and not receiving our invitation link yet,
please click this link and tell us more about your company.</p>
          </div>
        </div>
		

    </section>
<Footer />
    </Fragment>
)
}

export default Individuals