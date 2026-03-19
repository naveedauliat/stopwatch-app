"use client";

import { useState, useEffect, useRef } from "react";

export default function CountdownTimer() {
  const [inputH, setInputH] = useState(0);
  const [inputM, setInputM] = useState(5);
  const [inputS, setInputS] = useState(0);
  const [timeLeft, setTimeLeft] = useState(null); // null = setup phase
  const [totalMs, setTotalMs] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const intervalRef = useRef(null);
  const endTimeRef = useRef(null);
  const soundEnabledRef = useRef(true);

  useEffect(() => { soundEnabledRef.current = soundEnabled; }, [soundEnabled]);

  const playBeep = (type = 'tick') => {
    if (!soundEnabledRef.current) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      if (type === 'finish') {
        [0, 0.35, 0.7].forEach(delay => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.frequency.value = 880;
          osc.type = 'sine';
          gain.gain.setValueAtTime(0.35, ctx.currentTime + delay);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.3);
          osc.start(ctx.currentTime + delay);
          osc.stop(ctx.currentTime + delay + 0.3);
        });
      } else {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 660;
        osc.type = 'sine';
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
        osc.start();
        osc.stop(ctx.currentTime + 0.1);
      }
    } catch (e) {}
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        const remaining = endTimeRef.current - Date.now();
        if (remaining <= 0) {
          setTimeLeft(0);
          setIsRunning(false);
          setIsFinished(true);
          clearInterval(intervalRef.current);
          playBeep('finish');
        } else {
          setTimeLeft(remaining);
        }
      }, 100);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const handleStart = () => {
    if (isFinished) return;
    const ms = timeLeft !== null ? timeLeft : (inputH * 3600 + inputM * 60 + inputS) * 1000;
    if (ms <= 0) return;
    if (timeLeft === null) {
      setTotalMs(ms);
      setTimeLeft(ms);
    }
    endTimeRef.current = Date.now() + (timeLeft !== null ? timeLeft : ms);
    setIsRunning(true);
    playBeep('tick');
  };

  const handlePause = () => {
    setIsRunning(false);
    if (timeLeft !== null && timeLeft > 0) {
      endTimeRef.current = Date.now() + timeLeft;
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(null);
    setIsFinished(false);
    setTotalMs(0);
    endTimeRef.current = null;
  };

  const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

  const adjust = (field, delta) => {
    if (field === 'h') setInputH(v => clamp(v + delta, 0, 99));
    if (field === 'm') setInputM(v => clamp(v + delta, 0, 59));
    if (field === 's') setInputS(v => clamp(v + delta, 0, 59));
  };

  const formatDisplay = (ms) => {
    const h = Math.floor(ms / 3600000);
    const m = Math.floor((ms % 3600000) / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    return {
      h: h.toString().padStart(2, '0'),
      m: m.toString().padStart(2, '0'),
      s: s.toString().padStart(2, '0'),
    };
  };

  const progress = totalMs > 0 && timeLeft !== null ? (totalMs - timeLeft) / totalMs : 0;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference * (1 - progress);

  const display = timeLeft !== null
    ? formatDisplay(timeLeft)
    : { h: inputH.toString().padStart(2, '0'), m: inputM.toString().padStart(2, '0'), s: inputS.toString().padStart(2, '0') };

  const isSetup = timeLeft === null;
  const inputTotal = (inputH * 3600 + inputM * 60 + inputS) * 1000;

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="relative">
        {/* Progress Ring */}
        <div className="absolute inset-0 rounded-full pointer-events-none">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            {!isSetup && (
              <circle
                cx="50" cy="50" r="45" fill="none"
                stroke="url(#cg)" strokeWidth="3" strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                style={{ transition: 'stroke-dashoffset 0.1s linear' }}
              />
            )}
            <defs>
              <linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={isFinished ? '#ef4444' : '#3b82f6'} />
                <stop offset="50%" stopColor={isFinished ? '#f97316' : '#8b5cf6'} />
                <stop offset="100%" stopColor={isFinished ? '#eab308' : '#06b6d4'} />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Main Card */}
        <div className={`relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border shadow-2xl transition-all duration-500 ${
          isFinished ? 'border-orange-400/40 bg-orange-500/5' : 'border-white/20'
        }`}>
          {/* Badge Row */}
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className={`inline-flex items-center gap-3 border rounded-full px-6 py-3 backdrop-blur-sm ${
              isFinished
                ? 'bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-400/30'
                : 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-400/30'
            }`}>
              <div className={`w-3 h-3 rounded-full animate-pulse ${
                isFinished ? 'bg-orange-400' : isRunning ? 'bg-purple-400' : 'bg-blue-400'
              }`}></div>
              <span className={`font-semibold text-sm uppercase tracking-wider ${
                isFinished ? 'text-orange-200' : 'text-purple-200'
              }`}>
                {isFinished ? "Time's Up!" : isRunning ? 'Counting Down' : isSetup ? 'Set Your Timer' : 'Paused'}
              </span>
            </div>

            <button
              onClick={() => setSoundEnabled(prev => !prev)}
              className={`p-3 rounded-full border transition-all duration-200 ${
                soundEnabled
                  ? 'bg-purple-500/20 border-purple-400/30 text-purple-300 hover:bg-purple-500/30'
                  : 'bg-white/5 border-white/20 text-white/40 hover:bg-white/10'
              }`}
              aria-label={soundEnabled ? 'Mute' : 'Unmute'}
            >
              {soundEnabled ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>

          {/* Time Display / Input */}
          {isSetup ? (
            <div className="flex items-center justify-center gap-4 mb-8">
              {[
                { label: 'Hours', value: inputH, field: 'h', max: 99 },
                { label: 'Minutes', value: inputM, field: 'm', max: 59 },
                { label: 'Seconds', value: inputS, field: 's', max: 59 },
              ].map(({ label, value, field, max }, i) => (
                <div key={field} className="flex items-center gap-2">
                  <div className="flex flex-col items-center gap-2">
                    <button onClick={() => adjust(field, 1)} className="text-white/60 hover:text-white p-1 rounded-lg hover:bg-white/10 transition">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                    <input
                      type="number"
                      min={0}
                      max={max}
                      value={value}
                      onChange={e => {
                        const v = clamp(parseInt(e.target.value) || 0, 0, max);
                        if (field === 'h') setInputH(v);
                        if (field === 'm') setInputM(v);
                        if (field === 's') setInputS(v);
                      }}
                      className="w-20 text-center text-5xl md:text-6xl font-mono font-bold text-white bg-white/10 border border-white/20 rounded-2xl py-3 focus:outline-none focus:border-purple-400/60 focus:bg-white/15 transition"
                    />
                    <button onClick={() => adjust(field, -1)} className="text-white/60 hover:text-white p-1 rounded-lg hover:bg-white/10 transition">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <span className="text-white/40 text-xs uppercase tracking-widest">{label}</span>
                  </div>
                  {i < 2 && <span className="text-4xl font-bold text-white/30 mb-6">:</span>}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center mb-8">
              <div className="relative">
                <div className={`absolute inset-0 text-7xl md:text-8xl font-mono font-bold blur-sm ${
                  isFinished ? 'text-orange-400/20' : 'text-purple-400/20'
                }`}>
                  {display.h}:{display.m}:{display.s}
                </div>
                <div className={`relative flex items-center justify-center gap-2 text-6xl md:text-7xl font-mono font-bold ${
                  isFinished ? 'text-orange-200 animate-pulse' : 'text-white'
                }`}>
                  {parseInt(display.h) > 0 && (
                    <>
                      <span className="tabular-nums">{display.h}</span>
                      <span className={isRunning ? 'animate-pulse' : ''}>:</span>
                    </>
                  )}
                  <span className="tabular-nums">{display.m}</span>
                  <span className={isRunning ? 'animate-pulse' : ''}>:</span>
                  <span className="tabular-nums">{display.s}</span>
                </div>
              </div>
              {totalMs > 0 && timeLeft !== null && (
                <div className="mt-4">
                  <div className="w-full bg-white/10 rounded-full h-1.5 mt-2">
                    <div
                      className={`h-1.5 rounded-full transition-all duration-100 ${
                        isFinished ? 'bg-orange-400' : 'bg-gradient-to-r from-purple-400 to-blue-400'
                      }`}
                      style={{ width: `${Math.min(100, progress * 100)}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Controls */}
          <div className="flex justify-center items-center gap-4">
            {!isFinished && !isRunning && (
              <button
                onClick={handleStart}
                disabled={isSetup && inputTotal === 0}
                className="group relative bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">{isSetup ? 'Start' : 'Resume'}</span>
                </div>
              </button>
            )}

            {isRunning && (
              <button
                onClick={handlePause}
                className="group relative bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-500/50"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg">Pause</span>
                </div>
              </button>
            )}

            {!isSetup && (
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
              </button>
            )}
          </div>

          {isFinished && (
            <p className="text-center text-orange-200/80 text-sm mt-6 animate-pulse">
              Timer complete! Click Reset to set a new countdown.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
