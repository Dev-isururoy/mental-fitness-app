import React from 'react';
import MoodTrackerForm from '../components/MoodTrackerForm';

const MoodTracker = () => {
  return (
    <div>
      <h1>Mood Tracker</h1>
      <p>Track your mood to improve your mental well-being.</p>
      {/* Component for mood tracking interface */}
      <MoodTrackerForm />
      {/* Add navigation links if needed */}
    </div>
  );
};

export default MoodTracker;
