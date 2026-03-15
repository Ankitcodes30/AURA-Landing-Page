import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import DashboardPreview from './components/DashboardPreview';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0B0F19] text-white overflow-hidden">
      <Navbar />
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Gradient Blob 1 - Top Left */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] animate-pulse"></div>
      
      {/* Gradient Blob 2 - Top Right */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Gradient Blob 3 - Bottom Center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-secondary/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Radial Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-full blur-[100px]"></div>
      
      {/* Content Container */}
      <div className="relative z-10">
        <Hero />
        <Features />
        <HowItWorks />
        <DashboardPreview />
        <TechStack />
        <Footer />
      </div>
      
      {/* Grid Pattern Styles */}
      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }
        
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </div>
  );
}
