import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className='bg-gray-800 w-[100%] text-white px-[20px]'>
      <Header />
      <Element name='home'>
        <Home />
      </Element>
      <Element name='about'>
        <About />
      </Element>
      <Element name='skills'>
        <Skills />
      </Element>
      <Element name='portfolio'>
        <Portfolio />
      </Element>
      <Element name='experience'>
        <Experience />
      </Element>
      <Element name='contact'>
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
