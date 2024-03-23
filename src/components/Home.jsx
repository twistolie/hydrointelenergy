import React from 'react';
import energy from "../assets/energy.jpg";

const Home = () => {
 
  return (
  <div className="bg-neutralSilver relative w-full bg-cover bg-center bg-no-repeat " id='home'> {/* Make the container relative */}
    <div className='sm:flex sm:items-center sm:justify-center'>
       <img src={energy} alt="" className="w-full h-screen  " /> {/* Image styles */}

       {/* Overlay div */}
       <div className="object-fit sm:w-full md:w-3/4 lg:w-1/2 md:3/4 absolute bottom-10 md:left-10 sm:p-0 p-3 rounded-md bg-gray-600/50 text-gray-300 w-full border-box"> 
       <h4 className="text-2xl text-align:justify font-bold mb-2 pl-10 pt-6 text-align:justify">About HydroIntel-ENERGY</h4>
       <div className=' pl-6 pr-6 border-box md:px-8 lg:px-10'>  
       <p className="text-sm text-Gray text-align:justify">HydroIntel-ENERGY is dedicated to facilitating 
         the widespread availability of affordable clean energy solutions in Kenya. 
         Our mission is fueled by a commitment to overcome the logistical and financial 
         barriers that impede access to clean energy, leading to energy poverty and 
         stalling economic progress in many parts of the country. Tailoring our offerings to 
         the diverse energy needs of Kenya, we provide a comprehensive range of clean products through a Pay-As-You-Go model. 
         Our goal is to elevate and enrich the quality of life for our customers. 
         We firmly believe that by delivering access to clean and affordable energy, 
         we are not only enhancing living standards but also reducing reliance on unsustainable 
         energy sources and combating the broader impacts of climate change.</p>
         </div>

         <div className='p-10'> 
         <button className='btn-primary'>Learn More</button>
         </div>
       </div>
    </div>
  </div>
  );
};

export default Home;
