import React from 'react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for getting started',
      price: '0',
      features: ['Access to 10 free tools', 'Basic templates', 'Community support', '1 project per month'],
      buttonText: 'Get Started Free',
      isPopular: false,
    },
    {
      name: 'Pro',
      description: 'Best for professionals',
      price: '29',
      features: ['Access to all premium tools', 'Unlimited templates', 'Priority support', 'Unlimited projects', 'Cloud sync', 'Advanced analytics'],
      buttonText: 'Start Pro Trial',
      isPopular: true,
    },
    {
      name: 'Enterprise',
      description: 'For teams and businesses',
      price: '99',
      features: ['Everything in Pro', 'Team collaboration', 'Custom integrations', 'Dedicated support', 'SLA guarantee', 'Custom branding'],
      buttonText: 'Contact Sales',
      isPopular: false,
    },
  ];

  // সবার জন্য কমন বেগুনি রঙ
  const brandColor = '#7F27FF'; 

  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ease-in-out flex flex-col 
                /* হোভার এফেক্ট সব কার্ডের জন্য */
                hover:-translate-y-3 hover:shadow-2xl hover:border-[#7F27FF]/50
                /* ডিফল্ট স্টাইল এবং কন্ডিশনাল স্টাইল */
                ${plan.isPopular 
                  ? 'bg-[#7F27FF] text-white border-[#7F27FF] shadow-lg scale-105 z-10' 
                  : 'bg-gray-50 border-gray-200 text-gray-900 hover:bg-white'
                }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Most Popular
                </span>
              )}
              
              <div className="mb-8 text-left">
                  <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                  <p className={`text-sm ${plan.isPopular ? 'text-purple-100 opacity-80' : 'text-gray-500'}`}>{plan.description}</p>
              </div>
              
              <div className="mb-10 text-left">
                <span className="text-5xl font-extrabold">${plan.price}</span>
                <span className={`text-lg ml-1 ${plan.isPopular ? 'text-purple-100' : 'text-gray-600'}`}>/Month</span>
              </div>

              <ul className="space-y-4 mb-10 text-left flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className={`flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full text-xs
                      ${plan.isPopular ? 'bg-white text-[#7F27FF]' : 'bg-[#7F27FF] text-white'}`}>
                      ✓
                    </span>
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 px-6 rounded-xl font-semibold text-base transition-all duration-300
                ${plan.isPopular 
                ? 'bg-white text-[#7F27FF] hover:bg-gray-100 hover:shadow-md' 
                : 'bg-[#7F27FF] text-white hover:bg-[#6b21d9] hover:shadow-md'
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;     