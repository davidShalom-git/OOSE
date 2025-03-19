import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(TextPlugin);

const About = () => {
  const textRef = useRef(null);
  const h1Ref = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .from(h1Ref.current, { opacity: 0, y: 50, duration: 1, ease: "power2.out" })
      .from(textRef.current, { opacity: 0, y: 50, duration: 1, ease: "power2.out" }, "-=0.5");

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 ref={h1Ref} className="text-4xl font-bold mb-4">About Our Platform</h1>
        <p ref={textRef} className="text-lg text-gray-300 leading-relaxed">
          Welcome to our educational platform, designed to empower learners with interactive 
          quizzes, informative presentations, and engaging video content. Our goal is to 
          create a seamless and intuitive learning experience.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-5xl">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-3">Interactive Quizzes</h2>
          <p className="text-gray-400">
            Test your knowledge with fun and challenging quizzes tailored to different subjects.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-3">Informative PPTs</h2>
          <p className="text-gray-400">
            Access well-structured presentations to grasp concepts effectively and efficiently.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-3">Engaging Videos</h2>
          <p className="text-gray-400">
            Learn through high-quality educational videos covering various topics and subjects.
          </p>
        </div>
      </div>

      {/* Acknowledgement Section */}
      <div className="bg-black w-full mt-16 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Acknowledgements</h2>
        <p className="text-gray-400">
          We express our gratitude to students, educators, developers, and users who have contributed 
          to making this platform a success.
        </p>
      </div>

      {/* Footer */}
      <div className="mt-10 text-center">
        <p className="text-gray-400 text-lg">Connect with us:</p>
        <div className="flex justify-center gap-6 mt-3">
          <FaFacebook className="text-blue-500 text-2xl cursor-pointer" />
          <FaTwitter className="text-blue-400 text-2xl cursor-pointer" />
          <FaInstagram className="text-pink-500 text-2xl cursor-pointer" />
          <FaLinkedin className="text-blue-700 text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default About;
