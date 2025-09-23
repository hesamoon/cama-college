"use client";

interface MeetingTimeDisplayProps {
  meetingDate: Date;
  className?: string;
}

export default function MeetingTimeDisplay({ 
  meetingDate,
  className = "" 
}: MeetingTimeDisplayProps) {
  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    // Format hours (0-23)
    const displayHours = hours.toString().padStart(2, '0');
    
    // Format minutes with leading zero
    const displayMinutes = minutes.toString().padStart(2, '0');
    
    return {
      hours: Math.floor(parseInt(displayHours) / 10),
      hoursUnit: parseInt(displayHours) % 10,
      minutes: Math.floor(parseInt(displayMinutes) / 10),
      minutesUnit: parseInt(displayMinutes) % 10
    };
  };

  const time = formatTime(meetingDate);

  return (
    <div className={`flex items-center gap-8 justify-between max-w-[400px] ${className}`}>
      {/* Hours */}
      <div className="flex items-center gap-2">
        <div className="p-4 bg-surface0-light rounded">
          {time.hours}
        </div>
        <div className="p-4 bg-surface0-light rounded">
          {time.hoursUnit}
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
          {time.minutes}
        </div>
        <div className="p-4 bg-surface0-light rounded">
          {time.minutesUnit}
        </div>
      </div>
    </div>
  );
}
