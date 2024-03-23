import React from 'react'
import agric from '../assets/agric.jpeg'

const About = () => {
  return (
  <div className= 'mt-0' id='service'>
  <section class="container mx-auto py-2 px-4 sm:px-8">
   </section>
    <section class="container mx-auto py-2 px-4 sm:px-8"> 
      <h2 class="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">    
 </div>

 <ol class="space-y-4 text-gray-900 list-decimal gap-8 md:flex justify-center list-inside dark:text-gray-400">
  <li className='ml-4 md:ml-6 lg:ml-8'>
    Residential Solar:
    <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
      <li>Solar panel design and installation</li>
      <li>Battery storage solutions</li>
      <li>Energy efficiency assessments</li>
    </ul>
  </li>

  <li className='ml-4 md:ml-6 lg:ml-8'>
    Commercial Solar:
    <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
      <li>Large-scale solar system design and installation</li>
      <li>Solar project financing</li>
      <li>Energy monitoring and management</li>
    </ul>
  </li>

  <li className='ml-4 md:ml-6 lg:ml-8'>
    Solar Maintenance Repair and Consulting:
    <ul class="ps-5 mt-2 space-y-1 list-disc list-inside">
      <li>Renewable energy strategy development</li>
      <li>Energy audits</li>
      <li>Performance optimization</li>
    </ul>
  </li>
</ol>
 </section>   

      {/* about text */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' >
         <div className='md-w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 '>
           <div >
            <img src={agric} alt='' className='rounded-lg'/>
           </div>
           <div className='md:w-3/5 mx-auto'>
              <h2 className='text-3xl text-neutralGray font-semibold mb-4 md:4/5'>Transforming Agriculture with Renewable Energy</h2>
                 <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>This involves modernization and improvements in farming practices, 
                 technology, land use, and resource management. Our main goal is to increase productivity, improve food security, 
                 and promote rural development. We have been undertaking this transformation in many places, with varying degrees of success. 
                 It has led to adoption of practices such as mechanization, irrigation, precision agriculture, and the use of genetically modified organisms. 
                 This process has also led to the growth of agribusiness and the development of value chains in the agricultural sector.</p>
                 <button className='btn-primary'>Learn More</button>
           </div>
         </div>
      </div>



      
     
     </div>
  );
};

export default About;
