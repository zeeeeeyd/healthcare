import React from 'react';
import { Brain, Sparkles, HeartPulse } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Content */}
      <div className="relative z-10 container mx-auto py-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Main heading with gradient effect */}
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Welcome to MindSpace VR, where we're{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              passionate about helping you achieve mental wellness
            </span>{' '}
            through technology
          </h1>

          {/* Description */}
          <p className="text-xs md:text-lg text-gray-200 leading-relaxed mb-12">
          MindSpaceVR is an advanced virtual reality platform
          designed for psychological assessment. It immerses
          users in a range of virtual scenarios where their
          behaviors and responses are analyzed using artificial
          intelligence. By integrating sensor technology, the
          platform captures physiological data to provide deeper
          insights into psychological conditions, facilitating more
          accurate and personalized assessments.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-left hover:bg-white/20 transition-all duration-300">
              <Brain className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                AI-Powered Personalization
              </h3>
              <p className="text-gray-300 text-xs">
                Adaptive experiences that learn and evolve with your needs
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-left hover:bg-white/20 transition-all duration-300">
              <Sparkles className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Immersive Environments
              </h3>
              <p className="text-gray-300 text-xs">
                Calming virtual spaces designed for mental wellbeing
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-left hover:bg-white/20 transition-all duration-300">
              <HeartPulse className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Stress Management
              </h3>
              <p className="text-gray-300 text-xs">
                Real-time tools to help you achieve inner peace
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <button className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300">
              Start Your Wellness Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;