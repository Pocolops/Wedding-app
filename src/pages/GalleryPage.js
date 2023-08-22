import React from 'react';
import { useLocation } from 'react-router-dom';
import couple from '../assets/couple.jpg';
import couple2 from '../assets/couple2.jpg';
import couple3 from '../assets/couple3.jpg';
import couple4 from '../assets/couple4.jpg';
import couple5 from '../assets/couple5.jpg';
import couple6 from '../assets/couple6.jpg';
import Nav from '../components/Nav';
import './Home.css';
import Footer from '../components/Footer';

const GalleryPage = () => {
  const location = useLocation();

  // Check if the current path is '/Gallery' to render the gallery content
  const isGalleryPage = location.pathname === '/Gallery';

  let data = [
    {
      id: 1,
      imgSrc: couple,
    },
    {
      id: 2,
      imgSrc: couple2,
    },
    {
      id: 3,
      imgSrc: couple3,
    },
    {
      id: 4,
      imgSrc: couple4,
    },
    {
      id: 5,
      imgSrc: couple5,
    },
    {
      id: 6,
      imgSrc: couple6,
    },
  ];

  return (
    <div>
      <Nav />
      {isGalleryPage && (
        <div className="w-full max-w-5xl p-5 pb-10 mx-auto mt-10 gap-3 columns-3 pt-20">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <img className="w-full m-4" src={item.imgSrc} alt="galImg" />
              </div>
            );
          })}
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default GalleryPage;
