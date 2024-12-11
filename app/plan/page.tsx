import React from 'react';
import { Check, Star, Shield, Box } from 'lucide-react';

const Plan = () => {
  const features = [
    "Unlimited access to the MindSpaceVR",
    "Generalized Anxiety Disorder (GAD) test",
    "Panic Disorder test",
    "Social Anxiety Disorder test",
    "Specific Phobias test",
    "Post-Traumatic Stress Disorder (PTSD) test",
    "Obsessive-Compulsive Disorder (OCD) test",
    "Analytics of AI",
    "Standard technical support with email and dedicated phone line",
  ];

  const plans = [
    {
      title: "Specialists - Academic Researchers",
      price: "3000 DA",
      duration: "20 uses/month",
      trial: "15 days free trial",
      additional: ["Unlimited uses"],
    },
    {
      title: "Specialists - Unlimited Plan",
      price: "3500 DA",
      duration: "Unlimited uses/month",
      trial: "15 days free trial",
      additional: ["Unlimited uses"],
    },
    {
      title: "Specialists - Annual Plan",
      price: "36000 DA",
      duration: "Unlimited uses annually",
      trial: "15 days free trial",
      additional: [
        "Online appointment booking",
        "Unlimited uses",
        "9000 DA trimonthly plan available",
      ],
    },
  ];

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
          <p className="text-xl text-gray-300">
            Select the perfect plan for your mental wellness journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 hover:border-blue-500 transition-all duration-300"
            >
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                {index === 0 ? "Most Popular" : "Best Value"}
              </div>
              <div className="flex items-center gap-4 mb-6">
                <Star className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">{plan.title}</h3>
              </div>
              <div className="mb-6">
                <div className="text-3xl font-bold text-white mb-2">
                  {plan.price}
                  <span className="text-lg text-gray-400">/{plan.duration}</span>
                </div>
                <div className="text-emerald-400 font-semibold">{plan.trial}</div>
              </div>
              <div className="space-y-4 mb-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span>{feature}</span>
                  </div>
                ))}
                {plan.additional.map((extra, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span>{extra}</span>
                  </div>
                ))}
              </div>
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
                Choose Plan
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-400 max-w-2xl mx-auto">
          <p className="text-sm">
            * VR headsets and Bio-sensors are available with a returnable security deposit
            for Specialists plan members. Terms and conditions apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Plan;
