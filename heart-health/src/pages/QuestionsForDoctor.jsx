import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const QuestionsForDoctor = () => {
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const questions = [
    "Based on my recent check, what’s my biggest heart health concern?",
    "How often should I get my blood pressure or cholesterol checked?",
    "Are there any changes I should make to my diet or exercise?",
    "Does my family history affect my risk, and what can I do about it?",
    "What symptoms should I watch for that mean I need to call you right away?",
    "Are there medications or tests you recommend for me?",
    "How can I manage stress better for my heart?",
    "What’s a realistic goal for my weight or activity level?"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Questions for Your Doctor</h1>
        <p className="text-center text-gray-600 mb-8">Print this list to bring to your appointment. Jot down notes as you talk—it's okay to ask for clarification!</p>
        <div ref={printRef} className="bg-white p-8 rounded-lg shadow-md space-y-4">
          <h2 className="text-xl font-semibold mb-4">Heart Health Questions</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            {questions.map((q, index) => (
              <li key={index} className="border-b border-gray-200 pb-2 flex items-start">
                <span className="mr-2 flex-shrink-0">{index + 1}.</span>
                <span>{q}</span>
              </li>
            ))}
          </ol>
          <div className="mt-6 text-sm text-gray-500">
            <p>Prepared by Heart Health Predictor | Date: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
        <button onClick={handlePrint} className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 mt-6 font-semibold">Print This List</button>
        <p className="text-center text-gray-600 mt-4">Bring this to your appointment and feel free to add your own questions. You're taking a great step for your health!</p>
      </div>
    </div>
  );
};

export default QuestionsForDoctor;