import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import About from './About'

const App = () => (
    <div>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Contact />
      <Footer/>
    </div>
);

export default App;


