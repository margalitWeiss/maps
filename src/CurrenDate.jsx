import React, { useEffect, useState } from 'react';

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    // קבלת התאריך והשעה הנוכחיים
    const now = new Date();
    const formattedDate=`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}T${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div>
      <p>{currentDate}</p>
    </div>
  );
};

export default CurrentDate;