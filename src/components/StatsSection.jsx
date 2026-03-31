import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '200+', label: 'Premium Tools' },
    { value: '4.9', label: 'Rating' },
  ];

  return (
    <section className="bg-[#7F27FF] py-12 -mt-1">   {/* -mt-1 দিয়ে gap দূর করা হয়েছে */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 text-white">
          
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="text-center">
                <h2 className="text-6xl md:text-7xl font-bold tracking-tighter mb-2">
                  {stat.value}
                </h2>
                <p className="text-xl font-medium opacity-90">
                  {stat.label}
                </p>
              </div>

              {/* Vertical Divider */}
              {index < stats.length - 1 && (
                <div className="hidden md:block h-16 w-px bg-white/40"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;