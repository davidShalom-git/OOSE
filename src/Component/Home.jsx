import React, { useEffect, useRef, useState } from 'react';
import galaxy from '../assets/galaxy.png';
import learn from '../assets/learn.png';
import anytime from '../assets/online-class.png';
import available from '../assets/online.png';
import ignite from '../assets/Ignite.jpg';
import learm from '../assets/Learm.png';
import akash from "../assets/aakash.jpg";
import Goku from "../assets/Goku.png";
import Kathir from "../assets/Kathir.png";
import { Link} from 'react-router-dom';
import { TextPlugin } from 'gsap/TextPlugin';
import gsap from 'gsap';

gsap.registerPlugin(TextPlugin);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const imageref = useRef(null);
  const imagerefCard1 = useRef(null);
  const imagerefCard2 = useRef(null);
  const imagerefCard3 = useRef(null);
  const textRef = useRef(null);
  const h1Ref = useRef(null);


  const toggleMenu = () => setIsOpen(!isOpen);

  // Responsive animations with GSAP matchMedia
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        // Define breakpoints for responsive animations
        isDesktop: "(min-width: 1024px)",
        isTablet: "(max-width: 1023px)",
        isMobile: "(max-width: 768px)",
      },
      (context) => {
        const { isDesktop, isTablet, isMobile } = context.conditions;

        // Navigation animation
        gsap.fromTo(
          navRef.current,
          { y: -100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );

        // Hero section animations
        const timeline = gsap.timeline();
        timeline
          .from(
            imageref.current,
            {
              x: isMobile ? 0 : isTablet ? -100 : -200,
              opacity: 0,
              duration: 1.5,
              ease: "power2.out",
            },
            0.5
          )
          .from(
            textRef.current,
            {
              y: isMobile ? 50 : 200,
              opacity: 0,
              duration: 1.5,
              ease: "power2.out",
            },
            "-=1"
          )
          .to(
            h1Ref.current,
            {
              text: "OOSE Mission...",
              duration: 2,
              ease: "power2.inOut",
            },
            "-=1"
          );

        // Cards animation
        const cardRefs = [
          imagerefCard1.current,
          imagerefCard2.current,
          imagerefCard3.current,
        ];

        gsap.from(cardRefs, {
          y: isMobile ? 100 : 200,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.3,
        });

        // Return cleanup function for this matchMedia context
        return () => {
          timeline.revert();
        };
      }
    );

    return () => {
      mm.revert(); // Ensure all animations and matchMedia instances are cleaned up
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
    <div className="container mx-auto px-6">

    <div
  className="container flex flex-col md:flex-row justify-between items-center text-white px-6 py-5 rounded-[40px] mx-auto bg-black mt-5"
  ref={navRef}
>
  {/* Left Section */}
  <div className="flex justify-between w-full md:w-auto">
    <img
      src={galaxy}
      alt="Galaxy Icon"
      className="h-10 w-10 animate-spin"
    />
    <button
      className="md:hidden"
      onClick={toggleMenu}
      aria-label="Toggle Menu"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
    </button>
  </div>

  {/* Center Section (Links) */}
  <div
    className={`flex-1 md:flex ${isOpen ? "block" : "hidden"
      } md:block justify-center mt-4 md:mt-0`}
  >
    <ul className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
      <li>
        <Link to="/home" className="text-xl text-white hover:text-gray-400">
          Home
        </Link>
      </li>
      <li>
        <Link to="/quiz" className="text-xl text-white hover:text-gray-400">
          Quiz
        </Link>
      </li>
      <li>
        <Link to="/docs" className="text-xl text-white hover:text-gray-400">
          Docs
        </Link>
      </li>
      <li>
        <Link to="/video" className="text-xl text-white hover:text-gray-400">
          Video
        </Link>
      </li>
      <li>
        <Link to="/about" className="text-xl text-white hover:text-gray-400">
          About
        </Link>
      </li>
    </ul>
  </div>
</div>


      <div className="container flex justify-evenly items-center mt-20 flex-row md:flex-row lg:flex-row mx-auto p-5 md:p-10 rounded-[50px] mb-20 md:mb-24">
        <div ref={textRef} className="mb-5 md:mb-0 border border-white p-3 md:p-16 rounded-3xl mt-5 md:mt-0">
          <h1 ref={h1Ref} className="md:text-7xl text-6xl text-black font-bold mb-2"></h1>
          <p className="text-2xl text-black">Assignment Mudikirom, Mass Kaatrom</p>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row md:flex-col space-y-5 lg:space-x-5 md:space-y-5 justify-center mt-5 mb-20 px-3">
        <div
          className="shadow-lg shadow-black p-7 md:p-20 rounded-[90px] bg-black"
          ref={imagerefCard1}
        >
          <img src={learn} className="h-[180px] md:h-[200px] lg:h-[200px] lg:w-[330px] md:w-[200px] mx-auto" alt="Learn" />
          <h1 className="text-center mt-10 text-xl md:text-3xl text-white">Nalla Naduthuranga</h1>
        </div>
        <div
          className="shadow-lg shadow-black p-7 md:p-20 rounded-[90px] bg-black"
          ref={imagerefCard1}
        >
          <img src={anytime} className="h-[180px] md:h-[200px] lg:h-[220px] lg:w-[350px] md:w-[200px] mx-auto" alt="Learn" />
          <h1 className="text-center mt-10 text-xl md:text-3xl text-white">Nalla Purithu</h1>
        </div>
        <div
          className="shadow-lg shadow-black p-7 md:p-20 rounded-[90px] bg-black"
          ref={imagerefCard1}
        >
          <img src={available} className="h-[180px] md:h-[200px] lg:h-[220px] lg:w-[350px] md:w-[200px] mx-auto" alt="Learn" />
          <h1 className="text-center mt-10 text-xl md:text-3xl text-white">Doubt Clear Aaguthu</h1>
        </div>
        
        
        
      </div>


      <div className='flex flex-col md:flex-col lg:flex-row lg:space-x-2 mt-20 mb-10 justify-between md:border lg:border md:border-black lg:border-black px-3 md:p-10 lg:p-12 mx-4 md:mx-auto rounded-xl shadow-lg'>
        {/* Image Section */}
        <div className='flex justify-center mb-6 md:mb-0'>
          <img src={learm} className="h-[300px] md:h-[440px] w-auto mx-auto rounded-lg " alt="Learn" />
        </div>

        {/* Text Section */}
        <div className='flex flex-col justify-center items-center h-auto w-[108%] md:w-[100%] mt-20 lg:w-[50%] mx-auto bg-black p-7 '>
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left mb-4">
            Learn What Matters
          </h2>
          <p className='text-base md:text-lg text-white leading-relaxed'>
            Education is not just about acquiring knowledge; it is about learning what truly matters in life. Whether you're exploring new skills or diving deeper into your passions, the journey of learning shapes the future. Focus on what excites you, what sparks curiosity, and what has the power to impact your life and the world around you. With the right tools and mindset, anything is possible. Start learning today and discover the true power of education.
          </p>
        </div>

      </div>

      <div className='flex flex-col  md:flex-col lg:flex-row lg:space-x-2 mt-12 mb-10 justify-between md:border lg:border md:border-black lg:border-black p-3 md:p-10 lg:p-12 mx-4 md:mx-auto rounded-xl'>
        {/* Image Section */}
        <div className='flex justify-center mb-6 md:mb-0'>  
          <img src={ignite} className="h-[300px] md:h-[440px] w-auto mx-auto rounded-lg " alt="Learn" />
        </div>

        {/* Text Section */}
        <div className='flex flex-col justify-center items-center h-auto w-[108%] mt-20 md:w-[100%] lg:w-[50%] mx-auto bg-black p-6 '>
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left mb-4">
            Learn makes Perfect
          </h2>
          <p className='text-base md:text-lg text-white leading-relaxed'>
            Education is not just about acquiring knowledge; it is about learning what truly matters in life. Whether you're exploring new skills or diving deeper into your passions, the journey of learning shapes the future. Focus on what excites you, what sparks curiosity, and what has the power to impact your life and the world around you. With the right tools and mindset, anything is possible. Start learning today and discover the true power of education.
          </p>
        </div>

      </div>

      <div className="bg-black p-6 sm:p-10 w-[95%] sm:w-3/4 md:w-2/3 mx-auto mb-10 rounded-[40px]">
        <h1 className="text-white text-center text-lg sm:text-2xl font-bold italic leading-relaxed">
          "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
        </h1>
      </div>


      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 mx-auto mt-10">
        <div className="text-white p-8 sm:p-10 md:p-12 flex flex-col justify-center items-center bg-black rounded-[40px] mx-auto">
          <img src={Goku} className="h-[150px] sm:h-[180px] md:h-[290px] w-[150px] sm:w-[180px] md:w-[250px] mx-auto" alt="React" />
          <h1 className='mt-2 text-xl'>David</h1>
        </div>


        <div className="text-white p-8 sm:p-10 md:p-12 flex flex-col justify-center items-center bg-black rounded-[40px] mx-auto">
          <img src={Kathir} className="h-[150px] sm:h-[180px] md:h-[300px] w-[150px] sm:w-[180px] md:w-[240px] mx-auto" alt="HTML" />
          <h1 className='mt-2 text-xl'>Kathir</h1>
        </div>

        <div className="text-white p-8 sm:p-10 md:p-12 flex flex-col justify-center items-center bg-black rounded-[40px] mx-auto">
          <img src={akash} className="h-[150px] sm:h-[180px] md:h-[340px] w-[150px] sm:w-[180px] md:w-[250px] mx-auto" alt="Node.js" />
          <h1 className='mt-2 text-xl'>Aakashram</h1>
        </div>

        <div className="text-white p-8 sm:p-10 md:p-12 flex flex-col justify-center items-center bg-black rounded-[40px]  mx-auto">
          <img src={learm} className="h-[150px] sm:h-[180px] md:h-[300px] w-[150px] sm:w-[180px] md:w-[270px] mx-auto" alt="Express.js" />
          <h1 className='mt-2 text-xl'>Adhithya</h1>
        </div>

      </div>

      <div className="bg-black p-6 sm:p-10 w-full sm:w-3/4 md:w-2/3 mx-auto mb-10 mt-36 rounded-[40px]">
        <h1 className="text-white text-center text-lg sm:text-2xl font-bold italic leading-relaxed">
          "World is Changing, Everytime we loose, We damgage our self, No more Waiting, Let's Rock."
        </h1>
      </div>
    </div>


    </>
  );
};

export default Nav;
