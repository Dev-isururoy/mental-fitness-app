import React, { useState } from 'react';

const WorkoutSession = () => {
  const [session, setSession] = useState({
    exercises: [],
    duration: '',
    intensity: '',
    date: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSession({
      ...session,
      [name]: value
    });
  };

  const handleAddExercise = (exercise) => {
    setSession({
      ...session,
      exercises: [...session.exercises, exercise]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submitting the workout session data (e.g., send it to the server)
    console.log('Workout session data:', session);
  };

  return (
    <div>
      <h2>Workout Session</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Duration:</label>
          <input type="text" name="duration" value={session.duration} onChange={handleInputChange} />
        </div>
        <div>
          <label>Intensity:</label>
          <input type="text" name="intensity" value={session.intensity} onChange={handleInputChange} />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={session.date} onChange={handleInputChange} />
        </div>
        {/* Add inputs for exercises or use a separate component */}
        <button type="submit">Save Session</button>
      </form>
    </div>
  );
};

export default WorkoutSession;
