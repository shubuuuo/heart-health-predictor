import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useReactToPrint } from 'react-to-print';
import { Link } from 'react-router-dom';

const Predictor = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ age: '', cholesterol: '', bloodPressureTop: '', familyHistory: false });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const printRef = useRef();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async () => {
    if (!formData.age) return;
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3001/api/predict-risk', formData);
      setResult(response.data);
      // Anonymously store in DB via backend (handled in backend)
    } catch (error) {
      alert('Sorry, we couldn\'t calculate your risk right now. Please try again or contact support.');
    }
    setLoading(false);
    setStep(0);
  };

  const handlePrint = useReactToPrint({ content: () => printRef.current });

  const getRiskLevel = (percentage) => percentage < 30 ? 'Low' : percentage < 70 ? 'Moderate' : 'High';
  const getExplanation = (percentage) => {
    if (percentage < 30) return 'Your results show a low risk. This is great news—keep maintaining your healthy habits!';
    if (percentage < 70) return 'Your results show a moderate risk. This is not a diagnosis, but it\'s a good reason to have a conversation with your doctor.';
    return 'Your results show a high risk. Please schedule a visit with your doctor right away for personalized guidance.';
  };

  const steps = [
    { id: 1, label: 'What is your age?', name: 'age', type: 'number', placeholder: 'e.g., 45' },
    { id: 2, label: 'What is your cholesterol level? (mg/dL)', name: 'cholesterol', type: 'number', placeholder: 'e.g., 200' },
    { id: 3, label: 'What is the top number in your blood pressure reading? (e.g., 120 in 120/80)', name: 'bloodPressureTop', type: 'number', placeholder: 'e.g., 120' },
    { id: 4, label: 'Do you have a family history of heart issues?', name: 'familyHistory', type: 'checkbox' }
  ];

  if (step === 0 && result) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-lg">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Heart Health Insights</h1>
          <div ref={printRef} className="bg-white p-8 rounded-lg shadow-md mb-6">
            <h2 className="text-2xl font-semibold text-center mb-4">Risk Level: {getRiskLevel(result.riskPercentage)}</h2>
            <p className="text-gray-700 text-lg mb-4 text-center">{getExplanation(result.riskPercentage)}</p>
            <p className="text-center text-sm text-gray-500">Estimated Risk: {result.riskPercentage}%</p>
            <p className="text-xs text-gray-400 text-center mt-4">Remember, this tool is for guidance only—not a substitute for professional medical advice.</p>
          </div>
          <button onClick={handlePrint} className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 mb-4">Print These Results</button>
          <Link to="/next-steps" className="block w-full text-center bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 mb-4">See Next Steps</Link>
          <button onClick={() => { setStep(1); setResult(null); }} className="w-full bg-gray-500 text-white py-3 rounded-md hover:bg-gray-600">Start New Assessment</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Risk Assessment Tool</h1>
        <p className="text-center text-gray-600 mb-8">Let's gather a few details. This will take just a moment.</p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-center mb-6">
            <p className="text-lg font-medium">Step {step} of {steps.length}</p>
          </div>
          <label className="block text-gray-700 font-semibold mb-2">{steps[step - 1].label}</label>
          {steps[step - 1].type === 'checkbox' ? (
            <label className="flex items-center">
              <input type="checkbox" name={steps[step - 1].name} onChange={handleInputChange} className="mr-2 h-5 w-5" />
              Yes
            </label>
          ) : (
            <input
              type={steps[step - 1].type}
              name={steps[step - 1].name}
              value={formData[steps[step - 1].name]}
              onChange={handleInputChange}
              placeholder={steps[step - 1].placeholder}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          )}
          <div className="flex justify-between mt-8">
            {step > 1 && <button onClick={() => setStep(step - 1)} className="bg-gray-300 py-2 px-6 rounded-md">Back</button>}
            {step === steps.length ? (
              <button onClick={handleSubmit} disabled={loading || !formData.age} className="bg-blue-600 text-white py-2 px-6 rounded-md ml-auto disabled:opacity-50">
                {loading ? 'Calculating...' : 'See My Results'}
              </button>
            ) : (
              <button onClick={() => setStep(step + 1)} className="bg-blue-600 text-white py-2 px-6 rounded-md ml-auto">Next</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predictor;