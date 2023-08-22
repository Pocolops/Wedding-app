import React from 'react';
import videoBg from '../assets/bgVideo.mp4';
import {Link} from 'react-router-dom';

const Main = () => {

  return (
    <div className='main'>
        <div className='overlay'></div>
        <video className='h-full'src={videoBg} autoPlay loop muted />
        
        <div className='content'>
            <h1>Thomas & Elizabeth</h1>
            
            <button className='btn'>
            <p className='text-base'><Link to= '/Home'><span></span>Join us</Link></p>
            </button>
        </div>
    </div>
  )
}

export default Main;