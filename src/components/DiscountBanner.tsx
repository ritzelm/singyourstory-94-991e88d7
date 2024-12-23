import { useState, useEffect } from "react";
import { X } from "lucide-react";

const calculateTimeLeft = () => {
  const difference = new Date('2024-12-31T23:59:59').getTime() - new Date().getTime();
  
  if (difference <= 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00'
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2, '0'),
    minutes: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2, '0'),
    seconds: Math.floor((difference / 1000) % 60).toString().padStart(2, '0')
  };
};

export const DiscountBanner = () => {
  const [showDiscount, setShowDiscount] = useState(true);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      if (Object.values(newTimeLeft).every(value => value === '00')) {
        setShowDiscount(false);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!showDiscount) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-primary text-white py-3 px-4 flex justify-center items-center" style={{ zIndex: 100 }}>
      <div className="flex items-center justify-center space-x-4 max-w-6xl mx-auto">
        <div className="flex items-center space-x-4 font-sans">
          <span className="text-sm">
            Spare 20% mit dem Code: WINTER24
          </span>
          <div className="hidden sm:flex items-center space-x-2 text-sm">
            <span>Endet in:</span>
            <div className="flex space-x-1">
              <span>{timeLeft.days}d</span>
              <span>{timeLeft.hours}h</span>
              <span>{timeLeft.minutes}m</span>
              <span>{timeLeft.seconds}s</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setShowDiscount(false)}
          className="absolute right-4 hover:opacity-80"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};