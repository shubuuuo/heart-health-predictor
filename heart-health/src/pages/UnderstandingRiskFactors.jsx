import React from 'react';

const UnderstandingRiskFactors = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Understanding Risk Factors</h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">These are common things that can affect your heart health. We're explaining them in simple terms—no complicated words here.</p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-5xl mb-4">🩸</div>
            <h2 className="text-xl font-bold mb-3">Cholesterol</h2>
            <p className="text-gray-600 mb-4">This is a waxy substance in your blood. A bit is good for your body, but too much can build up and make it harder for blood to flow to your heart. Aim for levels under 200 mg/dL if possible—talk to your doctor about yours.</p>
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="text-sm font-medium">Tip: Eating fruits, veggies, and whole grains can help keep it in check.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-5xl mb-4">📈</div>
            <h2 className="text-xl font-bold mb-3">Blood Pressure</h2>
            <p className="text-gray-600 mb-4">This measures how hard your blood pushes against your arteries. The "top number" (systolic) shows pressure when your heart beats. High numbers (over 120/80) over time can strain your heart.</p>
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="text-sm font-medium">Tip: Regular walks and less salt can make a difference.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
            <h2 className="text-xl font-bold mb-3">Family History</h2>
            <p className="text-gray-600 mb-4">If close family members (like parents or siblings) have had heart problems, you might have a higher chance too. It's like inheriting traits—knowing this helps you stay proactive.</p>
            <div className="bg-blue-50 p-3 rounded-md">
              <p className="text-sm font-medium">Tip: Share your family story with your doctor for tailored advice.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600">These factors add up, but small changes can lower your risk. Always chat with your doctor for personal insights.</p>
        </div>
      </div>
    </div>
  );
};

export default UnderstandingRiskFactors;