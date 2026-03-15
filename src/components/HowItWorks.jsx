import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function HowItWorks() {
  const [ref, isVisible] = useScrollAnimation();

  const steps = [
    {
      number: '01',
      title: 'AI Monitors Urban Signals',
      description: 'Sensors across the city continuously collect data on temperature, smoke levels, water levels, traffic density, and sound patterns. Our AI system processes this data in real-time.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      number: '02',
      title: 'System Detects Emergencies',
      description: 'Machine learning models analyze sensor data in real-time to identify potential fires, accidents, or floods with high confidence scores. Pattern recognition ensures accurate detection.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      number: '03',
      title: 'Alerts Sent to Authorities',
      description: 'Emergency services receive instant alerts with optimal routes calculated using advanced pathfinding algorithms, ensuring the fastest possible response time to save lives.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="how-it-works" className="relative py-24 px-6" ref={ref}>
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-space font-bold">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-inter max-w-2xl mx-auto">
            Three simple steps to revolutionize emergency response in your city
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-30"></div>
          <div className="absolute top-24 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 animate-progress"></div>
          
          <div className="grid grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group">
                  
                  {/* Number Badge */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white font-space font-bold text-xl shadow-lg group-hover:scale-110 transition-transform border-4 border-[#0B0F19]`}>
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="mt-8 mb-6 flex justify-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-space font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 font-inter leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Arrow Connector */}
                {index < steps.length - 1 && (
                  <div className="absolute top-20 -right-4 text-4xl text-primary animate-pulse">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile/Tablet */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Vertical Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-24 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 opacity-30"></div>
              )}
              
              <div className="flex gap-6">
                {/* Number Badge */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white font-space font-bold text-xl shadow-lg border-4 border-[#0B0F19]`}>
                    {step.number}
                  </div>
                </div>
                
                {/* Content Card */}
                <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                  <div className={`w-12 h-12 bg-gradient-to-r ${step.gradient} rounded-lg flex items-center justify-center text-white shadow-lg mb-4`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-space font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 font-inter leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-space font-bold text-blue-400 mb-2">
              &lt;5 sec
            </div>
            <div className="text-gray-400 font-inter">Detection Time</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-space font-bold text-purple-400 mb-2">
              95%+
            </div>
            <div className="text-gray-400 font-inter">Accuracy Rate</div>
          </div>
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-space font-bold text-green-400 mb-2">
              24/7
            </div>
            <div className="text-gray-400 font-inter">Active Monitoring</div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        
        .animate-progress {
          animation: progress 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
