
import './App.css';
import Index from './pages/Index';
import Company from './pages/Company';
import Shipowners from './pages/Shipowners';
import Shipyardowners from './pages/Shipyardowners';
import Supportingindustries from './pages/Supportingindustries';
import Individuals from './pages/Individuals';
import Products from './pages/Products';
import ImgBg from './components/ImgBg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from '../src/components/NavBar';
import Category from './pages/Category';
import About from './pages/About';
import Categories_data from './pages/Categories_data';


import Navbarmenu from './components/menu/Navbarmenu';

function App() {
  return (

      <div>
          <Router basename="/">
              {/* Add Menu Component */}
              {/*<Navbarmenu />*/}
              <Routes>
                  <Route exact path="/" element={<Index />} />
                  <Route path="/company" element={<Company />} />
                  <Route path="/shipowners" element={<Shipowners />} />
                  <Route path="/shipyardowners" element={<Shipyardowners />} />
                  <Route path="/supportingindustries" element={<Supportingindustries />} />
                  <Route path='/individuals' element={<Individuals /> } />
                  <Route path='/products' element={<Products /> } />
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
