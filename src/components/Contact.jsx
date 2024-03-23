import React from 'react'


const Contact = () => {
  return ( 
<div className='py-8 p-8 ' id='contact'>  
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
    <div> 
      <h3 class="text-xl font-semibold  mb-4">Get in Touch With Us</h3>

      <div class="mb-4 flex flex-cols">
      <img src='/src/assets/map1.png' alt="" className="w-8 mr-4 rounded-full "/> 
        22 Chambers Road, Ngara, Nairobi.
      </div>
      
      <div class="mb-4 flex flex-cols">
      <img src='/src/assets/tel2.png' alt="" className="w-8 mr-4 rounded-full "/>     
        +254796832936
      </div>

      <div className='mb-4 flex flex-cols'>
      <img src='/src/assets/letter.png' alt="" className="w-8 mr-4 rounded-full "/>      
        info@hydrointelenergy.com
      </div>
    </div>

    <div> <h3 class="text-xl font-semibold mb-4">Send Us a Message</h3>
      <form>
        <div class="mb-4">
          <textarea class="form-textarea" placeholder="Your Message"></textarea>
        </div>
        <button class="btn-primary">Submit</button>
      </form>
    </div>
  </div>
  
</div>
 
 

         
  );
};

export default Contact;
