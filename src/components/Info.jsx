import React from 'react';

function Info() {
  return (
    <section id='info' className='rounded shadow bg-[#967E76]'>
      <div className='flex flex-col md:flex-row justify-center items-center text-center mx-4 p-10 info'>
        <div className='w-full md:w-1/2 md:order-1'>
          <h1 className='text-gray-700 text-3xl mt-2'>Getting Here</h1>
          <h2 className='m-2'>
            The Fullerton Hotel
            <br />
            13 mins walk from Clarke Quay MRT
          </h2>
          <button className='text-gray-700 border-solid border-2 rounded px-4 text-sm mb-2'>
            <a
              href='https://www.google.com/maps/d/u/0/viewer?ie=UTF8&oe=UTF8&msa=0&mid=1KBQftqAV5g_m35W0EukrrGPPVkc&ll=1.2863010000000008%2C103.85281599999999&z=17'
              target='_blank'
              rel='noopener noreferrer'
            >
              Get Directions
            </a>
          </button>
        </div>
        <div className='w-full md:w-1/2 md:order-2'>
          <h1 className='text-gray-700 text-3xl mt-2'>Accommodations</h1>
          <h2 className='m-2'>
            Heritage Room
            <br />
            $315 / Night
            <br />
            Book before August to receive the special wedding rate
            <br />
            Use booking Code: F13EE
          </h2>
          <button className='text-gray-700 border-solid border-2 rounded px-4 text-sm mb-2'>
            <a
              href='https://secure.fullertonhotels.com/?hotel=27212&Chain=10237&Room=HRK&_gl=1*l0n5nu*_ga*MjEzMTU5NDUxNi4xNjg2MDUzNzA1*_ga_WV41QBH73P*MTY4NjA1MzcwNS4xLjEuMTY4NjA1Mzk0Ni4wLjAuMA..'
              target='_blank'
              rel='noopener noreferrer'
            >
              Book a room
            </a>
          </button>
          <h2 className='m-2'>
            Quay Room
            <br />
            $275 / Night
            <br />
            Book before August to receive the special wedding rate
            <br />
            Use booking Code: F13EE
          </h2>
          <button className='text-gray-700 border-solid border-2 rounded px-4 text-sm mb-2'>
            <a
              href='https://secure.fullertonhotels.com/?hotel=27212&Chain=10237&Room=HRK&_gl=1*l0n5nu*_ga*MjEzMTU5NDUxNi4xNjg2MDUzNzA1*_ga_WV41QBH73P*MTY4NjA1MzcwNS4xLjEuMTY4NjA1Mzk0Ni4wLjAuMA..'
              target='_blank'
              rel='noopener noreferrer'
            >
              Book a room
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Info;
