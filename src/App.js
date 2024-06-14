import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Services from './components/Services';

 function App() {
  return (
   
    <div>
      <Header />
     
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
      </Routes>
     
      <Footer />
      <button onClick={() => window.scrollTo(0, 0)} className="back-to-top">↑</button>
    </div>
  
  );
}

export default App;
