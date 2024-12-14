import React from 'react';
import { Glasses, Brain } from 'lucide-react';

const Story = () => {
  return (
    <div className="text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Virtual Reality Section */}
        <div className="relative min-w-[280px]">
          <img
            className="rounded-2xl w-full h-full object-cover"
            src="/assets/images/kidsVR.jpg"
            alt="Kid VR image"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent rounded-2xl">
            <Glasses className="w-8 h-8 text-blue-400 mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Virtual Reality</h2>
            <p className="text-sm md:text-md leading-relaxed">
              This technology creates interactive three-dimensional environments
              that mimic real-life situations. It allows mental health
              professionals to immerse patients in these controlled settings to
              observe and assess their responses in a safe and managed way.
            </p>
          </div>
        </div>

        {/* Artificial Intelligence Section */}
        <div className="relative min-w-[280px]">
          <img
            className="rounded-2xl w-full h-full object-cover"
            src="/assets/images/AI.jpg"
            alt="AI visual"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent rounded-2xl">
            <Brain className="w-8 h-8 text-emerald-400 mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Artificial Intelligence</h2>
            <p className="text-sm md:text-md leading-relaxed">
              The platform uses AI algorithms to analyze a wide range of data,
              including both biometric and psychological data. AI helps provide
              accurate diagnoses and personalized treatment recommendations
              based on comprehensive analysis of various data sources, enabling
              more effective and tailored mental health care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
