import React, { useRef } from 'react';
import Nav from '../components/Nav';
import './Home.css';
import Hero from '../components/Hero';
import Event from '../components/Event';
import Gallery from '../components/Gallery';
import Info from '../components/Info';
import Registry from '../components/Registry';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Home = () => {
  const eventRef = useRef(null);
  const infoRef = useRef(null);
  const galleryRef = useRef(null);
  const registryRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Scroll to top when ref is null (for the "Home" link)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className='home1'>
      <Nav
        scrollToSection={scrollToSection}
        eventRef={eventRef}
        infoRef={infoRef}
        galleryRef={galleryRef}
        registryRef={registryRef}
      />
      <Hero />
      <div ref={eventRef} id='event' className='mt-30'> 
        <Event />
      </div>
      <div ref={infoRef} id='info' className='mt-30'>
        <Info />
      </div>
      <Link to='/Gallery' className='mt-30'>
        <div ref={galleryRef}>
          <Gallery />
        </div>
      </Link>
      <div ref={registryRef} id='registry' className='mt-30'>
        <Registry />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
