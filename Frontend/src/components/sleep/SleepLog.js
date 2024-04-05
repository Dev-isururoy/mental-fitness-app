import React, { useState } from 'react';

const SleepLog = () => {
  const [logs, setLogs] = useState([]);

  const handleAddLog = (log) => {
    setLogs([...logs, log]);
  };

  return (
    <div>
      <h2>Sleep Log</h2>
      {/* Component for adding new sleep log entries */}
      <SleepLogForm onAddLog={handleAddLog} />
      {/* Component for displaying existing sleep log entries */}
      <SleepLogList logs={logs} />
    </div>
  );
};

export default SleepLog;
