import { useState, useEffect } from 'react';

const Countdown = () => {
  const getEndTime = () => {
    const savedEndTime = localStorage.getItem('dealEndTime');
    const now = new Date().getTime();

    if (savedEndTime && parseInt(savedEndTime, 10) > now) {
      return parseInt(savedEndTime, 10);
    }

    // Set a new timer for 5 hours from now
    const newEndTime = now + (5 * 60 * 60 * 1000);
    localStorage.setItem('dealEndTime', newEndTime.toString());
    return newEndTime;
  };

  const [endTime] = useState(getEndTime());

  const calculateTimeLeft = () => {
    const difference = endTime - new Date().getTime();
    
    let timeLeft = {
      hours: '00',
      minutes: '00',
      seconds: '00'
    };

    if (difference > 0) {
      timeLeft = {
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      };
    } else {
      // If timer ends, force a refresh of the end time on next render
      localStorage.removeItem('dealEndTime');
    }
    
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center space-x-1 text-center font-mono">
      <div className="p-2 bg-white/20 rounded-lg">
        <span className="text-lg">{timeLeft.hours}</span>
      </div>
      <span className="text-lg font-bold">:</span>
      <div className="p-2 bg-white/20 rounded-lg">
        <span className="text-lg">{timeLeft.minutes}</span>
      </div>
       <span className="text-lg font-bold">:</span>
      <div className="p-2 bg-white/20 rounded-lg">
        <span className="text-lg">{timeLeft.seconds}</span>
      </div>
    </div>
  );
};

export default Countdown;