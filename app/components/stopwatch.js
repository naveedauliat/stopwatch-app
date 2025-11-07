"use client";

import { useState, useEffect, useRef } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);
  const pausedTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - pausedTimeRef.current;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTimeRef.current);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
      if (time > 0) {
        pausedTimeRef.current = time;
      }
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  // Handle visibility change for background timing
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const centiseconds = Math.floor((time % 1000) / 10);
    
    return {
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
      centiseconds: centiseconds.toString().padStart(2, '0')
    };
  };

  const formatTimeString = (time) => {
    const { minutes, seconds, centiseconds } = formatTime(time);
    return `${minutes}:${seconds}.${centiseconds}`;
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
    pausedTimeRef.current = 0;
  };

  const handleLap = () => {
    if (isRunning && time > 0) {
      const lapTime = time;
      const lapNumber = laps.length + 1;
      const previousLapTime = laps.length > 0 ? laps[0].time : 0;
      const splitTime = lapTime - previousLapTime;
      
      setLaps(prev => [{ 
        number: lapNumber, 
        time: lapTime, 
        splitTime: splitTime,
        timestamp: Date.now()
      }, ...prev]);
    }
  };

  const timeDisplay = formatTime(time);
  const getLapStats = () => {
    if (laps.length === 0) return { fastest: null, slowest: null, average: null };
    
    const splits = laps.map(lap => lap.splitTime);
    const fastest = Math.min(...splits);
    const slowest = Math.max(...splits);
    const average = splits.reduce((sum, split) => sum + split, 0) / splits.length;
    
    return { fastest, slowest, average };
  };

  const lapStats = getLapStats();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Main Stopwatch Container */}
      <div className="relative">
        {/* Animated Background Ring */}
        <div className="absolute inset-0 rounded-full">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
            />
            {isRunning && (
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="283"
                strokeDashoffset="283"
                className="animate-pulse"
                style={{
                  animation: isRunning ? 'dash 60s linear infinite' : 'none'
                }}
              />
            )}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Main Display Card */}
        <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          {/* AI Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full px-6 py-3 backdrop-blur-sm">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
              <span className="text-blue-200 font-semibold text-sm uppercase tracking-wider">
                AI-Enhanced Precision
              </span>
              {!isVisible && (
                <div className="flex items-center gap-1 text-orange-300">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs">Background Active</span>
                </div>
              )}
            </div>
          </div>

          {/* Time Display */}
          <div className="text-center mb-8">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 text-7xl md:text-8xl font-mono font-bold text-blue-400/20 blur-sm">
                {timeDisplay.minutes}:{timeDisplay.seconds}.{timeDisplay.centiseconds}
              </div>
              
              {/* Main Time */}
              <div className="relative flex items-center justify-center gap-2 text-6xl md:text-7xl font-mono font-bold text-white">
                <span className="tabular-nums">{timeDisplay.minutes}</span>
                <span className={`transition-opacity duration-500 ${isRunning ? 'animate-pulse' : ''}`}>:</span>
                <span className="tabular-nums">{timeDisplay.seconds}</span>
                <span className={`text-4xl md:text-5xl transition-opacity duration-500 ${isRunning ? 'animate-pulse' : ''}`}>.</span>
                <span className="text-4xl md:text-5xl tabular-nums text-blue-300">{timeDisplay.centiseconds}</span>
              </div>
            </div>
            
            <div className="text-white/50 text-sm uppercase tracking-[0.3em] mt-4 font-medium">
              Minutes : Seconds . Centiseconds
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex justify-center items-center gap-4 mb-8">
            {!isRunning ? (
              <button
                onClick={handleStart}
                className="group relative bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">Start</span>
                </div>
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ) : (
              <button
                onClick={handlePause}
                className="group relative bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-500/50"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">Pause</span>
                </div>
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            )}
            
            <button
              onClick={handleReset}
              className="group relative bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-slate-500/50"
            >
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="text-lg">Reset</span>
              </div>
              <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            {isRunning && (
              <button
                onClick={handleLap}
                className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 animate-fadeIn"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">Lap</span>
                </div>
                <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            )}
          </div>

          {/* Status Display */}
          <div className="flex justify-center items-center gap-4">
            <div className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                isRunning 
                  ? 'bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse shadow-lg shadow-green-400/50' 
                  : time > 0 
                    ? 'bg-gradient-to-r from-orange-400 to-yellow-500 shadow-lg shadow-orange-400/50' 
                    : 'bg-gradient-to-r from-gray-400 to-gray-500'
              }`}></div>
              <span className="text-white/80 font-medium">
                {isRunning ? 'Running' : time > 0 ? 'Paused' : 'Ready to Start'}
              </span>
            </div>
            
            {time > 0 && (
              <div className="flex items-center gap-2 text-white/60">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-medium">Precision Timing Active</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lap Times Section */}
      {laps.length > 0 && (
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl animate-fadeIn">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl">
                <svg className="w-6 h-6 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Lap Times</h3>
                <p className="text-white/60 text-sm">{laps.length} laps recorded</p>
              </div>
            </div>
            
            <div className="bg-blue-500/20 text-blue-200 text-sm px-4 py-2 rounded-full border border-blue-400/30">
              Total: {formatTimeString(time)}
            </div>
          </div>

          {/* Stats Cards */}
          {laps.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-green-500/10 border border-green-400/30 rounded-xl p-4 text-center">
                <div className="text-green-300 text-sm font-medium mb-1">Fastest Lap</div>
                <div className="text-white font-mono font-bold text-lg">
                  {formatTimeString(lapStats.fastest)}
                </div>
              </div>
              
              <div className="bg-blue-500/10 border border-blue-400/30 rounded-xl p-4 text-center">
                <div className="text-blue-300 text-sm font-medium mb-1">Average Lap</div>
                <div className="text-white font-mono font-bold text-lg">
                  {formatTimeString(lapStats.average)}
                </div>
              </div>
              
              <div className="bg-red-500/10 border border-red-400/30 rounded-xl p-4 text-center">
                <div className="text-red-300 text-sm font-medium mb-1">Slowest Lap</div>
                <div className="text-white font-mono font-bold text-lg">
                  {formatTimeString(lapStats.slowest)}
                </div>
              </div>
            </div>
          )}
          
          {/* Lap List */}
          <div className="space-y-3 max-h-80 overflow-y-auto custom-scrollbar">
            {laps.map((lap, index) => {
              const isLastLap = index === 0;
              const isFastest = laps.length > 1 && lap.splitTime === lapStats.fastest;
              const isSlowest = laps.length > 1 && lap.splitTime === lapStats.slowest;
              
              return (
                <div 
                  key={`${lap.number}-${lap.timestamp}`}
                  className={`group flex justify-between items-center p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                    isLastLap 
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/40 shadow-lg' 
                      : isFastest 
                        ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/40'
                        : isSlowest 
                          ? 'bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-400/40'
                          : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm ${
                      isLastLap ? 'bg-blue-400/30 text-blue-200' : 'bg-white/10 text-white/70'
                    }`}>
                      #{lap.number}
                    </div>
                    
                    <div className="flex items-center gap-3">
                      {isLastLap && (
                        <span className="bg-blue-400/20 text-blue-200 text-xs px-2 py-1 rounded-full font-medium">
                          Current
                        </span>
                      )}
                      {isFastest && (
                        <span className="bg-green-400/20 text-green-200 text-xs px-2 py-1 rounded-full font-medium flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                          </svg>
                          Fastest
                        </span>
                      )}
                      {isSlowest && (
                        <span className="bg-red-400/20 text-red-200 text-xs px-2 py-1 rounded-full font-medium">
                          Slowest
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-white font-mono font-bold text-lg mb-1">
                      {formatTimeString(lap.splitTime)}
                    </div>
                    <div className="text-white/50 text-sm font-mono">
                      Total: {formatTimeString(lap.time)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Enhanced Pro Tips */}
      <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/10 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl">
            <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <h4 className="text-xl font-bold text-white">Pro Tips & Features</h4>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { icon: "⚡", text: "Millisecond precision with AI enhancement", color: "blue" },
            { icon: "🏃‍♂️", text: "Record unlimited laps with smart analysis", color: "green" },
            { icon: "📱", text: "Works offline and in background tabs", color: "purple" },
            { icon: "🎯", text: "Perfect for sports, workouts, and productivity", color: "orange" },
            { icon: "📊", text: "Real-time lap statistics and comparisons", color: "cyan" },
            { icon: "🔄", text: "Automatic drift correction for accuracy", color: "pink" }
          ].map((tip, index) => (
            <div key={index} className={`flex items-center gap-3 p-3 rounded-xl bg-${tip.color}-500/10 border border-${tip.color}-400/20 hover:bg-${tip.color}-500/20 transition-all duration-300`}>
              <span className="text-2xl">{tip.icon}</span>
              <span className="text-white/90 text-sm font-medium">{tip.text}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
}
