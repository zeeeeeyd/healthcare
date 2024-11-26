import React from 'react';
import { Check, Star, Shield, Box } from 'lucide-react';

const Plan = () => {
  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Choose Your Plan</h2>
          <p className="text-xl text-gray-300">Select the perfect plan for your mental wellness journey</p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Specialists Plan */}
          <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/30 hover:border-blue-500 transition-all duration-300">
            {/* Limited Time Offer Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              Limited Time Offer
            </div>

            <div className="flex items-center gap-4 mb-6">
              <Star className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Specialists</h3>
            </div>

            <div className="mb-6">
              <div className="text-3xl font-bold text-white mb-2">
                9000 DA
                <span className="text-lg text-gray-400">/3 months</span>
              </div>
              <div className="text-emerald-400 font-semibold">
                15 days free trial
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-emerald-400" />
                <span>Access to specialized VR therapy sessions</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-emerald-400" />
                <span>Personalized treatment plans</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Shield className="w-5 h-5 text-blue-400" />
                <span>VR headset with returnable security deposit</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Box className="w-5 h-5 text-blue-400" />
                <span>Bio-sensors included with deposit</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
              Get Started
            </button>
          </div>

          {/* Self-Check Plan */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30 hover:border-purple-500 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <Box className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Self-Check</h3>
            </div>

            <div className="mb-6">
              <div className="text-3xl font-bold text-white mb-2">
                100 DA
                <span className="text-lg text-gray-400">/Single Use</span>
              </div>
              <div className="text-emerald-400 font-semibold">
                1 use free trial
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-emerald-400" />
                <span>Single VR wellness session</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-emerald-400" />
                <span>Basic stress assessment</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Check className="w-5 h-5 text-emerald-400" />
                <span>Guided relaxation experience</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">
              Try Now
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center text-gray-400 max-w-2xl mx-auto">
          <p className="text-sm">
            * VR headsets and Bio-sensors are available with a returnable security deposit for Specialists plan members.
            Terms and conditions apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Plan;