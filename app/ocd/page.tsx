import React from 'react';
import { Clock, Users, Languages, FileText, Calendar } from 'lucide-react';

const Ocd: React.FC = () => {
  const information = [
    { title: 'ORIENTED TO', content: 'Psychological Assessment through Virtual Reality', icon: <FileText size={24} /> },
    { title: 'DURATION', content: '15-20 minutes', icon: <Clock size={24} /> },
    { title: 'REPORT', content: 'Immediate; Online correction', icon: <FileText size={24} /> },
    { title: 'NORMATIVE', content: '... people', icon: <Users size={24} /> },
    { title: 'AGE RANGE', content: '16 to 40 years old', icon: <Calendar size={24} /> },
    { title: 'LANGUAGES', content: 'Arabic, English, French', icon: <Languages size={24} /> },
  ];

  return (
    <div className="min-h-screen flex py-8 px-4 text-gray-200">
      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-3xl md:text-4xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-8">
            Obsessive-Compulsive Disorder(OCD)
        </h1>
        <p className="leading-relaxed text-lg text-justify mb-6">
        The test assesses signs of OCD such as time spent on
        compulsive actions, avoidance patterns, decision-
        making time, signs of distress, etc.
        </p>
        <div className="border-t border-gray-600 my-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {information.map(({ title, content, icon }) => (
            <div key={title} className="flex items-start space-x-4 bg-gray-800 bg-opacity-65 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <div className="text-blue-400">{icon}</div>
              <div>
                <h2 className="text-lg font-semibold text-gradient">{title}</h2>
                <p className="text-slate-300 text-sm">{content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ocd;
