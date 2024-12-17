import React from 'react';
import { Clock, MessageCircle, Eye, Target } from 'lucide-react';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Offers = () => {
  const features: FeatureItem[] = [
    {
      icon: <Clock className="w-4 h-4 text-white" />,
      title: "Speed Up Your Assessments",
      description: "Get automatic results in less than 30 minutes."
    },
    {
      icon: <MessageCircle className="w-4 h-4 text-white" />,
      title: "Enhance Client Communication",
      description: "Create comprehensive reports with charts, graphs, and simple explanations using easy-to-understand language."
    },
    {
      icon: <Eye className="w-4 h-4 text-white" />,
      title: "Boost Your Visibility and Confidence",
      description: "Stay at the forefront of science and technology as an industry professional."
    },
    {
      icon: <Target className="w-4 h-4 text-white" />,
      title: "Improve Diagnostic Accuracy",
      description: "Virtual reality technology offers the highest level of ecological validity."
    }
  ];

  return (
    <div className="text-white py-2  px-4">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl font-bold mb-4">
              All you need is a VR headset, a computer, biosensor and a WiFi connection.
            </h1>
            <p className="text-lg">
              With your subscription plan, you'll have access to manuals, guides, demonstration videos, and more.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="/assets/images/onboarding-img.png"
              alt="VR Headset Demo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-start space-y-4 p-6 rounded-2xl bg-blue-500/20 backdrop-blur-sm hover:bg-blue-500/30 transition-all duration-300"
            >
              <div className="p-3 rounded-full bg-blue-500/30">
                {feature.icon}
              </div>
              <h3 className="text-sm font-semibold">
                {feature.title}
              </h3>
              <p className="text-blue-50">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;