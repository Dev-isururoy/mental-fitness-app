import React, { useState } from 'react';

const NutritionLog = () => {
  const [logs, setLogs] = useState([]);

  const handleAddLog = (log) => {
    setLogs([...logs, log]);
  };

  return (
    <div>
      <h2>Nutrition Log</h2>
      {/* Component for adding new nutrition log entries */}
      <NutritionLogForm onAddLog={handleAddLog} />
      {/* Component for displaying existing nutrition log entries */}
      <NutritionLogList logs={logs} />
    </div>
  );
};

export default NutritionLog;
