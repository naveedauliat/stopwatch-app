'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Square, RotateCcw, Flag } from 'lucide-react';

// Professional Stopwatch Logo Component
const StopwatchLogo = ({ size = 64 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="drop-shadow-lg"
  >
    {/* Outer ring */}
    <circle
      cx="32"
      cy="32"
      r="30"
      fill="url(#gradient1)"
      stroke="url(#gradient2)"
      strokeWidth="2"
    />
    {/* Inner clock face */}
    <circle
      cx="32"
      cy="32"
      r="24"
      fill="white"
      stroke="#e5e7eb"
      strokeWidth="1"
    />
    {/* Hour markers */}
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((hour) => {
      const angle = (hour * 30 - 90) * (Math.PI / 180);
      const x1 = 32 + Math.cos(angle) * 20;
      const y1 = 32 + Math.sin(angle) * 20;
      const x2 = 32 + Math.cos(angle) * 17;
      const y2 = 32 + Math.sin(angle) * 17;
      return (
        <line
          key={hour}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#374151"
          strokeWidth={hour % 3 === 0 ? "2" : "1"}
        />
      );
    })}
    {/* Clock hands */}
    <line x1="32" y1="32" x2="32" y2="18" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
    <line x1="32" y1="32" x2="40" y2="32" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
    {/* Center dot */}
    <circle cx="32" cy="32" r="2" fill="#1f2937" />
    {/* Play button overlay */}
    <polygon
      points="26,24 26,40 38,32"
      fill="url(#gradient3)"
      opacity="0.8"
    />
    {/* Gradients */}
    <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#1e40af" />
      </linearGradient>
      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#2563eb" />
      </linearGradient>
      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
    </defs>
  </svg>
);

