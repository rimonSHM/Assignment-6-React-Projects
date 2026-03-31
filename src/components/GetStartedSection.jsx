// This is the GetStartedSection component for the DigiTools landing page.
import React from 'react';
import { UserPlus, ShoppingBag, Rocket } from 'lucide-react';

const GetStartedSection = () => {
  const steps = [
    {
      number: "01",
      title: "Create Account",
      description: "Sign up for free in seconds. No credit card required to get started.",
      icon: <UserPlus className="w-10 h-10 text-[#7C3AED]" />,
    },
    {
      number: "02",
      title: "Choose Products",
      description: "Browse our catalog and select the tools that fit your needs.",
      icon: <ShoppingBag className="w-10 h-10 text-[#7C3AED]" />,
    },
    {
      number: "03",
      title: "Start Creating",
      description: "Download and start using your premium tools immediately.",
      icon: <Rocket className="w-10 h-10 text-[#7C3AED]" />,
    },
  ];

  return (
    <section className="bg-[#F9FAFC] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 text-lg">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              {/* Number Badge (Top Right) */}
              <div className="absolute top-6 right-6 bg-[#7C3AED] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-purple-200">
                {step.number}
              </div>

              {/* Icon Container */}
              <div className="w-24 h-24 bg-[#F3E8FF] rounded-full flex items-center justify-center mb-8 transition-transform duration-500 group-hover:rotate-[360deg]">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-[#111827] mb-4">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;