'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Square, RotateCcw, Flag } from 'lucide-react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${centiseconds.toString().padStart(2, '0')}`;
  };

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleStop = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };
  const handleReset = () => {
    setTime(0);
    setLaps([]);
  };
  const handleLap = () => {
    if (time > 0) {
      setLaps(prev => [...prev, { id: prev.length + 1, time, timestamp: formatTime(time) }]);
    }
  };

  // Analog clock calculations
  const totalSeconds = time / 1000;
  const secondAngle = (totalSeconds % 60) * 6; // 360° / 60 seconds = 6° per second
  const minuteAngle = (totalSeconds / 60) * 6; // 360° / 60 minutes = 6° per minute

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Professional Stopwatch</h1>
          <p className="text-white/70">High-precision timing with analog and digital displays</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Analog Clock */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-semibold text-white mb-6">Analog Display</h2>
            <div className="relative">
              {/* Clock Face */}
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-white to-gray-200 shadow-2xl relative border-8 border-gray-300">
                {/* Hour markers */}
                {[...Array(60)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-0.5 bg-gray-600 origin-bottom ${
                      i % 5 === 0 ? 'h-6' : 'h-3'
                    }`}
                    style={{
                      left: '50%',
                      bottom: '50%',
                      transform: `translateX(-50%) rotate(${i * 6}deg)`,
                      transformOrigin: '50% 100%'
                    }}
                  />
                ))}
                
                {/* Numbers */}
                {[0, 15, 30, 45].map((num) => (
                  <div
                    key={num}
                    className="absolute text-lg font-bold text-gray-700 w-6 h-6 flex items-center justify-center"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) translate(${Math.cos((num - 15) * Math.PI / 30) * 90}px, ${Math.sin((num - 15) * Math.PI / 30) * 90}px)`
                    }}
                  >
                    {num}
                  </div>
                ))}

                {/* Minute hand */}
                <div
                  className="absolute w-1 bg-blue-600 origin-bottom rounded-full shadow-lg"
                  style={{
                    left: '50%',
                    bottom: '50%',
                    height: '80px',
                    transform: `translateX(-50%) rotate(${minuteAngle}deg)`,
                    transformOrigin: '50% 100%'
                  }}
                />

                {/* Second hand */}
                <div
                  className="absolute w-0.5 bg-red-500 origin-bottom rounded-full shadow-lg"
                  style={{
                    left: '50%',
                    bottom: '50%',
                    height: '90px',
                    transform: `translateX(-50%) rotate(${secondAngle}deg)`,
                    transformOrigin: '50% 100%'
                  }}
                />

                {/* Center dot */}
                <div className="absolute w-4 h-4 bg-gray-800 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
              </div>
            </div>
          </div>

          {/* Digital Display and Controls */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-white mb-6 text-center">Digital Display</h2>
            
            {/* Digital Time Display */}
            <div className="bg-black/50 rounded-2xl p-8 mb-8 border border-white/10">
              <div className="text-6xl font-mono font-bold text-green-400 text-center tracking-wider">
                {formatTime(time)}
              </div>
              <div className="text-center text-white/60 mt-2">MM:SS.CS</div>
            </div>

            {/* Control Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button
                onClick={isRunning ? handlePause : handleStart}
                className={`flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-200 ${
                  isRunning 
                    ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-orange-500/25' 
                    : 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-green-500/25'
                }`}
              >
                {isRunning ? <Pause size={20} /> : <Play size={20} />}
                {isRunning ? 'Pause' : 'Start'}
              </button>

              <button
                onClick={handleStop}
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold bg-red-500 hover:bg-red-600 text-white transition-all duration-200 shadow-lg hover:shadow-red-500/25"
              >
                <Square size={20} />
                Stop
              </button>

              <button
                onClick={handleReset}
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold bg-gray-500 hover:bg-gray-600 text-white transition-all duration-200 shadow-lg hover:shadow-gray-500/25"
              >
                <RotateCcw size={20} />
                Reset
              </button>

              <button
                onClick={handleLap}
                disabled={time === 0}
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200 shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Flag size={20} />
                Lap
              </button>
            </div>

            {/* Lap Times */}
            {laps.length > 0 && (
              <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Flag size={18} />
                  Lap Times
                </h3>
                <div className="max-h-40 overflow-y-auto space-y-2 lap-scroll">
                  {laps.map((lap, index) => (
                    <div key={lap.id} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <span className="text-white/80">Lap {lap.id}</span>
                      <span className="font-mono text-white font-semibold">{lap.timestamp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Status Indicator */}
        <div className="text-center mt-8">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
            isRunning ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
          }`}>
            <div className={`w-2 h-2 rounded-full ${isRunning ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
            {isRunning ? 'Running' : 'Stopped'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
