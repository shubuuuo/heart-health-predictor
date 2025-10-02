import React from 'react';

const HealthyLifestyleTips = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Healthy Lifestyle Tips</h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Small, everyday changes can make a big difference for your heart. These tips are practical and start easy—no need for big overhauls.</p>
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 flex items-center"><span className="text-3xl mr-3">🍎</span> Diet Tips</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Eat more fruits and veggies—aim for half your plate colorful produce.</li>
              <li>• Choose whole grains like oats or brown rice over white bread.</li>
              <li>• Limit salty snacks; try nuts or yogurt instead for a heart-friendly boost.</li>
              <li>• Include fatty fish (like salmon) once a week for good fats.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 flex items-center"><span className="text-3xl mr-3">🏃‍♂️</span> Exercise Tips</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Walk 30 minutes most days—break it into 10-minute chunks if needed.</li>
              <li>• Add strength training twice a week, like light weights or bodyweight exercises.</li>
              <li>• Make it fun: Dance, garden, or play with kids/pets.</li>
              <li>• Start slow if you're new—consistency beats intensity.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 flex items-center"><span className="text-3xl mr-3">🧘‍♀️</span> Stress Management Tips</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Practice deep breathing: Inhale for 4 counts, exhale for 4—do it daily.</li>
              <li>• Get 7-9 hours of sleep; create a relaxing bedtime routine.</li>
              <li>• Connect with friends or family—talking it out helps.</li>
              <li>• Try mindfulness apps for 5 minutes a day to unwind.</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600">Track your progress and celebrate small wins. Your doctor can help customize these for you.</p>
        </div>
      </div>
    </div>
  );
};

export default HealthyLifestyleTips;