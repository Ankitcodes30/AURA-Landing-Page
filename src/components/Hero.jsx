import React from 'react';
import { DASHBOARD_URL } from '../config/constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-inter text-primary">
                🚀 AI-Powered Emergency Response
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-space font-bold leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                AURA
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI Urban Response Assistant
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 font-inter leading-relaxed">
              AI Powered Emergency Monitoring for Smart Cities
            </p>
            
            <p className="text-lg text-gray-400 font-inter leading-relaxed max-w-xl">
              AURA uses advanced machine learning algorithms to detect emergencies in real-time, 
              analyze urban sensor data, and help authorities respond faster—saving lives and 
              protecting communities across smart cities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={DASHBOARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-primary to-purple-600 rounded-xl font-inter font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105 flex items-center justify-center gap-2 btn-glow relative overflow-hidden"
              >
                View Live Dashboard
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <button aria-label="Report Emergency" className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-inter font-semibold text-lg hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 hover:scale-105">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Report Emergency
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-space font-bold text-primary">24/7</div>
                <div className="text-sm text-gray-400 font-inter">Monitoring</div>
              </div>
              <div>
                <div className="text-3xl font-space font-bold text-secondary">AI</div>
                <div className="text-sm text-gray-400 font-inter">Detection</div>
              </div>
              <div>
                <div className="text-3xl font-space font-bold text-purple-500">Real-Time</div>
                <div className="text-sm text-gray-400 font-inter">Alerts</div>
              </div>
            </div>
          </div>
          
          {/* Right - Floating Dashboard Preview */}
          <div className="relative lg:block hidden">
            <div className="relative animate-float">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-purple-600/30 blur-3xl rounded-3xl"></div>
              
              {/* Dashboard Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-2xl">
                <div className="bg-[#0B0F19]/50 rounded-xl overflow-hidden">
                  <img 
                    src="/src/assets/dashboard-preview.png" 
                    alt="AURA Dashboard Preview" 
                    className="w-full h-auto"
                    onError={(e) => {
                      // Fallback if image not found
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="aspect-video flex items-center justify-center bg-gradient-to-br from-primary/20 to-purple-600/20">
                          <div class="text-center space-y-4 p-8">
                            <div class="text-6xl">📊</div>
                            <p class="text-xl text-gray-300">Dashboard Preview</p>
                            <p class="text-sm text-gray-500">Real-time monitoring interface</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Floating Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
