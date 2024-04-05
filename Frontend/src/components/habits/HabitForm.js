import React, { useState } from 'react';

const HabitForm = ({ onSubmit, onCancel }) => {
  const [habitData, setHabitData] = useState({
    name: '',
    description: '',
    frequency: '',
    startDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHabitData({
      ...habitData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit function passed as a prop, passing the habit data
    onSubmit(habitData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={habitData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Description:</label>
        <textarea name="description" value={habitData.description} onChange={handleChange} />
      </div>
      <div>
        <label>Frequency:</label>
        <input type="text" name="frequency" value={habitData.frequency} onChange={handleChange} />
      </div>
      <div>
        <label>Start Date:</label>
        <input type="date" name="startDate" value={habitData.startDate} onChange={handleChange} />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default HabitForm;
