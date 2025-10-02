import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbartwo';
import Homepage from './pages/Homepage';
import Predictor from './pages/Predictor';
import Resources from './pages/Resources';
import UnderstandingRiskFactors from './pages/UnderstandingRiskFactors';
import SymptomsGuide from './pages/SymptomsGuide';
import HealthyLifestyleTips from './pages/HealthyLifestyleTips';
import QuestionsForDoctor from './pages/QuestionsForDoctor';
import Chatbot from './pages/Chatbot';
import NextSteps from './pages/NextSteps';
import ChatbotIframe from './components/ChatbaseChatbot';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/predictor" element={<Predictor />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/understanding-risk-factors" element={<UnderstandingRiskFactors />} />
          <Route path="/resources/symptoms-guide" element={<SymptomsGuide />} />
          <Route path="/resources/healthy-lifestyle-tips" element={<HealthyLifestyleTips />} />
          <Route path="/resources/questions-for-doctor" element={<QuestionsForDoctor />} />
          {/* <Route path="/chatbase" element={<ChatbaseChatbot />} /> */}
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/next-steps" element={<NextSteps />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;