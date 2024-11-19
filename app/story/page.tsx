import React from 'react';
import { MapPin, Users, Framer } from 'lucide-react';

const Story = () => {
  return (
    <div className="text-white py-4 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-12">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <MapPin className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold">The Forgotten Frontier</h2>
          </div>
          <p className="text-md leading-relaxed">
            In Algeria, the field of technology in psychology remains largely overlooked and underfunded. Despite the growing need for accessible mental health solutions, the country has yet to fully embrace the transformative potential of virtual reality and AI-powered platforms.
          </p>
          <p className="text-md leading-relaxed">
            Countless individuals, including children and young adults, suffer from a wide range of psychological challenges, from anxiety and depression to trauma and addiction. Yet, the resources and support available to address these issues are often scarce and out of reach for many.
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Users className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl font-bold">A Pressing Need</h2>
          </div>
          <p className="text-md leading-relaxed">
            The people of Algeria deserve access to cutting-edge mental wellness solutions that can empower them to confront their challenges and achieve a greater sense of inner peace and balance. Virtual reality and AI-driven platforms offer the promise of personalized, accessible, and scalable mental health care.
          </p>
          <p className="text-md leading-relaxed">
            By harnessing the power of technology, we can create immersive experiences that reduce stress, alleviate anxiety, and foster a deeper connection with oneself and the world around. It is time to bring this transformative change to the people of Algeria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;