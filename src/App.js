import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import React, { useEffect } from 'react';

// pages & components
import Home from './pages/home'
import HowitWorks from './pages/how-it-works'
import About from './pages/about'
import Trynow from './pages/trynow'
import Classic from './pages/classic'
import Pro from './pages/pro'
import Business from './pages/business'
import ThankYou from './pages/thankYou'
import Footer from './Components/Footer';

function App() {
  
    useEffect(() => {
    document.title = "WeShoot - Photography";
  }, []);
  
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="how-it-works/*" element={<HowitWorks />} />
      <Route path="trynow/*" element={<Trynow />} />
      <Route path="about/*" element={<About />} />
      <Route path="classic/*" element={<Classic />} />
      <Route path="pro/*" element={<Pro />} />
      <Route path="business/*" element={<Business />} />
      <Route path="thankYou/*" element={<ThankYou />} />

      
          </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;

