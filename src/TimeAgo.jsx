import React, { useState, useEffect } from 'react';

const TimeAgo = ({ targetDate }) => {
  const [timeAgo, setTimeAgo] = useState('');

  // פונקציה לחישוב הזמן שחלף
  const calculateTimeAgo = (targetDate) => {
    const now = new Date();
    const diffInMs = now - new Date(targetDate);  // ההבדל בזמן במילישניות

    const diffInSec = diffInMs / 1000;  // שניות
    const diffInMin = diffInSec / 60;  // דקות
    const diffInHour = diffInMin / 60; // שעות
    const diffInDay = diffInHour / 24; // ימים

    if (diffInDay >= 1) {
      return `${Math.floor(diffInDay)} ימים`;
    } else if (diffInHour >= 1) {
      return `${Math.floor(diffInHour)} שעות`;
    } else if (diffInMin >= 1) {
      return `${Math.floor(diffInMin)} דקות`;
    } else {
      return 'לפני פחות מדקה';
    }
  };

  // עדכון הזמן כל שניה
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeAgo(calculateTimeAgo(targetDate));  // עדכון הזמן שעבר
    }, 1000);  // כל שניה

    return () => clearInterval(interval);  // מנקה את ה־interval כשהקומפוננטה נמחקת
  }, [targetDate]);

  return (
    <div>
      <p>עבר {timeAgo}</p>
    </div>
  );
};

export default TimeAgo;
