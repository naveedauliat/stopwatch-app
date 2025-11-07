import { useState, useEffect } from 'react';

export default function Stopwatch() {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const formatTime = (time) => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const getSeconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const getMinutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    return `${getMinutes}:${getSeconds}:${getMilliseconds}`;
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-black/50 rounded-lg shadow-lg">
      <h2 className="text-2xl text-white mb-4">Stopwatch</h2>
      <div className="text-4xl text-white mb-4">{formatTime(time)}</div>
      <div className="flex space-x-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => setIsActive(true)}
        >
          Start
        </button>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={() => setIsActive(false)}
        >
          Stop
        </button>
        <button
          className="bg-gray-600 text-white px-4 py-2 rounded-lg transition duration-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={() => {
            setIsActive(false);
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}