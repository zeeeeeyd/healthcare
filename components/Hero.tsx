import React from 'react';
import { PlayCircle, CheckCircle, Clock, Globe, Users, DollarSign, BarChart } from 'lucide-react';

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-16">
      {/* Hero Content */}
      <div className="space-y-6">
        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
          MindSpaceVR, Psychological Assessment <br />
          <span className="text-gradient bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text">
            through VR and AI
          </span>
        </h1>
        <p className="text-md text-gray-200 leading-relaxed drop-shadow-md">
          Our tests measure a variety of symptoms associated with
          anxiety disorders, including excessive and persistent worry,
          muscle tension, difficulty concentrating, unexpected panic
          attacks, fear of social situations, obsessive thoughts and
          compulsive behaviors, painful memories, and avoidance of
          trauma-related stimuli in adults.
        </p>
        <div className="w-full flex justify-center mt-12">
          <button
            onClick={() => {
              window.location.href = 'https://www.youtube.com/watch?v=RczmGUXtwSc';
            }}
            className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-4 rounded-full text-md font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-3"
          >
            <PlayCircle className="w-6 h-6" />
            Watch Demo
          </button>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="max-w-3xl text-center space-y-8">
        <h2 className="text-2xl font-bold text-white drop-shadow-lg">
          Start working with MindSpaceVR and discover all its Advantages!
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Advantage Items */}
          <div className="flex flex-col items-center gap-4">
            <CheckCircle className="w-7 h-7 text-emerald-400" />
            <p className="text-md text-gray-300">Accurate and Rapid Diagnosis</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Clock className="w-7 h-7 text-blue-400" />
            <p className="text-md text-gray-300">Saving Time and Resources</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Globe className="w-7 h-7 text-emerald-400" />
            <p className="text-md text-gray-300">Accessibility and Flexibility</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <CheckCircle className="w-7 h-7 text-blue-400" />
            <p className="text-md text-gray-300">Facilitating Follow-Up</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Users className="w-7 h-7 text-blue-400" />
            <p className="text-md text-gray-300">Reaching More Patients</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <DollarSign className="w-7 h-7 text-emerald-400" />
            <p className="text-md text-gray-300">Premium pricing plans</p>
          </div>
          {/* <div className="flex flex-col items-center gap-4">
            <Globe className="w-7 h-7 text-blue-400" />
            <p className="text-md text-gray-300">Ability to Use 3 Languages for Evaluations and Reports</p>
          </div> */}
          <div className="flex flex-col items-center gap-4">
            <BarChart className="w-7 h-7 text-blue-400" />
            <p className="text-md text-gray-300">Performance and Improvement Studies</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <CheckCircle className="w-7 h-7 text-emerald-400" />
            <p className="text-md text-gray-300">Online appointment booking</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
