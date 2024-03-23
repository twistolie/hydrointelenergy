import React from 'react'
import learn from '../assets/learn.jpg'
import read from '../assets/read.jpg'
import irrigation from '../assets/irrigation.jpg'
import lighting from "../assets/lighting.jpg";


const Projects = () => {
  return (
    <div>
    {/* about text */}
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='projects'>
       <div className='md-w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 '>
       <div className='md-w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
         <div className='border sizing'>
          <img src={learn} alt=''className='rounded-s-3xl cursor-pointer duration-500 ease-in-out border-white transform hover:-translate-y-1 hover:scale-110'/> 
         </div>
         </div>
      <div className='md:w-3/5 mx-auto'>
       <div className=''>
          <h3 className='text-1xl text-neutralGrey font-semibold mb-4 md:2/3'>Projects</h3>
          <h2 className='text-2xl text-neutralGray font-bold'>Clean Cooking</h2>
          <p className='md:w-3/4 text-1xl text-neutralGrey mb-8'> Majorly, households depend on firewood and other other fossil fueled
          energy for cooking. Clean cooking energy using solar power is a sustainable, cost-effective, and environmentally friendly 
          solution for households looking to reduce their carbon footprint and embrace renewable energy sources. 
          By harnessing the power of the sun, we enable individuals to enjoy clean and green cooking experiences while contributing to 
          a healthier planet for future generations to come.</p>
          <button className='orr'>Read More</button>
         </div>
         </div>    
       </div>
    </div>
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
       <div className='md-w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 '>
       <div className='md-w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'> 
         </div>
     <div className='md:w-3/5 mx-auto'>
       <div className=''>
          <h3 className='text-1xl text-neutralGrey font-semibold mb-4 md:2/3'>Projects</h3>
          <h2 className='text-2xl text-neutralGray font-bold'>Energy Literacy</h2>
          <p className='md:w-3/4 text-1xl text-neutralGrey mb-8'>We provide understanding of distinctions between
           grid-tied solar systems that feed power back into the grid and off-grid systems that power homes or 
           communities independently, often relying on batteries. Learn about the reduced carbon footprint and 
           environmental benefits of solar power, but also acknowledge the potential impacts associated with 
           manufacturing and disposal of solar components.</p>
          <button className='orr'>Read More</button>
         </div>
         </div> 
         
         <div>
          <img src={read} alt=''className='rounded-r-3xl cursor-pointer duration-500 ease-in-out bg-blue-400 
          hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110'/>
         </div>
       </div>
    </div>

    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
       <div className='md-w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 '>
       <div className='md-w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
         <div>
          <img src={irrigation} alt='' className='rounded-s-3xl cursor-pointer duration-500 
          ease-in-out bg-blue-400 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110'/>
         </div>
         </div>  
        <div className='md:w-3/5 mx-auto'>
       <div className=''>
          <h3 className='text-1xl text-neutralGrey font-semibold mb-4 md:2/3'>Projects</h3>
          <h2 className='text-2xl text-neutralGray font-bold'>Productive use of Solar Energy</h2>
          <p className='md:w-3/4 text-1xl text-neutralGrey mb-8'>We have excelled in solar energy utilization for irrigation systems, 
          crop drying, and powering agricultural machinery such as water pumps. By harnessing this solar power for agriculture, 
          farmers have increased crop yields, improved farming efficiency, and reduced operational costs, leading to enhanced
          productivity and income generation.</p>
          <button className='orr'>Read More</button>
         </div>
         </div>    
       </div>
    </div>  

    {/*  company stats*/}
    <div className='px-4 lg:px-14 max-w-screen-2xl  sm:w-full mx-auto bg-neutralSilver py-16'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
       <div className='md:w-1/2'>
         <h2 className='text-3xl text-neutralDGrey font-semibold mb-4 md:2/3'>We have been helping local
          <span className='text-brandPrimary'> communities <br/>reinvent themselves</span> </h2>
            <p>We have reached here with extensive hard work and dedication </p>
       </div>
      
    {/* stats */}
       <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
          <div className='space-y-8'>
              <div className='flex items-center gap-4'>
              <img src="/src/assets/mm2.png" className='w-8' alt="" />
                <div> 
                  <h4 className='text-2xl text-neutralDGrey font-semibold'>125</h4>
                  <p>PayGo Customers</p>
               </div>
              </div>
              <div className='flex items-center gap-4'>
              <img src="/src/assets/energy1.png" className='w-8' alt="" />
                <div> 
                  <h4 className='text-2xl text-neutralDGrey font-semibold'>376</h4>
                  <p>Solar Products Sold</p>
               </div>
              </div>
            </div>
            <div className='space-y-8'>
              <div className='flex items-center gap-4'>
              <img src="/src/assets/event.png" className='w-8' alt="" />
                <div> 
                  <h4 className='text-2xl text-neutralDGrey font-semibold'>862</h4>
                  <p>Orders Recieved</p>
               </div>
              </div>
              <div className='flex items-center gap-4'>
              <img src="/src/assets/home.png" className='w-8' alt="" />
                <div> 
                  <h4 className='text-2xl text-neutralDGrey font-semibold'>494</h4>
                  <p>Homesteads Reached</p>
               </div>
              </div>
            </div>
          </div>  
        </div>
      </div>

      {/*Div Box*/}
      <div className="container w-full mt-10 md:m-10   bg-gradient-to-tr from-yellow-300 
      to-black via-gray-800 rounded-t-lg rounded-l-lg shadow-md mx-auto p-20 
      md:flex md:items-center rounded-lg box-sizing-border-box">
      <div className="w-full md:w-1/2 md:pr-8 mt-4">
        <h2 className="text-4xl text-white font-bold mb-4">Solar Home Power That Expands With You</h2>
        <p className="text-lg text-white">The Sun King 200x, a warranted solar home system that allows 
        customers to expand their system by adding extra bulbs, solar panels, battery capacity, and 
        appliances like a TV instead. This is to discourage electronic waste as the customer doesn't 
        need to buy an extra solar home system in response to their growing needs.</p>
        <button className="orr mt-6">More Info...</button>  
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <img src="/src/assets/hm.png" alt="" className="w-full h-auto" />
      </div>
      </div>
     
     {/*Another Div */}
  <div className="flex justify-center overflow-auto items-center md:m-10 space-x-4">
  <div className="w-1/2 flex flex-col items-center py-10">
    <div className="bg:white shadow-lg hover:bg-amber-300 hover:text-white  w-full objects-center rounded-md">
    <div className="">
      <h2 className='text:neutralGray md:pl-20 md:pt-10 font-bold text-2xl'>Home 800</h2>
    </div>
      <img src="/src/assets/slrb.png" alt="" className="w-full md:pl-20 md:pt-40 md:pb-40 md:pr-20 h-auto rounded-lg objects-center"/>
    </div>    
  </div>

  {/*Right Div */}
  <div className="w-1/2 flex flex-col items-center">
    <div className=' flex flex-col items-center border-box gap-8 w-full'>
    <div className="bg:white shadow-lg hover:text-white hover:bg-blue-700 rounded-md p-4 w-full">
    <div className="">
      <h2 className='text:neutralGray md:pl-20 md:pt-10 font-bold text-2xl'>Solar Boom</h2>
    </div>
      <img src="/src/assets/king.png" alt="" className="w-full border-box  md:h-48 rounded-lg objects-center"/>
    </div>

    <div className="bg:white shadow-lg hover:text-white hover:bg-gray-700 rounded-md gap-8 w-full">
    <div className="">
      <h2 className='text:neutralGray md:pl-20 md:pt-10 font-bold text-2xl'>Solar Boom</h2>
    </div>
      <img src="/src/assets/king.png" alt="" className="w-full border-box md:h-48 rounded-lg"/>
    </div>
    </div>

 <div className='flex flex-col md:flex-row items-center w-1/2 sm:space-x-2  gap-10 mt-8 '>
     <div className=" ">
    <div className=" bg:white shadow-lg hover:bg-green-700 hover:text-white rounded-md pl-10 pr-10 w-full">
    <div className="">
      <h2 className='text:neutralGray md:pl-10 md:pt-5  font-bold text-2xl'>Home 40plus</h2>
    </div>
      <img src="/src/assets/40plus2.png" alt="" className="w-full h-auto rounded-lg objects-center"/>
    </div>
    
  </div>
 
  <div className=" ">
    <div className="bg:white shadow-lg hover:bg-green-700 hover:text-white rounded-md pl-10 pr-10 w-full ">
    <div className="">
      <h2 className='text:neutralGray md:pl-10 md:pt-5 font-bold text-2xl'>Home 200x</h2>
    </div>
      <img src="/src/assets/200x.png" alt="" className="w-full h-auto rounded-lg objects-center "/>
    </div>
     </div> 
  
  </div>
  </div>

  
   </div>

{/*Pick up Point! */}
<div className="bg-neutralSilver relative w-full bg-cover bg-center bg-no-repeat " id='home'> {/* Make the container relative */}
    <div className='sm:flex sm:items-center pb-60 md:pb-0 sm:justify-center h-auto '>
       <img src={lighting} alt="" className="w-full h-auto object-fit  " /> {/* Image styles */}

       {/* Overlay div */}
       <div className="object-fit sm:w-full  md:w-3/4 lg:w-1/2  mx-auto object-fit absolute md:top-40 md:left-20 
       rounded-xl bg-gradient-to-tl sm:b-24 from-gray-200/80 
       to-black via-gray-900 text-gray-300 w-full"> 
       <h4 className="text-3xl text-align:justify font-bold mb-2 pl-20 pr-6 pt-10 text-align:justify">Pay as You Go Financing</h4>
       <div className=' pl-6  md:px-8 lg:px-10'>  
       <p className="text-1xl text-Gray pl-10 pr-10 pb-10 pt-4 text-align:justify">Get solar installed today with a small down payment. 
        Make small weekly payments. Finish your payments, and enjoy free solar energy afterward!</p>
        </div>  
     </div>
    </div>
   </div>
   
   
  </div> 
     
  );
};

export default Projects;