const Stopwatch = () => {
  const [time, setTime] = useState(0); // elapsed time in ms
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const startTimeRef = useRef(null); // timestamp when started
  const intervalRef = useRef(null);

  // Start or resume stopwatch
  const handleStart = () => {
    if (!isRunning) {
      startTimeRef.current = Date.now() - time;
      setIsRunning(true);
    }
  };

  // Pause stopwatch
  const handlePause = () => {
    setIsRunning(false);
  };

  // Stop and reset stopwatch
  const handleStop = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
    startTimeRef.current = null;
  };

  // Reset time and laps
  const handleReset = () => {
    setTime(0);
    setLaps([]);
    startTimeRef.current = isRunning ? Date.now() : null;
  };

  // Lap
  const handleLap = () => {
    if (time > 0) {
      setLaps(prev => [...prev, { id: prev.length + 1, time, timestamp: formatTime(time) }]);
    }
  };

    // Update time based on real elapsed time
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTimeRef.current);
      }, 10);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const formatTime = (ms) => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
  };
  // Handle keyboard shortcuts for accessibility
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Prevent shortcuts when typing in input fields
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        return;
      }
      switch (event.key.toLowerCase()) {
        case ' ': // Spacebar - Start/Pause
          event.preventDefault();
          isRunning ? handlePause() : handleStart();
          break;
        case 'r': // R key - Reset
          event.preventDefault();
          handleReset();
          break;
        case 's': // S key - Stop
          event.preventDefault();
          handleStop();
          break;
        case 'l': // L key - Lap
          event.preventDefault();
          handleLap();
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isRunning, time]);

  // Analog clock calculations
  const totalSeconds = time / 1000;
  const hours = Math.floor(time / 3600000) % 12;
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);

  // Calculate angles
  const hourAngle = ((hours + minutes / 60 + seconds / 3600) * 30); // 360° / 12 hours = 30° per hour
  const minuteAngle = ((minutes + seconds / 60) * 6); // 360° / 60 minutes = 6° per minute
  const secondAngle = (totalSeconds % 60) * 6; // 360° / 60 seconds = 6° per second

  return (
    <div className="min-h-screen gradient-fallback flex-fallback items-center-fallback justify-center-fallback p-4"
      style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #7c3aed 50%, #0f172a 100%)',
        minHeight: '100vh'
      }}>
      <div className="bg-white/10 backdrop-blur-lg rounded-fallback p-8 shadow-fallback border border-white/20 max-w-4xl w-full"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '1.5rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}>
        {/* Header with Logo */}
        <div className="text-center mb-8">
          <div className="flex-fallback items-center-fallback justify-center-fallback gap-4 mb-4"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem'
            }}>
            <StopwatchLogo size={72} />
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Professional Stopwatch</h1>
              <p className="text-white/70">High-precision timing with analog and digital displays</p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 grid-fallback">
          {/* Analog Clock */}
          <div className="flex-fallback flex-col items-center-fallback"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 className="text-xl font-semibold text-white mb-6">Analog Display</h2>
            <div className="relative">
              {/* Clock Face */}
              <div className="w-64 h-64 rounded-full shadow-fallback relative border-8 border-gray-300"
                style={{
                  width: '16rem',
                  height: '16rem',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  border: '8px solid #d1d5db'
                }}>
                {/* Hour markers */}
                {[...Array(60)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute origin-bottom ${i % 5 === 0 ? 'h-6' : 'h-3'}`}
                    style={{
                      width: '2px',
                      backgroundColor: '#374151',
                      left: '50%',
                      bottom: '50%',
                      height: i % 5 === 0 ? '1.5rem' : '0.75rem',
                      transform: `translateX(-50%) rotate(${i * 6}deg)`,
                      transformOrigin: '50% 100%'
                    }}
                  />
                ))}
                {/* Numbers */}
                {[0, 15, 30, 45].map((num) => (
                  <div
                    key={num}
                    className="absolute text-lg font-bold text-gray-700 w-6 h-6"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) translate(${Math.cos((num - 15) * Math.PI / 30) * 90}px, ${Math.sin((num - 15) * Math.PI / 30) * 90}px)`
                    }}
                  >
                    {num}
                  </div>
                ))}
                {/* Hour hand */}
                <div
                  className="absolute origin-bottom rounded-full shadow-lg"
                  style={{
                    width: '6px',
                    backgroundColor: '#fbbf24',
                    left: '50%',
                    bottom: '50%',
                    height: '60px',
                    borderRadius: '3px',
                    transform: `translateX(-50%) rotate(${hourAngle}deg)`,
                    transformOrigin: '50% 100%',
                    zIndex: 2
                  }}
                />
                {/* Minute hand */}
                <div
                  className="absolute origin-bottom rounded-full shadow-lg"
                  style={{
                    width: '4px',
                    backgroundColor: '#3b82f6',
                    left: '50%',
                    bottom: '50%',
                    height: '80px',
                    borderRadius: '2px',
                    transform: `translateX(-50%) rotate(${minuteAngle}deg)`,
                    transformOrigin: '50% 100%',
                    zIndex: 3
                  }}
                />
                {/* Second hand */}
                <div
                  className="absolute origin-bottom rounded-full shadow-lg"
                  style={{
                    width: '2px',
                    backgroundColor: '#ef4444',
                    left: '50%',
                    bottom: '50%',
                    height: '90px',
                    borderRadius: '1px',
                    transform: `translateX(-50%) rotate(${secondAngle}deg)`,
                    transformOrigin: '50% 100%',
                    zIndex: 4
                  }}
                />
                {/* Center dot */}
                <div
                  className="absolute rounded-full left-1/2 top-1/2 z-10"
                  style={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: '#1f2937',
                    borderRadius: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10
                  }}
                ></div>
              </div>
            </div>
          </div>
          {/* Digital Display and Controls */}
          <div className="flex-fallback flex-col"
            style={{ display: 'flex', flexDirection: 'column' }}>
            <h2 className="text-xl font-semibold text-white mb-6 text-center">Digital Display</h2>
            {/* Digital Time Display */}
            <div className="rounded-fallback p-8 mb-8 border border-white/10"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '1rem',
                padding: '2rem',
                marginBottom: '2rem'
              }}>
              <div className="text-5xl font-mono font-bold text-center tracking-wider"
                style={{
                  fontSize: '2.75rem', // slightly smaller for more digits
                  fontFamily: 'ui-monospace, SFMono-Regular, Monaco, Consolas, "Liberation Mono", "Menlo", monospace',
                  color: '#10b981',
                  letterSpacing: '0.08em',
                  wordSpacing: '0.2em'
                }}>
                {formatTime(time)}
              </div>
              <div className="text-center mt-2" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                HH:MM:SS.CS
              </div>
            </div>

            {/* Control Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-6 grid-fallback">
              <button
                onClick={isRunning ? handlePause : handleStart}
                className={`flex-fallback items-center-fallback justify-center-fallback gap-3 px-6 py-4 rounded-fallback font-semibold transition-all duration-200 shadow-lg ${isRunning
                  ? 'bg-orange-500 hover:bg-orange-600 text-white'
                  : 'bg-green-500 hover:bg-green-600 text-white'
                  }`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  padding: '1rem 1.5rem',
                  borderRadius: '0.75rem',
                  backgroundColor: isRunning ? '#f97316' : '#10b981',
                  color: '#ffffff',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = isRunning ? '#ea580c' : '#059669';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = isRunning ? '#f97316' : '#10b981';
                }}
                aria-label={isRunning ? 'Pause stopwatch' : 'Start stopwatch'}
              >
                {isRunning ? <Pause size={20} /> : <Play size={20} />}
                {isRunning ? 'Pause' : 'Start'}
              </button>
              <button
                onClick={handleStop}
                className="flex-fallback items-center-fallback justify-center-fallback gap-3 px-6 py-4 rounded-fallback font-semibold transition-all duration-200 shadow-lg bg-red-500 hover:bg-red-600 text-white"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  padding: '1rem 1.5rem',
                  borderRadius: '0.75rem',
                  backgroundColor: '#ef4444',
                  color: '#ffffff',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#dc2626'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#ef4444'}
                aria-label="Stop stopwatch"
              >
                <Square size={20} />
                Stop
              </button>
              <button
                onClick={handleReset}
                className="flex-fallback items-center-fallback justify-center-fallback gap-3 px-6 py-4 rounded-fallback font-semibold transition-all duration-200 shadow-lg bg-gray-500 hover:bg-gray-600 text-white"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  padding: '1rem 1.5rem',
                  borderRadius: '0.75rem',
                  backgroundColor: '#6b7280',
                  color: '#ffffff',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#4b5563'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#6b7280'}
                aria-label="Reset stopwatch"
              >
                <RotateCcw size={20} />
                Reset
              </button>
              <button
                onClick={handleLap}
                disabled={time === 0}
                className="flex-fallback items-center-fallback justify-center-fallback gap-3 px-6 py-4 rounded-fallback font-semibold transition-all duration-200 shadow-lg bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  padding: '1rem 1.5rem',
                  borderRadius: '0.75rem',
                  backgroundColor: time === 0 ? 'rgba(59, 130, 246, 0.5)' : '#3b82f6',
                  color: '#ffffff',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  cursor: time === 0 ? 'not-allowed' : 'pointer',
                  opacity: time === 0 ? 0.5 : 1
                }}
                onMouseOver={(e) => {
                  if (time > 0) e.target.style.backgroundColor = '#2563eb';
                }}
                onMouseOut={(e) => {
                  if (time > 0) e.target.style.backgroundColor = '#3b82f6';
                }}
                aria-label="Record lap time"
              >
                <Flag size={20} />
                Lap
              </button>
            </div>
            {/* Lap Times */}
            {laps.length > 0 && (
              <div className="rounded-fallback p-6 backdrop-blur-sm border border-white/10"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '1rem',
                  padding: '1.5rem'
                }}>
                <h3 className="text-lg font-semibold text-white mb-4 flex-fallback items-center-fallback gap-2"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                  <Flag size={18} />
                  Lap Times
                </h3>
                <div className="lap-scroll space-y-2"
                  style={{
                    maxHeight: '10rem',
                    overflowY: 'auto'
                  }}>
                  {laps.map((lap, index) => (
                    <div key={lap.id}
                      className="flex-fallback justify-between items-center-fallback p-3 rounded-lg"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0.75rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '0.5rem'
                      }}>
                      <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Lap {lap.id}</span>
                      <span className="font-mono font-semibold"
                        style={{
                          fontFamily: 'ui-monospace, SFMono-Regular, Monaco, Consolas, "Liberation Mono", "Menlo", monospace',
                          color: '#ffffff',
                          fontWeight: '600'
                        }}>
                        {lap.timestamp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
