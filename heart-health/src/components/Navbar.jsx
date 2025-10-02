// import React from 'react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <nav className="bg-blue-600 p-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">Heart Health Predictor</Link>
        <div className="space-x-6">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/predictor" className="text-white hover:text-gray-200">Risk Assessment</Link>
          <div className="relative inline-block group"> {/* Added 'group' class here */}
            <button className="text-white hover:text-gray-200 flex items-center focus:outline-none">
              Resources for You ▼
            </button>
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-10">
              {/* Changed from 'hidden group-hover:block' to opacity/visibility for smoother animation */}
              <Link to="/resources" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 first:rounded-t-md last:rounded-b-md">
                All Resources
              </Link>
              <Link to="/resources/understanding-risk-factors" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Understanding Risk Factors
              </Link>
              <Link to="/resources/symptoms-guide" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Symptoms Guide
              </Link>
              <Link to="/resources/healthy-lifestyle-tips" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Healthy Lifestyle Tips
              </Link>
              <Link to="/resources/questions-for-doctor" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Questions for Your Doctor
              </Link>
            </div>
          </div>
          <Link to="/chatbot" className="text-white hover:text-gray-200">AI Chatbot</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;