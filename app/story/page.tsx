import React from 'react';
import { Glasses, Brain } from 'lucide-react';

const Story = () => {
  return (
    <div className="text-white py-4 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-12">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-4  mb-4">
            <h2 className="text-3xl font-bold">MindSpace VR behind the scene</h2>
          </div>
          <img className='rounded-2xl' src="/assets/images/kidsVR.jpg" alt="Kid VR image" />
          <div className="flex items-center gap-4  mb-4">
            <Glasses className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold">Virtual Reality</h2>
          </div>
          <p className="text-md leading-relaxed">
          This technology creates interactive
          three-demensional environments that mimic real-life
          situations. It allows mental health professionals to
          immerse patients in these controlled settings to observe
          and assess their responses in a safe and managed way.
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <img className='rounded-lg' src="/assets/images/AI.png" alt="" />
          <div className="flex items-center gap-4">
            <Brain className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl font-bold">Artificial Intelligence</h2>
          </div>
          <p className="text-md leading-relaxed">
          the platform uses AI algorithms
          to analyze a wide range of data, including both
          biometric and psychological data. AI helps provide
          accurate diagnoses and prsonalized treatment
          recommendations based on comprehensive analysis of
          various data sources, enabling more effective and
          tailored mental health care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;