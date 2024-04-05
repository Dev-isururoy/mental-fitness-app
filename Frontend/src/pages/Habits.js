import React, { useState } from 'react';
import HabitList from '../components/habits/HabitList';
import HabitForm from '../components/habits/HabitForm';

const Habits = () => {
  const [habits, setHabits] = useState([]);

  const addHabit = (habit) => {
    setHabits([...habits, habit]);
  };

  const removeHabit = (habitId) => {
    setHabits(habits.filter((habit) => habit.id !== habitId));
  };

  return (
    <div>
      <h2>Habits</h2>
      {/* Component for displaying list of habits */}
      <HabitList habits={habits} onRemove={removeHabit} />

      {/* Component for adding new habits */}
      <HabitForm onAdd={addHabit} />
    </div>
  );
};

export default Habits;
