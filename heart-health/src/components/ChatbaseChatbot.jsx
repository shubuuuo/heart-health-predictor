import React from 'react';

const ChatbaseChatbot = () => {
  // Optional: Add props for customization (e.g., height, theme)
  // const { minHeight = '700px', width = '100%' } = props;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* Header for context (optional; matches site style) */}
      <div className="w-full max-w-4xl mb-4 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Heart Health Chatbot</h1>
        <p className="text-gray-600">Ask questions about heart health—powered by AI.</p>
      </div>

      {/* Iframe Container: Full-width, responsive, with Tailwind for layout */}
      <div className="w-full max-w-4xl h-[80vh] md:h-[700px] relative">
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/QPORrCuChx-nGQT_A_r40"
          width="100%"
          style={{
            height: '100%',
            minHeight: '700px',  // Fallback for smaller screens
            border: 'none',      // Equivalent to frameborder="0"
          }}
          frameBorder={0}
          title="Heart Health Chatbot"  // Accessibility: Add title for screen readers
          allow="fullscreen"  // Optional: Allow fullscreen if supported
          sandbox="allow-scripts allow-same-origin"  // Security: Restrict iframe permissions
          className="rounded-lg shadow-lg"  // Tailwind: Rounded corners and shadow for polish
          loading="lazy"  // Performance: Lazy-load for better initial page speed
        />
      </div>

      {/* Optional Footer: Disclaimer (matches site guidelines) */}
      <div className="w-full max-w-4xl mt-4 text-center text-sm text-gray-500">
        <p>This chatbot provides general guidance only—not medical advice. Consult a doctor for personal concerns.</p>
      </div>
    </div>
  );
};

export default ChatbaseChatbot;
