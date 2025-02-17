import React, { useEffect, useRef, useState } from 'react';
import galaxy from '../assets/galaxy.png';
import vadivel from '../assets/vadi.jpg';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

gsap.registerPlugin(TextPlugin);

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const imageref = useRef(null);
  const textRef = useRef(null);
  const h1Ref = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 1024px)",
        isTablet: "(max-width: 1023px)",
        isMobile: "(max-width: 768px)",
      },
      (context) => {
        const { isDesktop, isTablet, isMobile } = context.conditions;

        const elementsToAnimate = [navRef.current, imageref.current, textRef.current, h1Ref.current];
        if (elementsToAnimate.every(el => el !== null)) {
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
                text: "Smart Learning...",
                duration: 2,
                ease: "power2.inOut",
              },
              "-=1"
            );

          // Ensure all animations are cleaned up on unmount
          return () => {
            timeline.kill();
            gsap.killTweensOf(elementsToAnimate);
          };
        }
      }
    );

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <>
      <div className="container mx-auto my-10 px-6">
        <div
          className="container flex flex-col md:flex-row justify-between items-center text-white px-6 py-5 rounded-[40px] mx-auto bg-black mt-5"
          ref={navRef}
        >
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

        <div className="container flex justify-evenly items-center mt-12 flex-col md:flex-row mx-auto p-6 md:p-10 rounded-[50px] mb-12 md:mb-24">
          <div className="mb-5 md:mb-0">
            <img
              ref={imageref}
              src={vadivel}
              className="h-[490px] md:w-[470px] w-[500px] mt-5 rounded-3xl"
              alt="David Shalom"
            />
          </div>
        </div>


        <div className="bg-black p-6 sm:p-10 w-[95%] sm:w-3/4 md:w-2/3 mx-auto mb-10 rounded-[40px]">
          <h1 ref={h1Ref} className="text-white text-center text-lg sm:text-2xl font-bold italic leading-relaxed">Assignment Completed.......</h1>
        </div>
      </div>


    </>
  );
};

export default Nav;
