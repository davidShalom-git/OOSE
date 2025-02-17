import React, { useRef, useState } from 'react';
import helmet from '../assets/profile.png';
import galaxy from '../assets/galaxy.png';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const English = () => {

  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
 

  const questions = [
    {
      question: "What is the Waterfall model?",
      options: ["An iterative development model", "A linear and sequential software development model", "A model emphasizing rapid prototyping", "A model focused on user involvement throughout development"],
      answer: "A linear and sequential software development model"
    },
    {
      question: "What is the primary characteristic of the Iterative model?",
      options: ["Sequential development", "Emphasis on risk management", "Minimal documentation", "Continuous feedback and refinement"],
      answer: "Continuous feedback and refinement"
    },
    {
      question: "What is the main advantage of the Incremental model?",
      options: ["Low initial cost", "High flexibility for changes", "Quick project completion", "Emphasis on documentation"],
      answer: "High flexibility for changes"
    },
    {
      question: "Which model involves breaking the development process into small parts called iterations?",
      options: ["Waterfall model", "Spiral model", "Agile model", "V-Model"],
      answer: "Agile model"
    },
    {
      question: "What does RAD stand for in the context of software development?",
      options: ["Requirements Analysis and Design", "Rapid Application Development", "Random Application Deployment", "Resource Allocation and Development"],
      answer: "Rapid Application Development"
    },
    {
      question: "In the V-Model, what is the relationship between testing and development phases?",
      options: ["They are performed simultaneously", "Testing follows development", "Development follows testing", "They are independent of each other"],
      answer: "Testing follows development"
    },
    {
      question: "What is the main disadvantage of the Waterfall model?",
      options: ["High flexibility", "Difficulty in accommodating changes", "Emphasis on user involvement", "Rapid development pace"],
      answer: "Difficulty in accommodating changes"
    },
    {
      question: "What is the main principle behind the Spiral model?",
      options: ["Iterative and incremental development", "Linear and sequential development", "Rapid prototyping", "Risk-driven development"],
      answer: "Risk-driven development"
    },
    {
      question: "What is the primary characteristic of the Iterative model?",
      options: ["Sequential development", "Emphasis on risk management", "Minimal documentation", "Quick creation of a model to visualize requirements"],
      answer: "Quick creation of a model to visualize requirements"
    },
    {
      question: "What is the primary goal of 'Scrum' in Agile development?",
      options: ["To create comprehensive documentation", "To manage project budgets efficiently", "To foster teamwork and deliver working software iteratively", "To emphasize rapid prototyping"],
      answer: "To foster teamwork and deliver working software iteratively"
    },

  ];

  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(''));
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionChange = (index, value) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = value;
    setSelectedOptions(newSelectedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newScore = 0;
    selectedOptions.forEach((option, index) => {
      if (option === questions[index].answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
    setShowResult(true);
  };

  return (
    <>
    <div className="container mx-auto my-10 px-6">

      <div
        className="container flex flex-col md:flex-row justify-between items-center text-white p-5 rounded-[40px] mx-auto bg-black mt-5"
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

        <div className="hidden md:flex items-center mt-4 md:mt-0 p-1">
          <button>
            <img
              src={helmet}
              alt="Profile Icon"
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14"
              onClick={onsubmit}

            />

          </button>
        </div>
      </div>


      <h1 className='text-center mt-20 mb-20 text-4xl bg-black text-white md:w-1/3 w-2/3 mx-auto px-2 py-3 rounded-[30px]'>OOSE</h1>

      <div className="max-w-6xl mx-auto my-10 px-4 sm:px-6 lg:px-10">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {questions.map((q, index) => (
              <div
                key={index}
                className="border p-8 rounded-2xl shadow-xl bg-gradient-to-br from-gray-800 via-black to-gray-900 text-white hover:scale-105 transition-transform duration-300"

              >
                <h2 className="text-2xl font-extrabold mb-6">{q.question}</h2>
                {q.options.map((option, optIndex) => (
                  <div key={optIndex} className="mb-4" >
                    <input
                      type="radio"
                      id={`q${index}_opt${optIndex}`}
                      name={`question${index}`}
                      value={option}
                      checked={selectedOptions[index] === option}
                      onChange={() => handleOptionChange(index, option)}
                      className="mr-3 h-5 w-5 text-blue-400 border-gray-300 focus:ring-2 focus:ring-blue-500"
                    />
                    <label
                      htmlFor={`q${index}_opt${optIndex}`}
                      className="text-lg"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="mt-8 px-6 py-3 bg-black text-white rounded-lg text-xl shadow-md hover:bg-blue-700 transition-colors duration-300"
          >
            Submit
          </button>
        </form>

        {showResult && (
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-center bg-black text-white px-3 py-3 rounded-xl w-1/3 mx-auto ">
              Your Score: {score} / {questions.length}
            </h2>
          </div>
        )}
      </div>
    </div>


   

    </>
  );
};

export default English;
