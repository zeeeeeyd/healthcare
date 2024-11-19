import React from 'react';
import { PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Content */}
      <div className="relative z-10 h-full container m-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
            Unlock the Power of VR for <br />
            <span className="text-gradient bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text">
              Mental Wellness
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-200 leading-relaxed drop-shadow-md">
            MindSpace VR's innovative AI-powered platform empowers you to create personalized virtual experiences tailored to your unique needs. Discover a world of calm, relaxation, and emotional well-being with just one click.
          </p>

          {/* CTA Button */}
          <div className="w-full flex justify-center mt-12">
            <button onClick={()=>{window.location.href = 'https://www.youtube.com/watch?v=RczmGUXtwSc'}} className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-3">
              <PlayCircle className="w-6 h-6" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;