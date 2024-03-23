import React from 'react'
import { Footer } from 'flowbite-react';
import Ten from '../assets/ten.png';

const Foter = () => {
  return (
    
    <Footer container>
      
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        <div className='space-y-4 mb-8'>
          <a href="" className='text-2xl font-semibold flex items-center space-x-3'>
            <img src={Ten} alt="" className='w-40 inline-block items-center'/>
            <span className="text-[#263238]"></span></a>
          </div>
        
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="HydroIntel-Energy™" year={2024} />
      </div>
    </Footer>
  );
};

export default Foter;