import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Services from './components/Services';
import LegalMentions from './components/LegalMentions';


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
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/LegalMentions" element={<LegalMentions/>} />
         
      </Routes>
     
      <Footer />
     
    </div>
  
  );
}

export default App;
