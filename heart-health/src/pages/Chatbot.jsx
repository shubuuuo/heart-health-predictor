import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! I'm here to answer simple questions about heart health, like 'What is a healthy heart rate?' or 'What foods are good for my heart?'. What can I help with today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const seriousKeywords = ['chest pain', 'shortness of breath', 'heart attack', 'pain in chest', 'trouble breathing', 'fainting'];

  const getBotResponse = (userMessage) => {
    const lowerMsg = userMessage.toLowerCase();

    // Check for serious symptoms first
    if (seriousKeywords.some(keyword => lowerMsg.includes(keyword))) {
      return "I'm sorry to hear that. This sounds serious—please call emergency services (like 911) right away or go to the nearest hospital. If it's not an emergency, contact your doctor immediately. I'm not a medical professional and can't diagnose.";
    }

    // Predefined responses
    if (lowerMsg.includes('heart rate') || lowerMsg.includes('pulse')) {
      return "A healthy resting heart rate for adults is usually 60-100 beats per minute. It can vary by age and fitness level. Check yours by feeling your wrist or neck for 60 seconds. Always consult your doctor for what's normal for you.";
    }
    if (lowerMsg.includes('food') || lowerMsg.includes('diet') || lowerMsg.includes('eat')) {
      return "Great question! Foods good for your heart include fruits and veggies (like berries and spinach), whole grains (oats, brown rice), fatty fish (salmon), nuts, and olive oil. Limit processed foods and salt. A balanced diet helps—talk to your doctor or a nutritionist for personalized tips.";
    }
    if (lowerMsg.includes('exercise') || lowerMsg.includes('activity')) {
      return "Aim for at least 30 minutes of moderate activity most days, like walking or swimming. It strengthens your heart. Start slow if you're new, and check with your doctor before big changes.";
    }
    if (lowerMsg.includes('stress') || lowerMsg.includes('relax')) {
      return "Managing stress is key for heart health. Try deep breathing, walking in nature, or talking to a friend. Getting good sleep helps too. If stress feels overwhelming, speak with your doctor.";
    }
    if (lowerMsg.includes('cholesterol') || lowerMsg.includes('blood pressure')) {
      return "These are important numbers from your checkups. High levels can affect your heart, but lifestyle changes and meds (if needed) help. Ask your doctor about yours and what to do.";
    }

    // Fallback
    return "I'm happy to help with general heart health info, but I'm not a doctor. For personal advice, please see a healthcare professional. Try asking about heart rate, foods, or exercise!";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
    setInput('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(userMsg);
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 flex flex-col h-screen max-w-md mx-auto">
      <div className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-xl font-bold">Heart Health Chatbot</h1>
        <p className="text-sm mt-1">Your friendly guide—ask away!</p>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white mx-4 rounded-lg shadow-md mt-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
              <p>{msg.text}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-200 px-4 py-2 rounded-lg">
              <p>Typing...</p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="p-4 bg-white mx-4 rounded-lg shadow-md mb-4">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isTyping}
          />
          <button type="submit" disabled={isTyping || !input.trim()} className="bg-blue-600 text-white px-6 py-3 rounded-r-md hover:bg-blue-700 disabled:bg-gray-400">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chatbot;