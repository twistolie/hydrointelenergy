import React from 'react'

const Newsletter = () => {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto  bg-neutralSilver py-16'>
      <div className='flex items-center justify-center lg:w-2/5 mx-auto'>
        <div className='text-center'>
         <h2 className='lg:text-3xl text-2xl text-neutral-800 font-semibold mb-6 lg:leading-snug'>
          Understanding Economics and Practicality
        </h2>
        <div className='flex items-center justify-center gap-8'>
       <button className='orr text-white'>Learn More <img src="src/assets/right.png" 
       alt="" className='inline-block ml-2 stroke-current text-green-600' />
       </button>
        </div>
       </div>   
      </div>
    </div>
  );
};

export default Newsletter;
