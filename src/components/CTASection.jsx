const CTASection = () => {
  return (
    <div className="relative py-24 bg-gradient-to-br from-purple-600 via-violet-600 to-purple-700 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(at_center,#ffffff10_1px,transparent_1px)] bg-[length:40px_40px]"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        {/* Main Heading */}
        <h2 className="text-5xl font-bold text-white leading-tight mb-6">
          Ready To Transform Your Workflow?
        </h2>

        {/* Sub Heading */}
        <p className="text-xl text-purple-100 mb-4 max-w-2xl mx-auto">
          Join thousands of professionals who are already using DigiTools to work smarter.
        </p>
        <p className="text-purple-200 mb-12">
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <button className="bg-white text-purple-700 font-semibold px-10 py-4 rounded-2xl text-lg hover:bg-purple-50 transition-all hover:scale-105 shadow-lg">
            Explore Products
          </button>
          
          <button className="border-2 border-white text-white font-semibold px-10 py-4 rounded-2xl text-lg hover:bg-white/10 transition-all hover:scale-105">
            View Pricing
          </button>
        </div>

        {/* Trust Line */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-8 py-3 rounded-2xl text-sm text-purple-100">
          <span>14-day free trial</span>
          <span className="w-1 h-1 bg-purple-200 rounded-full"></span>
          <span>No credit card required</span>
          <span className="w-1 h-1 bg-purple-200 rounded-full"></span>
          <span>Cancel anytime</span>
        </div>
      </div>
    </div>
  );
};

export default CTASection;