import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Understanding your heart health starts here.</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">We're here to help you take simple steps toward a healthier heart.</p>
        <Link to="/predictor" className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition mb-12">Check Your Risk Now</Link>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <img src="/images/person4.webp" alt="Diverse healthy person" className="rounded-lg shadow-md w-full h-64 object-cover" />
          <img src="/images/person2.avif" alt="Diverse healthy person" className="rounded-lg shadow-md w-full h-64 object-cover" />
          <img src="/images/person5.webp" alt="Diverse healthy person" className="rounded-lg shadow-md w-full h-64 object-cover" />
        </div>

        <section className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Building Trust with Trusted Partners</h2>
          <div className="flex justify-around mb-6">
            <img src="/images/iha-logo.webp" alt="Indian Heart Association" className="h-12" />
            <img src="/images/who-logo.webp" alt="World Health Organization" className="h-12" />
            <img src="/images/ind-logo.webp" alt="India" className="h-12" />
          </div>
          <blockquote className="text-gray-600 italic">"Ayurveda teaches us to live in harmony with ourselves, others, and the environment to achieve true well-being." </blockquote>
        </section>
         <iframe
    src="https://www.chatbase.co/chatbot-iframe/QPORrCuChx-nGQT_A_r40"
    width="100%"
    height="30%"
></iframe>
      </div>
    </div>
  );
};

export default Homepage;