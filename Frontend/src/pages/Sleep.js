import React, { useState } from 'react';

const Sleep = () => {
  const [sleepLogs, setSleepLogs] = useState([]);

  const handleSleepLog = (newLog) => {
    setSleepLogs([...sleepLogs, newLog]);
  };

  return (
    <div>
      <h2>Sleep Tracking</h2>
      {/* Component for displaying sleep logs */}
      <ul>
        {sleepLogs.map((log, index) => (
          <li key={index}>
            <p>Date: {log.date}</p>
            <p>Duration: {log.duration} hours</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
      
      {/* Component for logging sleep sessions */}
      <SleepLogForm onLog={handleSleepLog} />
    </div>
  );
};

export default Sleep;
