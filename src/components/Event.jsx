import React from 'react';
import eventImg from "../assets/wedding-arrangement.jpg";

const Event = () => {
    const events = [
      { time: '10:00', title: 'Solemnisation' },
      { time: '12:00', title: 'Tea Ceremony' },
      { time: '14:00', title: 'Lunch' },
      { time: '16:00', title: 'Reception' },
      { time: '18:00', title: 'Dinner' },
      

    ];
  
    return (
       <section id="event" className='bg-white p-4 rounded shadow'>
        <div className="flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 relative">
        <img className="w-full h-full" src={eventImg} alt='eventImg' />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <h2 className="text-white text-4xl font-bold">Wedding Schedule</h2>
      </div>
    </div>

    <div className="w-full md:w-1/2 flex-col py-28 text-center text-xl sm:text- items-center justify-center">
      {events.map((event, index) => (
        <div key={index} className="flex-col items-center justify-center text-center eventText">
          <div className="w-16 text-gray-600 mx-auto">{event.time}</div>
          <div className="font-medium ">{event.title}</div>
        </div>
      ))}
    </div>
  </div>
</section>
    );
  };
  
  export default Event;
  
  
  
  
  