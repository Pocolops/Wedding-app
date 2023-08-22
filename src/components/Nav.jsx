import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Nav = ({ scrollToSection, eventRef, infoRef, galleryRef, registryRef }) => {
  const [nav, setNav] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setNav(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleNavLinkClick = (sectionRef) => {
    setNav(false);
    scrollToSection(sectionRef);
  };

  return (
    <div className='navbar fixed top-0 left-0 right-0 z-10 flex justify-between items-center h-18 w-full max-w-[1740px] px-4 text-white'>
      <h2 className='w-full text-3xl font-bold text-[#967E76]'>T & E</h2>
      <ul className='hidden md:flex'>
        <li className='p-4'>
          <Link to='/Home' onClick={() => scrollToSection(null)}>
            Home
          </Link>
        </li>
        <li className='p-4'>
          <Link to='/Home#event' onClick={() => handleNavLinkClick(eventRef)}>
            Schedule
          </Link>
        </li>
        <li className='p-4'>
          <Link to='/Home#info' onClick={() => handleNavLinkClick(infoRef)}>
            Info
          </Link>
        </li>
        <li className='p-4'>
          <Link to='/Home#gallery' onClick={() => handleNavLinkClick(galleryRef)}>
            Gallery
          </Link>
        </li>
        <li className='p-4'>
          <Link to='/Home#registry' onClick={() => handleNavLinkClick(registryRef)}>
            Registry
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div className={nav ? 'fixed z-10 h-full left-0 top-0 w-[40%] border-r border-r-gray-200 bg-[#D7c0ae] east-in-out duration-500' : 'fixed left-[-100%]'} ref={menuRef}>
        <h2 className='w-full text-3xl font-bold text-[#967E76] mt-12 px-4'>T & E</h2>
        <ul className='pt-10 uppercase sidebar'>
          <li className='p-4 border-b border-gray-100'>
            <Link to='/Home'>Home</Link>
          </li>
          <li className='p-4 border-b border-gray-100'>
            <Link to='/Home#event' onClick={() => handleNavLinkClick(eventRef)}>Schedule</Link>
          </li>
          <li className='p-4 border-b border-gray-100'>
            <Link to='/Home#info' onClick={() => handleNavLinkClick(infoRef)}>Info</Link>
          </li>
          <li className='p-4 border-b border-gray-100'>
            <Link to='/Home#gallery' onClick={() => handleNavLinkClick(galleryRef)}>Gallery</Link>
          </li>
          <li className='p-4 border-b border-gray-100'>
            <Link to='/Home#registry' onClick={() => handleNavLinkClick(registryRef)}>Registery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
