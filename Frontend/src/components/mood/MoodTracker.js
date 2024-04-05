import React, { useState } from 'react';

const MoodTracker = () => {
    // Initialize state for mood entries
    const [moodEntries, setMoodEntries] = useState([]);

    // Function to handle adding a new mood entry
    const addMoodEntry = (mood) => {
        const newEntry = {
            mood: mood,
            date: new Date().toISOString() // Use current date and time
        };
        setMoodEntries([...moodEntries, newEntry]);
    };

    return (
        <div>
            <h2>Mood Tracker</h2>
            {/* Mood entry form */}
            <form onSubmit={(e) => {
                e.preventDefault();
                const mood = e.target.elements.mood.value;
                addMoodEntry(mood);
                e.target.reset();
            }}>
                <label htmlFor="mood">Enter your mood:</label>
                <input type="text" id="mood" name="mood" required />
                <button type="submit">Add</button>
            </form>
            
            {/* Display mood entries */}
            <h3>Mood Entries:</h3>
            <ul>
                {moodEntries.map((entry, index) => (
                    <li key={index}>
                        <strong>{entry.mood}</strong> - {new Date(entry.date).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoodTracker;
