import React from 'react';
import { GITHUB_URL } from '../config/constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function TechStack() {
  const [ref, isVisible] = useScrollAnimation();

  const technologies = [
    {
      name: 'React',
      icon: '⚛️',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Node.js',
      icon: '🟢',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      name: 'Machine Learning',
      icon: '🤖',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Map APIs',
      icon: '🗺️',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      name: 'Tailwind CSS',
      icon: '🎨',
      gradient: 'from-sky-500 to-cyan-500'
    },
    {
      name: 'Vercel',
      icon: '▲',
      gradient: 'from-gray-700 to-gray-900'
    },
    {
      name: 'Python Flask',
      icon: '🐍',
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      name: 'NetworkX',
      icon: '🔗',
      gradient: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <section className="relative py-24 px-6" ref={ref}>
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Technology Stack Section */}
        <div className="mb-20">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-space font-bold">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Built With Modern Technology
              </span>
            </h2>
            <p className="text-xl text-gray-400 font-inter max-w-2xl mx-auto">
              Powered by cutting-edge technologies for reliability, scalability, and performance
            </p>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`group relative px-6 py-3 bg-gradient-to-r ${tech.gradient} rounded-full font-inter font-semibold text-white shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer`}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative flex items-center gap-2">
                  <span className="text-lg">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub CTA Section */}
        <div className="relative">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl"></div>
          
          {/* Card */}
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-12 text-center">
            
            {/* GitHub Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 border border-white/20">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Content */}
            <h3 className="text-3xl font-space font-bold mb-4">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Open Source Project
              </span>
            </h3>
            
            <p className="text-lg text-gray-400 font-inter mb-8 max-w-2xl mx-auto">
              AURA is open source and available on GitHub. Explore the code, contribute to the project, 
              or deploy your own instance for your smart city.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-xl font-inter font-semibold text-lg hover:shadow-2xl hover:shadow-white/20 transition-all hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View Source Code on GitHub
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <button className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-inter font-semibold text-lg hover:bg-white/10 hover:border-white/20 transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                Star on GitHub
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl font-space font-bold text-primary mb-1">Open Source</div>
                <div className="text-sm text-gray-400 font-inter">MIT License</div>
              </div>
              <div>
                <div className="text-2xl font-space font-bold text-purple-500 mb-1">Active</div>
                <div className="text-sm text-gray-400 font-inter">Development</div>
              </div>
              <div>
                <div className="text-2xl font-space font-bold text-green-500 mb-1">Community</div>
                <div className="text-sm text-gray-400 font-inter">Driven</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
