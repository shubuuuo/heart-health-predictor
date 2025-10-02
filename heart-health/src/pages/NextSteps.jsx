import React from 'react';
import { Link } from 'react-router-dom';

const NextSteps = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Next Steps</h1>
        <p className="text-center text-gray-600 mb-12">Thanks for checking your risk! Here's what to do next. Remember, this is general guidance—your doctor has the best plan for you.</p>
        <div className="space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center"><span className="text-2xl mr-3">📞</span> Talk to Your Doctor</h2>
            <p className="text-gray-700 mb-4">Share your results with them soon. Bring your printed report and ask about tests or checkups. If your risk is moderate or high, don't wait—schedule today.</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Book an appointment if you haven't had one recently.</li>
              <li>Mention any symptoms or family history.</li>
              <li>Ask for a full heart health check.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center"><span className="text-2xl mr-3">💪</span> Make Small Changes</h2>
            <p className="text-gray-700 mb-4">Even low-risk folks benefit from healthy habits. Start with one or two:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Walk 20-30 minutes a day.</li>
              <li>Add more fruits/veggies to meals.</li>
              <li>Track your blood pressure at home if possible.</li>
              <li>Manage stress with breathing exercises.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center"><span className="text-2xl mr-3">📚</span> Explore More Resources</h2>
            <p className="text-gray-700 mb-4">Dive deeper with these:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/resources/healthy-lifestyle-tips" className="bg-blue-50 p-4 rounded-md hover:bg-blue-100">Healthy Lifestyle Tips</Link>
              <Link to="/resources/questions-for-doctor" className="bg-blue-50 p-4 rounded-md hover:bg-blue-100">Questions for Your Doctor</Link>
              <Link to="/resources/symptoms-guide" className="bg-blue-50 p-4 rounded-md hover:bg-blue-100">Symptoms Guide</Link>
              <Link to="/chatbot" className="bg-blue-50 p-4 rounded-md hover:bg-blue-100">Ask the AI Chatbot</Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600">You're doing great by learning more. Small steps lead to a healthier heart—keep going!</p>
          <Link to="/predictor" className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">New Assessment</Link>
        </div>
      </div>
    </div>
  );
};

export default NextSteps;