import React, { useEffect, useRef, useState } from 'react';
import galaxy from '../assets/galaxy.png';
import physics from '../assets/phy.png';
import { Link } from 'react-router-dom';
import { TextPlugin } from 'gsap/TextPlugin';
import gsap from 'gsap';
gsap.registerPlugin(TextPlugin);

const Quiz = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const imageref = useRef(null);
  const textRef = useRef(null);
  const h1Ref = useRef(null);
  const cardRefs = useRef([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);

  const topics = [
    { title: 'OOSE', imgSrc: physics, direc: "/oose1" },
  ];

  const filteredTopics = topics.filter((topic) =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

        const timeline = gsap.timeline();
        if (imageref.current && textRef.current && h1Ref.current) {
          timeline
            .from(imageref.current, {
              x: isMobile ? 0 : isTablet ? -100 : -200,
              opacity: 0,
              duration: 1.5,
              ease: "power2.out",
            })
            .from(textRef.current, {
              y: isMobile ? 50 : 200,
              opacity: 0,
              duration: 1.5,
              ease: "power2.out",
            }, "-=1")
            .to(h1Ref.current, {
              text: "Smart Learning...",
              duration: 2,
              ease: "power2.inOut",
            }, "-=1");
        }

        const validCardRefs = cardRefs.current.filter(Boolean);
        if (validCardRefs.length > 0) {
          gsap.from(validCardRefs, {
            y: isMobile ? 100 : 200,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.3,
          });
        }

        return () => {
          timeline.kill();
        };
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
          className="container mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center text-white rounded-[40px] bg-black mt-5"
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
            className={`flex-1 md:flex ${isOpen ? "block" : "hidden"} md:block justify-center mt-4 md:mt-0`}
          >
            <ul className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 text-lg">
              <li>
                <Link to="/home" className="text-white hover:text-gray-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="text-white hover:text-gray-400">
                  Quiz
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-white hover:text-gray-400">
                  Docs
                </Link>
              </li>
              <li>
                <Link to="/video" className="text-white hover:text-gray-400">
                  Video
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-gray-400">
                  About
                </Link>
              </li>
            </ul>
          </div>

        </div>



        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 lg:w-[40%] gap-6 mx-auto mt-10 mb-20">
          {filteredTopics.map((topic, index) => (
            <div
              key={index}
              className="shadow-lg shadow-black p-6 md:p-8 mb-10 rounded-[35px] bg-black"
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <img
                src={topic.imgSrc}
                className="h-[150px] md:h-[180px] mx-auto"
                alt={topic.title}
              />
              <h1 className="text-center mt-6 text-lg md:text-xl text-white"><Link to={topic.direc} className="text-white hover:text-gray-400">
                {topic.title}
              </Link></h1>
            </div>
          ))}
        </div>

      </div>

    </>
  );
};

export default Quiz;
