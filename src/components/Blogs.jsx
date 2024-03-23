import React from 'react'

const Blogs = () => {
  const blogs = [
    {id:1, title: "Creating Streamlined Safeguarding Process", image:"/src/assets/blog1.jpeg"},
    {id:2, title: "What are your Safeguarding Responsibilities and how have you managed them?", image:"/src/assets/blog2.jpg"},
    {id:3, title: "Revamping the Membership Model in Kenya", image:"/src/assets/blog3.jpg"},
  ];

  return (
    <div className='px-4 lg:px-14  max-w-screen-2xl mx-auto my-12' id='blog'>
      <div className='text-center  mt-24 md:w-1/2 mx-auto'>
      <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 mt-4'>Caring is the new marketing</h2>
         <p className='text-sm text-neutralGrey mb-8 md:3/4 mx-auto'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore reprehenderit nemo assumenda alias sed animi non, est molestias impedit pariatur dolores? Qui, nisi magnam quae nam eius cum aut labore!
         </p>
      </div>

      {/*all blogs*/}
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
        {
          blogs.map( blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
            <img src={blog.image} alt="" className='hover:scale-95 transition-all duration-300 rounded-md ' />
             <div className='text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute 
             left-0 right-0 -bottom-12'>
              <h3 className='mb-3 text-neutralGrey text-sm font-semibold'>
                {blog.title}</h3>
              <div className='flex items-center gap-8 justify-center gap-8'>
                <a 
                  href="/"
                  className='font-bold text-brandPrimary hover:text-neutral-700'
                  >
                  View all blogs {""}
                  <img src="src/assets/right.png" alt="" className='inline-block ml-2 stroke-current text-green-600' />
                 
                 
                </a>

              </div>
             </div>
            </div>)
        }
      </div>
    </div>
  );
};

export default Blogs;
