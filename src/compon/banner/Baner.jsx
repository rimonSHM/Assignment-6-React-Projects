// This is the Banner component for the DigiTools landing page.

import React from 'react';
import dollerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 md:px-12 lg:px-20 py-16 md:py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Content */}
        <div className="flex-1 text-left">
          {/* Badge/Tag */}
          <div className="inline-flex items-center gap-2 bg-[#F3E8FF] px-4 py-2 rounded-full mb-6 border border-[#E9D5FF]">
            <span className="w-2 h-2 bg-[#7C3AED] rounded-full animate-pulse"></span>
            <p className="text-[#7C3AED] text-sm font-semibold tracking-wide uppercase">
              New: AI-Powered Tools Available
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#111827] leading-[1.1] mb-6">
            Supercharge Your <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#9333EA]">
              Digital Workflow
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-xl mb-10">
            Access premium AI tools, design assets, templates, and productivity 
            software—all in one place. Start creating faster today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white border-none rounded-full px-10 h-14 text-lg font-bold shadow-lg shadow-purple-200 transition-all hover:scale-105 normal-case">
              Explore Products
            </button>
            <button className="btn btn-outline border-[#E5E7EB] hover:bg-gray-50 hover:text-[#7C3AED] rounded-full px-10 h-14 text-lg font-bold flex items-center gap-2 transition-all normal-case">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
              </svg>
              Watch Demo
            </button>
          </div>
        </div>

       
  );
};

export default Banner