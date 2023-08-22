import React from 'react'
import couple from '../assets/couple.jpg'


const Gallery = () => {
  return (
    
    <section id="gallery" className="relative w-full max-h-[500px] p-4 ">
    <div className="relative">
      <img
        src={couple}
        alt='img'
        className="w-full max-h-[500px] object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
        <div className="bg-black bg-opacity-20 absolute inset-0"></div>
        <h2 className="text-white text-6xl font-bold bg-clip-text transition-all ease-in duration-500">
          Gallery
        </h2>
      </div>
    </div>
  </section>
  
  );
};

export default Gallery