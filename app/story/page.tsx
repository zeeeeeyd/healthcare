import React from 'react';
import { Glasses, Brain } from 'lucide-react';

const Story = () => {
  return (
    <div className="text-white py-8 px-4">
      <div className="max-w-5xl mx-auto flex flex-wrap gap-8">
        {/* Virtual Reality Section */}
        <div className="relative flex-1 min-w-[300px]">
          <img
            className="rounded-2xl w-full h-auto"
            src="/assets/images/kidsVR.jpg"
            alt="Kid VR image"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-2xl">
            <Glasses className="w-8 h-8 text-blue-400 mb-2" />
            <h2 className="text-3xl font-bold mb-2">Virtual Reality</h2>
            <p className="text-md leading-relaxed">
              This technology creates interactive three-dimensional environments
              that mimic real-life situations. It allows mental health
              professionals to immerse patients in these controlled settings to
              observe and assess their responses in a safe and managed way.
            </p>
          </div>
        </div>

        {/* Artificial Intelligence Section */}
        <div className="relative flex-1 min-w-[300px]">
          <img
            className="rounded-lg w-full h-full object-cover"
            src="/assets/images/AI.png"
            alt="AI visual"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 bg-gradient-to-t from-black/80 via-black/70 to-transparent rounded-lg">
            <Brain className="w-8 h-8 text-emerald-400 mb-2" />
            <h2 className="text-3xl font-bold mb-2">Artificial Intelligence</h2>
            <p className="text-md leading-relaxed">
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
