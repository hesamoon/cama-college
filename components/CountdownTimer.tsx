"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

export default function CountdownTimer({ 
  targetDate,
  className = "" 
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });
  
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        
        setTimeLeft({ days, hours, minutes });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      }
    };
    
    updateCountdown(); // Initial call
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className={`flex items-center gap-8 justify-between ${timeLeft.days > 0 ? 'max-w-[450px]' : 'max-w-[313px]'} ${className}`}>
      {/* Days - only show if > 0 */}
      {timeLeft.days > 0 && (
        <>
          <div className="flex items-center gap-2">
            <div className="p-4 bg-surface0-light rounded">
              {Math.floor(timeLeft.days / 10)}
            </div>
            <div className="p-4 bg-surface0-light rounded">
              {timeLeft.days % 10}
            </div>
          </div>

          {/* Separator */}
          <div className="space-y-2">
            <div className="bg-[#D9D9D9] w-2 h-2 rounded-full" />
            <div className="bg-[#D9D9D9] w-2 h-2 rounded-full" />
          </div>
        </>
      )}

      {/* Hours */}
      <div className="flex items-center gap-2">
        <div className="p-4 bg-surface0-light rounded">
          {Math.floor(timeLeft.hours / 10)}
        </div>
        <div className="p-4 bg-surface0-light rounded">
          {timeLeft.hours % 10}
        </div>
      </div>

      {/* Separator */}
      <div className="space-y-2">
        <div className="bg-[#D9D9D9] w-2 h-2 rounded-full" />
        <div className="bg-[#D9D9D9] w-2 h-2 rounded-full" />
      </div>

      {/* Minutes */}
      <div className="flex items-center gap-2">
        <div className="p-4 bg-surface0-light rounded">
          {Math.floor(timeLeft.minutes / 10)}
        </div>
        <div className="p-4 bg-surface0-light rounded">
          {timeLeft.minutes % 10}
        </div>
      </div>
    </div>
  );
}
