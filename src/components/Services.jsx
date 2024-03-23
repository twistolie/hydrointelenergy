import React from 'react';

const Services = () => {
  
  const services = [
    {id: 1, title: "Our Vision", 
    description: "To lead in the off-grid energy sector and revolutionizing how communities access and utilize clean energy.",
    image:"/src/assets/eye.png"}, 

    {id: 2, title: "Our Mission", 
    description: "Empower communities through bridging logistical and financial barriers hindering access to clean energy. We are developing and implementing innovative systems and sustainable approaches to ensuring sustainable technology transfer for a brighter and greener future.",
    image:"/src/assets/graph.png"},

    {id: 3, title: "Our Goal", 
    description: "Set a benchmark for quality energy technologies and shape a future of clean accessible energy, integral well-being and progress of every community we serve.",
    image:"/src/assets/target.png"},

  ];
  return (
    //{/*Card*/}
    
   <div className='md:px-14 px-4 py-10 max-w-screen-2-1 mx-auto ' id='about'>
    <div className='py-8 text-center'>
      <h2 className='text-neutralGray font-bold text-2xl'>About Us</h2>
      <p className='text-neutralDGrey'>HydroIntel-energy is a leading provider of solar energy solutions, 
      specializing in distribution, installation, and financing. With a focus on Kenya and similar 
      regions, we empower communities by addressing energy challenges, and ensuring access to clean 
      and affordable power. Our diverse product range enhances the quality of life for our customers, 
      reflecting our commitment to sustainable energy and improved living standards.</p>
      </div>
    <div className='mt-14 grid lg:grid-cols-3 pb-10 md:grid-cols-2 grid-cols-1 md:w=11/12 mx-auto gap-12'>
        {
          services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px]
          mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-2
          hover:border-blue-500 transition-all duration-300 flex items-center justify-center
          h-full'>
            <div>
              <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3x1 rounded-br-3x1'>
                <img src={service.image} alt="" className='-ml-5' /></div>
              <h4 className='text-2x1 font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
              <p className='text-sm text-neutralGray'>{service.description}</p>
            </div>
          </div>)
        }
      </div>
      <div className='text-center my-8'>
        <h4 className='text-3xl text-neutralGray font-bold mb-4'>Empowering Lives with HyrdroIntel-ENERGY</h4>
        <p className='text-neutralDGrey'>HyrdroIntel-ENERGY is dedicated to facilitating the widespread availability of affordable clean energy solutions in Kenya and Eastern Africa. 
        Our mission is fueled by a commitment to overcome the logistical and financial barriers that impede access to clean energy, 
        leading to energy poverty and stalling economic progress in many parts of the country. 
        Tailoring our offerings to the diverse energy needs of Kenya, we provide a comprehensive range of clean products through a Pay-As-You-Go model. 
        Our goal is to elevate and enrich the quality of life for our customers. We firmly believe that by delivering access to clean and affordable energy, 
        we are not only enhancing living standards but also reducing reliance on unsustainable energy sources and combating the broader impacts of climate change.</p>
      </div>

      <div className='text-center my-8'>
        <h2 className='text-3xl text-neutralGray font-bold mb-4'>Meet Our Team</h2>
        <p className='text-neutralDGrey'>At Tenergy, our dedicated team is passionate about driving positive change through sustainable energy solutions. 
        With expertise in distribution, installation, and financing, we work collaboratively to bring reliable and affordable solar power to communities, 
        transforming lives one installation at a time.</p> 

        {/*Company logo*/}
    <div className='flex cursor-pointer grid-col justify-center items-center gap-8 items-center sm:w-full'>
        <div class="flex flex-col items-center shadow-xl pt-20 pb-20 pl-30 pr-30"> 
       <img src='/src/assets/john pp.jpg' alt="" className="w-1/2 rounded-full hover:shadow-xl" />
       <div className='pt-10'>John Khaemba</div>
       <div class="text-sm text-gray-500">Team Leader</div>
  </div>

   <div class="flex flex-col items-center shadow-xl pt-20 pb-20 pl-30 pr-30">
      <img src='/src/assets/sos pp.jpg' alt="" className="w-1/2 rounded-full hover:shadow-xl"/> 
      <div className='pt-10'>Sospeter Wekesa</div>
     <div class="text-sm text-gray-500">Project Manager</div>
  </div>

  <div class="flex flex-col items-center shadow-xl pt-20 pb-20 pl-30 pr-30">
    <img src='/src/assets/john pp.jpg' alt="Jane Smith" className="w-1/2 rounded-full hover:shadow-xl"/> 
    <div className='pt-10'>Phillip Sichangi</div>
    <div class="text-sm text-gray-500">Communications</div>
  </div>
  </div>
</div>
      
      <div className='text-center my-8'>
        <h2 className='text-3xl text-neutralGray font-bold mb-4'>Our Partners</h2>
        <p className='text-neutralDGrey'>HydroIntel-ENERGY values the collaborative relationships that drive our success. 
          Together, we are advancing the adoption of solar solutions in Kenya and beyond, 
          creating lasting impact and contributing to a more sustainable future. 
          Join us in our mission to bring clean and affordable energy to communities worldwide.</p> 

        {/*Company logo*/}
        <div className='my-8 flex flex-nowrap overflow-auto cursor-pointer  justify-between items-center gap-8 sm:w-full  scroll-smooth'>
           <img src='/src/assets/Dprize.png' alt="" className="w-60 hover:shadow-xl" />
           <img src='/src/assets/sun.png' alt="" className="w-60 hover:shadow-xl"/>
           <img src='/src/assets/solar.png' alt="" className="w-60 hover:shadow-xl"/> 
           <img src='/src/assets/innoret.png' alt="" className="w-60 hover:shadow-xl"/>
        </div>
      </div>
    </div>
  );
};
export default Services;
