import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function DashboardPreview() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="dashboard" className="relative py-24 px-6" ref={ref}>
      <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-space font-bold">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Dashboard Preview
            </span>
          </h2>
          <p className="text-xl text-gray-400 font-inter max-w-3xl mx-auto">
            Experience the power of real-time emergency monitoring with our intuitive dashboard interface
          </p>
        </div>

        {/* Dashboard Preview Card */}
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary via-purple-600 to-pink-600 rounded-3xl opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500"></div>
          
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-3 shadow-2xl group-hover:border-primary/50 transition-all duration-500">
            
            {/* Inner Container */}
            <div className="relative bg-[#0B0F19]/80 rounded-xl overflow-hidden border border-white/10">
              
              {/* Dashboard Image */}
              <img 
                src="/src/assets/dashboard-preview.png.png" 
                alt="AURA Dashboard - Real-time Emergency Monitoring Interface" 
                className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                onError={(e) => {
                  // Fallback if image not found
                  e.target.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'aspect-video flex items-center justify-center bg-gradient-to-br from-primary/20 via-purple-600/20 to-pink-600/20';
                  fallback.innerHTML = `
                    <div class="text-center space-y-6 p-12">
                      <div class="text-7xl">📊</div>
                      <div>
                        <p class="text-2xl text-white font-semibold mb-2">Interactive Dashboard</p>
                        <p class="text-gray-400">Real-time monitoring • Network visualization • Emergency logs</p>
                      </div>
                      <div class="flex gap-4 justify-center text-sm text-gray-500">
                        <span>🗺️ City Map</span>
                        <span>🚨 Alert System</span>
                        <span>📈 Analytics</span>
                      </div>
                    </div>
                  `;
                  e.target.parentElement.appendChild(fallback);
                }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/50 rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/50 rounded-br-2xl"></div>
          </div>

          {/* Floating Feature Tags */}
          <div className="absolute -left-4 top-1/4 hidden xl:block">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg shadow-lg font-inter text-sm font-semibold animate-float">
              🗺️ Live City Map
            </div>
          </div>
          <div className="absolute -right-4 top-1/3 hidden xl:block" style={{ animationDelay: '1s' }}>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow-lg font-inter text-sm font-semibold animate-float">
              🚨 Real-time Alerts
            </div>
          </div>
          <div className="absolute -left-4 bottom-1/4 hidden xl:block" style={{ animationDelay: '2s' }}>
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg shadow-lg font-inter text-sm font-semibold animate-float">
              📊 AI Analytics
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="text-center mt-12 space-y-6">
          <p className="text-lg md:text-xl text-gray-300 font-inter max-w-4xl mx-auto leading-relaxed">
            Monitor emergencies, analyze city sensor data, and coordinate response teams in real time. 
            Our intuitive interface provides complete visibility into your city's emergency response system.
          </p>
          
          {/* Feature List */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2 text-gray-400 font-inter">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Interactive Network Map</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 font-inter">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Emergency Detection Logs</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 font-inter">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Sensor Data Visualization</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400 font-inter">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span>Route Optimization</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="http://localhost:5000"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-primary to-purple-600 rounded-xl font-inter font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Live Dashboard
            </a>
            <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-inter font-semibold text-lg hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
              Explore Features
            </button>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
