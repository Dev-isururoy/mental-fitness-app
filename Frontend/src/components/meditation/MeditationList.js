import React from 'react';

const MeditationList = ({ meditations }) => {
    return (
        <div>
            <h2>Meditation Sessions</h2>
            <ul>
                {meditations.map((meditation, index) => (
                    <li key={index}>
                        <h3>{meditation.title}</h3>
                        <p>{meditation.description}</p>
                        <p>Duration: {meditation.duration} minutes</p>
                        {/* Add more details or actions for each meditation session */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MeditationList;
