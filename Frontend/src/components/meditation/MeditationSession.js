import React from 'react';

const MeditationSession = ({ session }) => {
    return (
        <div>
            <h2>{session.title}</h2>
            <p>Date: {session.date}</p>
            <p>Duration: {session.duration} minutes</p>
            <p>Location: {session.location}</p>
            <p>Description: {session.description}</p>
            {/* Add more details or actions for the meditation session */}
        </div>
    );
};

export default MeditationSession;
