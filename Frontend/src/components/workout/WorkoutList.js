import React from 'react';

const WorkoutList = ({ workouts }) => {
  return (
    <div>
      <h2>Workout List</h2>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            <div>
              <strong>Name:</strong> {workout.name}
            </div>
            <div>
              <strong>Type:</strong> {workout.type}
            </div>
            <div>
              <strong>Duration:</strong> {workout.duration} minutes
            </div>
            <div>
              <strong>Date:</strong> {workout.date}
            </div>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutList;
