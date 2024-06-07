import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Blog from './components/Blog';
import Services from './components/Services';

 function App() {
  return (
   
    <div>
      <Header />
      <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About/>} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
      </Routes>
      
      <Footer />
    </div>
  
  );
}

export default App;
