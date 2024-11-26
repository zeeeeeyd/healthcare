import React from 'react';
import { PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
      <div className="flex flex-col items-center text-center">
        <div className="space-y-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            MindSpaceVR, Psychological Assessment <br />
            <span className="text-gradient bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text">
            through VR and AI
            </span>
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed drop-shadow-md">
          Our tests measure a variety of symptoms associated with
          anxiety disorders, including excessive and persistent worry,
          muscle tension, difficulty concentrating, unexpected panic
          attacks, fear of social situations, obsessive thoughts and
          compulsive behaviors, painful memories, and avoidance of
          trauma-related stimuli in children and adults.
          </p>
          <div className="w-full flex justify-center mt-12">
            <button onClick={()=>{window.location.href = 'https://www.youtube.com/watch?v=RczmGUXtwSc'}} className="bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-3">
              <PlayCircle className="w-6 h-6" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
  );
};

export default Hero;