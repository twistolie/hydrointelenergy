import React, { useEffect, useState } from 'react';
import Ten from '../assets/ten.png';
import { Link } from 'react-scroll';

//react icons
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //set toggle Menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 100){
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // cleanup function removing eventlistener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //navitems array, to be modified to fit preference
  const navItems = [
    { link: "Home", path: "home" },
    { link: "About Us", path: "about" },
    { link: "Services", path: "service" },
    { link: "Projects", path: "projects" },
    { link: "Blogs", path: "blog" },
    { link: "Contact Us", path: "contact" },
  ];

  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
      <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white  duration-300" : ""}`}> 
        <div className='flex justify-between items-center text-base gap-8'>
          <a href="" className='text-2xl font-semibold flex items-center space-x-3'>
            <img src={Ten} alt="" className='w-40 inline-block items-center'/>
            <span className="text-[#263238]"></span></a>
            
         {/* nav items for large devices */}
         <ul className="md:flex space-x-12 hidden"> 
            { 
              navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset=
              {-100} key={path} className={`block cursor-pointer font-medium text-base ${isSticky ? "text-gray-900" : "text-white"}  hover:text-blue-500 transition: all 0.12s cubic-bezier (0.455, 0.03, 0.515, 0.955) 0s cursor-pointer first:font-medium`}>{link}</Link>)
            }
         </ul>
         {/*btn for large devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <img src='/src/assets/search.png' alt="" className="w-6 color-white bg-transparent cursor-pointer"/>
           
          </div> 
          
          {/* Menu button for only mobile devices   */}
          <div className="md:hidden">
            <button 
             onClick={toggleMenu} 
             className="text-neutralDGrey focus:outline-none focus:text-gray-500">
              { 
                 isMenuOpen ? (<FaXmark className='h-6 w-6'/>) : (<FaBars className='h-6 w-6'/>)
              }
            </button>
          </div>
        </div> 
        
        {/* nav items for mobile devices*/}
        <div className= {`space-y-4 px-4 mt-16 py-7 bg-gray-900 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
           { 
            navItems.map(({ link, path }) => <Link to={path} spy={true} smooth={true} offset=
            {-100} key={path} className="block text- base font-bold text-white hover:text-gray  
            first:font-bold first:text-yellow-300 cursor-pointer hover:text-yellow-300">{link}</Link>)
           }
        
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

