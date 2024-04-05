import React from 'react';

const HabitList = ({ habits }) => {
  return (
    <div>
      <h2>Habit List</h2>
      <ul>
        {habits.map((habit, index) => (
          <li key={index}>
            <div>
              <strong>Name:</strong> {habit.name}
            </div>
            <div>
              <strong>Description:</strong> {habit.description}
            </div>
            <div>
              <strong>Frequency:</strong> {habit.frequency}
            </div>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitList;
