import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function DashboardPage() {
  const [incidents, setIncidents] = useState([
    { id: 1, type: 'Fire', location: 'Sector 4 (Industrial)', severity: 'High', status: 'Dispatched', time: '18:24' },
    { id: 2, type: 'Accident', location: 'Sector 2 (Downtown)', severity: 'Medium', status: 'En Route', time: '18:28' },
    { id: 3, type: 'Medical', location: 'Sector 5 (Residential)', severity: 'Low', status: 'Resolved', time: '18:15' },
    { id: 4, type: 'Flood', location: 'Sector 1 (Waterfront)', severity: 'High', status: 'Monitoring', time: '18:02' }
  ]);

  const [formData, setFormData] = useState({
    type: 'Fire',
    location: 'Sector 3',
    severity: 'Medium'
  });

  const [stats, setStats] = useState({
    active: 3,
    responseTime: '4.2m',
    drones: '12/15',
    resolved: 18
  });

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const logsEndRef = useRef(null);

  // Auto-scrolling logs
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [incidents]);

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Periodic simulated events to make the dashboard feel alive
  useEffect(() => {
    const mockEvents = [
      { type: 'Medical', location: 'Sector 6 (Suburbs)', severity: 'Low', desc: 'Medical emergency reported' },
      { type: 'Accident', location: 'Sector 3 (Business)', severity: 'Medium', desc: 'Traffic incident detected' },
      { type: 'Fire', location: 'Sector 4 (Industrial)', severity: 'High', desc: 'Minor chemical spill flare-up' }
    ];

    const interval = setInterval(() => {
      const randomEvent = mockEvents[Math.floor(Math.random() * mockEvents.length)];
      const now = new Date();
      const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
      
      const newIncident = {
        id: Date.now(),
        type: randomEvent.type,
        location: randomEvent.location,
        severity: randomEvent.severity,
        status: randomEvent.severity === 'High' ? 'Dispatched' : 'En Route',
        time: timeStr
      };

      setIncidents(prev => [...prev, newIncident]);
      setStats(prev => ({
        ...prev,
        active: prev.active + 1
      }));
    }, 25000); // add a new event every 25 seconds

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    
    const newIncident = {
      id: Date.now(),
      type: formData.type,
      location: `${formData.location} (Reported)`,
      severity: formData.severity,
      status: 'Dispatched',
      time: timeStr
    };

    setIncidents(prev => [...prev, newIncident]);
    setStats(prev => ({
      ...prev,
      active: prev.active + 1,
      resolved: prev.resolved + 1 // mock counter adjustment
    }));

    // Reset Form
    setFormData({
      type: 'Fire',
      location: 'Sector 3',
      severity: 'Medium'
    });
  };

  const resolveIncident = (id) => {
    setIncidents(prev => prev.map(inc => {
      if (inc.id === id && inc.status !== 'Resolved') {
        setStats(s => ({
          ...s,
          active: Math.max(0, s.active - 1),
          resolved: s.resolved + 1
        }));
        return { ...inc, status: 'Resolved' };
      }
      return inc;
    }));
  };

  return (
    <div className="relative min-h-screen bg-[#0B0F19] text-white p-6 overflow-x-hidden font-inter">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      {/* Decorative Blur Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-6">
        
        {/* Dashboard Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md gap-4">
          <div className="flex items-center space-x-4">
            <Link 
              to="/"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all font-semibold text-sm group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
            <div>
              <h1 className="text-2xl font-space font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                AURA Control Console
              </h1>
              <p className="text-xs text-gray-400 font-mono">
                AI URBAN RESPONSE ASSISTANT // LIVE OPERATION ROOM
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-mono text-gray-400">CURRENT TIME</p>
              <p className="text-lg font-mono font-bold text-primary">{currentTime}</p>
            </div>
            
            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-4 py-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-semibold text-sm">System: Active</span>
            </div>
          </div>
        </header>

        {/* Quick Stats Grid */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm relative overflow-hidden group hover:border-red-500/30 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-bl-full pointer-events-none"></div>
            <p className="text-sm text-gray-400 font-medium">Active Incidents</p>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-space font-bold text-red-500">{stats.active}</span>
              <span className="text-xs text-red-400/80 animate-pulse font-semibold">🚨 Live</span>
            </div>
            <p className="text-xs text-gray-500 mt-2 font-mono">Requiring immediate action</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm relative overflow-hidden group hover:border-emerald-500/30 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none"></div>
            <p className="text-sm text-gray-400 font-medium">Avg Response Time</p>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-space font-bold text-emerald-400">{stats.responseTime}</span>
              <span className="text-xs text-emerald-400/80 font-semibold">✓ Optimised</span>
            </div>
            <p className="text-xs text-gray-500 mt-2 font-mono">-12% from previous week</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm relative overflow-hidden group hover:border-primary/30 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full pointer-events-none"></div>
            <p className="text-sm text-gray-400 font-medium">Active Responder Drones</p>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-space font-bold text-primary">{stats.drones}</span>
              <span className="text-xs text-primary/80 font-semibold">In Operation</span>
            </div>
            <p className="text-xs text-gray-500 mt-2 font-mono">Drones on active dispatch</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm relative overflow-hidden group hover:border-purple-500/30 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-bl-full pointer-events-none"></div>
            <p className="text-sm text-gray-400 font-medium">Resolved Today</p>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-space font-bold text-purple-400">{stats.resolved}</span>
              <span className="text-xs text-purple-400/80 font-semibold">+4 last hour</span>
            </div>
            <p className="text-xs text-gray-500 mt-2 font-mono">Successfully cleared</p>
          </div>
        </section>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Left Column - Report Emergency & Logs */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Report Form Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h2 className="text-lg font-space font-bold text-white mb-4 flex items-center gap-2">
                <span>📝</span> Report Emergency Incident
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 font-mono mb-2 uppercase">
                    Emergency Type
                  </label>
                  <select 
                    name="type" 
                    value={formData.type} 
                    onChange={handleInputChange}
                    className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors text-sm"
                  >
                    <option value="Fire">🔥 Fire Outbreak</option>
                    <option value="Accident">🚗 Road Accident</option>
                    <option value="Flood">🌊 Flooding Alert</option>
                    <option value="Medical">🚑 Medical Emergency</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 font-mono mb-2 uppercase">
                    Incident Location
                  </label>
                  <select 
                    name="location" 
                    value={formData.location} 
                    onChange={handleInputChange}
                    className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors text-sm"
                  >
                    <option value="Sector 1 (Waterfront)">Sector 1 (Waterfront)</option>
                    <option value="Sector 2 (Downtown)">Sector 2 (Downtown)</option>
                    <option value="Sector 3 (Business Dist.)">Sector 3 (Business District)</option>
                    <option value="Sector 4 (Industrial)">Sector 4 (Industrial Sector)</option>
                    <option value="Sector 5 (Residential)">Sector 5 (Residential)</option>
                    <option value="Sector 6 (Suburbs)">Sector 6 (Suburbs)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 font-mono mb-2 uppercase">
                    Severity Tier
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Low', 'Medium', 'High'].map(level => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, severity: level }))}
                        className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                          formData.severity === level 
                            ? level === 'High' ? 'bg-red-500/20 border-red-500 text-red-400'
                              : level === 'Medium' ? 'bg-yellow-500/20 border-yellow-500 text-yellow-400'
                              : 'bg-green-500/20 border-green-500 text-green-400'
                            : 'bg-white/5 border-white/10 hover:bg-white/10 text-gray-400'
                        }`}
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3 bg-gradient-to-r from-primary to-purple-600 rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-[1.02]"
                >
                  Dispatch AURA System
                </button>
              </form>
            </div>

            {/* Live activity log */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h2 className="text-lg font-space font-bold text-white mb-4 flex items-center justify-between">
                <span className="flex items-center gap-2">📟 Action Dispatch Logs</span>
                <span className="text-[10px] font-mono text-gray-500 animate-pulse">● FEED LOGGING ACTIVE</span>
              </h2>
              
              <div className="h-56 overflow-y-auto pr-2 space-y-3 scrollbar-thin scrollbar-thumb-white/10 scroll-smooth">
                {incidents.slice().reverse().map((inc, i) => (
                  <div key={inc.id} className="text-xs font-mono p-3 bg-[#0B0F19]/50 border border-white/5 rounded-lg flex justify-between items-start">
                    <div className="space-y-1">
                      <p className="font-semibold text-gray-300">
                        [{inc.time}] {inc.type === 'Fire' ? '🔥' : inc.type === 'Accident' ? '🚗' : inc.type === 'Flood' ? '🌊' : '🚑'} {inc.type} in {inc.location.split(' ')[0]}
                      </p>
                      <p className="text-[10px] text-gray-500">
                        SEVERITY: <span className={inc.severity === 'High' ? 'text-red-400' : inc.severity === 'Medium' ? 'text-yellow-400' : 'text-green-400'}>{inc.severity}</span>
                      </p>
                    </div>
                    <div className="text-right flex flex-col items-end gap-1">
                      <span className={`px-2 py-0.5 rounded text-[9px] font-semibold ${
                        inc.status === 'Resolved' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 
                        inc.status === 'En Route' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' : 
                        'bg-red-500/10 text-red-400 border border-red-500/20 animate-pulse'
                      }`}>
                        {inc.status}
                      </span>
                      {inc.status !== 'Resolved' && (
                        <button 
                          onClick={() => resolveIncident(inc.id)}
                          className="text-[9px] text-primary hover:text-white transition-colors"
                        >
                          Resolve
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={logsEndRef} />
              </div>
            </div>

          </div>

          {/* Right Column - Map & Incidents List */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Simulated Live City Map Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-space font-bold text-white flex items-center gap-2">
                  <span>🗺️</span> Real-time Network Mapping
                </h2>
                <div className="flex gap-4 text-xs font-mono text-gray-400">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-primary inline-block"></span> Drone Hubs</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping inline-block"></span> Active Incidents</span>
                </div>
              </div>

              {/* Graphic city network grid */}
              <div className="relative aspect-[16/9] w-full bg-[#070A11] border border-white/5 rounded-xl overflow-hidden flex items-center justify-center">
                
                {/* City grid mesh */}
                <svg className="absolute inset-0 w-full h-full text-white/5" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* Outer Sector Boundaries */}
                  <line x1="33%" y1="0" x2="33%" y2="100%" stroke="rgba(255,255,255,0.08)" strokeDasharray="5,5" />
                  <line x1="66%" y1="0" x2="66%" y2="100%" stroke="rgba(255,255,255,0.08)" strokeDasharray="5,5" />
                  <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(255,255,255,0.08)" strokeDasharray="5,5" />

                  {/* Connected Nodes Path Simulation */}
                  <path d="M100 100 L250 120 L400 150 L500 80 L680 180" fill="none" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="2" />
                  <path d="M120 280 L300 220 L400 150 L550 300 L720 250" fill="none" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="2" />
                  <path d="M300 220 L250 120 M550 300 L680 180" fill="none" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="1.5" />
                </svg>

                {/* Drone Hubs (Anchors) */}
                <div className="absolute top-[20%] left-[15%] w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_#6366f1]">
                  <span className="absolute -top-6 -left-4 text-[9px] font-mono text-gray-500">HUB A</span>
                </div>
                <div className="absolute top-[30%] left-[55%] w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_#6366f1]">
                  <span className="absolute -top-6 -left-4 text-[9px] font-mono text-gray-500">HUB B</span>
                </div>
                <div className="absolute bottom-[25%] left-[40%] w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_#6366f1]">
                  <span className="absolute -top-6 -left-4 text-[9px] font-mono text-gray-500">HUB C</span>
                </div>
                <div className="absolute bottom-[35%] right-[10%] w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_#6366f1]">
                  <span className="absolute -top-6 -left-4 text-[9px] font-mono text-gray-500">HUB D</span>
                </div>

                {/* Sector Labels */}
                <span className="absolute top-2 left-2 text-[10px] font-mono text-gray-600 font-semibold">SECTOR 1</span>
                <span className="absolute top-2 left-1/3 ml-2 text-[10px] font-mono text-gray-600 font-semibold">SECTOR 2</span>
                <span className="absolute top-2 left-2/3 ml-2 text-[10px] font-mono text-gray-600 font-semibold">SECTOR 3</span>
                <span className="absolute bottom-2 left-2 text-[10px] font-mono text-gray-600 font-semibold">SECTOR 4</span>
                <span className="absolute bottom-2 left-1/3 ml-2 text-[10px] font-mono text-gray-600 font-semibold">SECTOR 5</span>
                <span className="absolute bottom-2 left-2/3 ml-2 text-[10px] font-mono text-gray-600 font-semibold">SECTOR 6</span>

                {/* Simulated Drone movement */}
                <div className="absolute w-2 h-2 bg-sky-400 rounded-full animate-pulse shadow-md transition-all duration-[3000ms] ease-in-out" style={{
                  animation: 'droneMove1 12s linear infinite',
                  boxShadow: '0 0 8px #38bdf8'
                }}></div>

                <div className="absolute w-2 h-2 bg-sky-400 rounded-full animate-pulse shadow-md transition-all duration-[5000ms] ease-in-out" style={{
                  animation: 'droneMove2 18s linear infinite',
                  boxShadow: '0 0 8px #38bdf8',
                  animationDelay: '3s'
                }}></div>

                {/* Dynamic Incident Markers (Rendered live from state!) */}
                {incidents.filter(inc => inc.status !== 'Resolved').map((inc) => {
                  // Generate deterministic mock coords based on Sector number
                  let top = '40%';
                  let left = '50%';
                  if (inc.location.includes('Sector 1')) { top = '25%'; left = '20%'; }
                  else if (inc.location.includes('Sector 2')) { top = '30%'; left = '45%'; }
                  else if (inc.location.includes('Sector 3')) { top = '15%'; left = '80%'; }
                  else if (inc.location.includes('Sector 4')) { top = '70%'; left = '22%'; }
                  else if (inc.location.includes('Sector 5')) { top = '65%'; left = '52%'; }
                  else if (inc.location.includes('Sector 6')) { top = '80%'; left = '75%'; }

                  return (
                    <div 
                      key={inc.id} 
                      className="absolute flex items-center justify-center" 
                      style={{ top, left, transform: 'translate(-50%, -50%)' }}
                    >
                      <span className="absolute flex h-6 w-6">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-6 w-6 bg-red-500/20 border border-red-500 items-center justify-center text-[10px]">
                          {inc.type === 'Fire' ? '🔥' : inc.type === 'Accident' ? '🚗' : inc.type === 'Flood' ? '🌊' : '🚑'}
                        </span>
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Map instructions / information */}
              <div className="mt-4 flex flex-col md:flex-row justify-between items-center gap-3 bg-white/5 border border-white/5 rounded-xl p-3 text-xs font-mono text-gray-400">
                <span className="text-left">⚡ Drone Hub latency is optimal (12ms). Optimized response paths active.</span>
                <span className="text-primary hover:underline cursor-pointer">View Network Graph Topology →</span>
              </div>
            </div>

            {/* Current Active Incidents List Table */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h2 className="text-lg font-space font-bold text-white mb-4">
                Active Incidents Overview
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-xs font-semibold text-gray-400 font-mono uppercase">
                      <th className="pb-3">Type</th>
                      <th className="pb-3">Location</th>
                      <th className="pb-3">Severity</th>
                      <th className="pb-3">Response Status</th>
                      <th className="pb-3">Time</th>
                      <th className="pb-3 text-right">Dispatch Control</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {incidents.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="py-6 text-center text-gray-500 font-mono">
                          No active incidents reported. Smart city is operating smoothly.
                        </td>
                      </tr>
                    ) : (
                      incidents.map((inc) => (
                        <tr key={inc.id} className="group hover:bg-white/5 transition-colors">
                          <td className="py-4 font-semibold flex items-center gap-2">
                            <span>{inc.type === 'Fire' ? '🔥' : inc.type === 'Accident' ? '🚗' : inc.type === 'Flood' ? '🌊' : '🚑'}</span>
                            <span>{inc.type}</span>
                          </td>
                          <td className="py-4 text-gray-300 font-mono text-xs">{inc.location}</td>
                          <td className="py-4">
                            <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                              inc.severity === 'High' ? 'bg-red-500/10 text-red-400' :
                              inc.severity === 'Medium' ? 'bg-yellow-500/10 text-yellow-400' :
                              'bg-green-500/10 text-green-400'
                            }`}>
                              {inc.severity}
                            </span>
                          </td>
                          <td className="py-4">
                            <div className="flex items-center gap-2">
                              {inc.status === 'Dispatched' && <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>}
                              {inc.status === 'En Route' && <span className="w-2 h-2 rounded-full bg-yellow-500"></span>}
                              {inc.status === 'Resolved' && <span className="w-2 h-2 rounded-full bg-green-500"></span>}
                              <span className="text-xs text-gray-300 font-mono">{inc.status}</span>
                            </div>
                          </td>
                          <td className="py-4 text-gray-400 font-mono text-xs">{inc.time}</td>
                          <td className="py-4 text-right">
                            {inc.status !== 'Resolved' ? (
                              <button 
                                onClick={() => resolveIncident(inc.id)}
                                className="px-3 py-1.5 bg-green-500/10 hover:bg-green-500 text-green-400 hover:text-white border border-green-500/20 hover:border-transparent rounded-lg text-xs font-semibold transition-all"
                              >
                                Mark Resolved
                              </button>
                            ) : (
                              <span className="text-xs text-gray-500 font-mono">Completed</span>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Styled Animations for Drone movement */}
      <style jsx>{`
        @keyframes droneMove1 {
          0% {
            top: 20%;
            left: 15%;
          }
          25% {
            top: 30%;
            left: 55%;
          }
          50% {
            top: 65%;
            left: 52%;
          }
          75% {
            top: 80%;
            left: 75%;
          }
          100% {
            top: 20%;
            left: 15%;
          }
        }
        @keyframes droneMove2 {
          0% {
            top: 80%;
            left: 75%;
          }
          33% {
            top: 30%;
            left: 55%;
          }
          66% {
            top: 25%;
            left: 20%;
          }
          100% {
            top: 80%;
            left: 75%;
          }
        }
      `}</style>
    </div>
  );
}
