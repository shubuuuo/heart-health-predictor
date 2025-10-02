import React from 'react';

const SymptomsGuide = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Symptoms Guide</h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Heart symptoms can vary, especially between men and women. This is a general guide— if you notice any, reach out to a doctor right away. We're not diagnosing here.</p>
        <div className="space-y-8 max-w-4xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Common Symptoms for Everyone</h2>
            <ul className="bg-white p-6 rounded-lg shadow-md space-y-2">
              <li className="flex items-start"><span className="text-red-500 mr-2">•</span> Chest discomfort or pain (like pressure or tightness)</li>
              <li className="flex items-start"><span className="text-red-500 mr-2">•</span> Shortness of breath</li>
              <li className="flex items-start"><span className="text-red-500 mr-2">•</span> Pain in arms, back, neck, jaw, or stomach</li>
              <li className="flex items-start"><span className="text-red-500 mr-2">•</span> Feeling lightheaded or faint</li>
              <li className="flex items-start"><span className="text-red-500 mr-2">•</span> Cold sweat or nausea</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Symptoms More Common in Women</h2>
            <ul className="bg-white p-6 rounded-lg shadow-md space-y-2">
              <li className="flex items-start"><span className="text-red-500 mr-2">•</span> Shortness of breath without chest pain</li>
              <li className="flex items-start"><span className="text-red-500 mr-2">•</span> Nausea, vomiting, or upset stomach</li>
              <li className="flex items-start"><span className="text-red-500 mr-2">•</span> Back or jaw pain</li>
              <li className="flex items-start"><span className="text-red-500 mr-2">•</span> Unusual fatigue</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Less Common Symptoms</h2>
            <ul className="bg-white p-6 rounded-lg shadow-md space-y-2">
              <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> Swelling in legs or feet</li>
              <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> Irregular heartbeat (fluttering)</li>
              <li className="flex items-start"><span className="text-orange-500 mr-2">•</span> Persistent cough</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12 bg-red-50 p-6 rounded-lg">
          <p className="text-lg font-semibold text-red-700">If you're experiencing any of these, especially chest pain or trouble breathing, call emergency services immediately (e.g., 104 in India).</p>
        </div>
      </div>
    </div>
  );
};

export default SymptomsGuide;