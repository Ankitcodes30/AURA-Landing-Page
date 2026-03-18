import React from 'react';
import { DASHBOARD_URL } from '../config/constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Features() {
  const [ref, isVisible] = useScrollAnimation();

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: 'from-yellow-500 to-orange-500',
      title: 'AI Emergency Detection',
      description: 'Advanced machine learning algorithms automatically detect fires, accidents, and floods in real-time with high accuracy.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500',
      title: 'Real-Time City Monitoring',
      description: 'Continuous 24/7 monitoring of sensors across the entire urban network for comprehensive city surveillance.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-500',
      title: 'Interactive City Network Map',
      description: 'Visual representation of city infrastructure, emergency routes, and real-time status of all connected nodes.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-green-500 to-emerald-500',
      title: 'Manual Emergency Reporting',
      description: 'Citizens and authorities can instantly report emergencies through an intuitive interface for immediate response.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      gradient: 'from-red-500 to-pink-500',
      title: 'Smart Alert System',
      description: 'Intelligent routing and automated dispatch of emergency services with priority-based alert management.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'from-indigo-500 to-purple-500',
      title: 'Fast Response Optimization',
      description: 'Advanced pathfinding algorithms calculate optimal routes ensuring the quickest emergency response times.'
    }
  ];

  return (
    <section id="features" className="relative py-24 px-6" ref={ref}>
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-space font-bold">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-inter max-w-2xl mx-auto">
            Comprehensive AI-powered tools designed to revolutionize urban emergency response
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
            >
              {/* Gradient Glow on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 blur-xl`}></div>
              
              {/* Content */}
              <div className="relative space-y-4">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-space font-semibold text-white">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 font-inter leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 font-inter mb-6">
            Ready to transform your city's emergency response?
          </p>
          <a 
            href={DASHBOARD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-primary to-purple-600 rounded-xl font-inter font-semibold hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105 inline-block text-white no-underline"
          >
            Explore All Features
          </a>
        </div>
      </div>
    </section>
  );
}
