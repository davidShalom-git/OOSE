import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import galaxy from '../assets/galaxy.png';
import OOSE from "../assets/oose.mp4";
import gsap from 'gsap';

const Video = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

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

        gsap.fromTo(
          navRef.current,
          { y: -100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
        );
      }
    );

    return () => {
      mm.revert();
    };
  }, []);

  const topics = [
    { title: "OOSE", videoSrc: OOSE },
  ];

  const handleVideoClick = (videoSrc) => {
    setSelectedVideo(videoSrc);
  };

  return (
    <div className="container mx-auto my-10 px-6">
      <div
        className="container flex flex-col md:flex-row justify-between items-center text-white px-6 py-5 rounded-[40px] mx-auto bg-black mt-5"
        ref={navRef}
      >
        <div className="flex justify-between w-full md:w-auto">
          <img src={galaxy} alt="Galaxy Icon" className="h-10 w-10 animate-spin" />
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

      {!selectedVideo ? (
        <div className="flex justify-center items-center h-[70vh] ">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="shadow-lg p-6 rounded-[35px] bg-black hover:bg-gray-800 lg:w-[30%] w-[90%] text-white cursor-pointer transition-colors"
              onClick={() => handleVideoClick(topic.videoSrc)}
            >
             
              <h1 className="text-center mt-6 text-lg md:text-xl">{topic.title}</h1>
              <p className="text-center mt-2">Click to View Video</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="relative mt-10">
        
          <video
            src={selectedVideo}
            controls
            className="w-full h-screen rounded-[35px] shadow-lg bg-black"
            title="Video Viewer"
          />
        </div>
      )}
    </div>
  );
};

export default Video;
