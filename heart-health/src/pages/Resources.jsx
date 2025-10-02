import React from 'react';
import { Link } from 'react-router-dom';

const Resources = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Resources for You</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Discover simple guides and tips to support your heart health. Everything here is designed to help you feel more informed and empowered.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Link to="/resources/understanding-risk-factors" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="text-3xl mb-4">📊</div>
            <h2 className="text-xl font-bold mb-2">Understanding Risk Factors</h2>
            <p className="text-gray-600">Learn what things like cholesterol and blood pressure mean for your heart, with easy visuals.</p>
          </Link>
          <Link to="/resources/symptoms-guide" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="text-3xl mb-4">🚨</div>
            <h2 className="text-xl font-bold mb-2">Symptoms Guide</h2>
            <p className="text-gray-600">A clear guide to common signs for men and women—know what to watch for.</p>
          </Link>
          <Link to="/resources/healthy-lifestyle-tips" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="text-3xl mb-4">🍎</div>
            <h2 className="text-xl font-bold mb-2">Healthy Lifestyle Tips</h2>
            <p className="text-gray-600">Practical, doable advice on eating well, moving more, and managing stress.</p>
          </Link>
          <Link to="/resources/questions-for-doctor" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="text-3xl mb-4">💬</div>
            <h2 className="text-xl font-bold mb-2">Questions for Your Doctor</h2>
            <p className="text-gray-600">A handy, printable list to help you remember what to ask at your next visit.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resources;