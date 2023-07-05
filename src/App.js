
import './App.css';
import './index.css'
// import './assets/css/bootstrap.min.css'
// import './font-awesome.min.css'
import Index from './pages/Index';
import Company from './pages/Company';
import ShipOwners from './pages/ShipOwners';
import ShipyardOwners from './pages/ShipyardOwners';
import SupportingIndustries from './pages/SupportingIndustries';
import Individuals from './pages/Individuals';
import Products from './pages/Products';
import Ethics from "./pages/Ethics";
import DataProtection from "./pages/DataProtection";
import TermOfUse from "./pages/TermOfUse";
import NaviFind from "./pages/NaviFind";
import NaviGlobe from "./pages/NaviGlobe"
import MaritimeSocialMedia from "./pages/MaritimeSocialMedia";
import GetIntel from "./pages/GetIntel";
import ImgBg from './components/ImgBg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import OurUsers from "./pages/OurUsers";


// import Category from './pages/Category';
// import About from './pages/About';
// import Categories_data from './pages/Categories_data';




function App() {
  return (

      <div>
          <Router basename="/">
              {/* Add Menu Component */}
              {/*<Navbarmenu />*/}
              <Routes>
                  <Route exact path="/" element={<Index />} />
                  <Route path="/company" element={<Company />} />
                  <Route path="/shipowners" element={<ShipOwners />} />
                  <Route path="/shipyardowners" element={<ShipyardOwners />} />
                  <Route path="/supportingindustries" element={<SupportingIndustries />} />
                  <Route path='/individuals' element={<Individuals /> } />
                  <Route path='/ourusers' element={<OurUsers /> } />
                  <Route path='/products' element={<Products /> } />
                  <Route path='/ethics' element={<Ethics /> } />
                  <Route path='/dataprotection' element={<DataProtection /> } />
                  <Route path='/termsofuse' element={<TermOfUse /> } />
                  <Route path='/navifind' element={<NaviFind /> } />
                  <Route path='/naviglobe' element={<NaviGlobe /> } />
                  <Route path='/maritime' element={<MaritimeSocialMedia /> } />
                  <Route path='/getintel' element={<GetIntel /> } />

                  <Route path='/facebook' component={() => {
                      window.location.href = 'https://facebook.com';
                      return null;
                  }}/>
                  <Route path='/instagram' component={() => {
                      window.location.href = 'https://instagram.com';
                      return null;
                  }}/>
                  <Route path='/twitter' component={() => {
                      window.location.href = 'https://twitter.com';
                      return null;
                  }}/>
              </Routes>
          </Router>
      </div>



    // <Router>
    //   {/*<Navbar />*/}
    //   <Routes>
    //     <Route exact path="/" element={<Index />} />
    //     <Route path="/company" element={<Company />} />
    //     <Route path="/shipowners" element={<Shipowners />} />
    //     <Route path="/shipyardowners" element={<Shipyardowners />} />
    //     <Route path="/supportingindustries" element={<Supportingindustries />} />
    //     <Route path='/individuals' element={<Individuals /> } />
    //     <Route path='/products' element={<Products /> } />
    //     <Route path='/imgbg' element={<ImgBg /> } />
    //
    //
    //
    //   </Routes>
    //
    // </Router>
  );
}

export default App;
