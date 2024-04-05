import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Your Mental Fitness App</h1>
      <p>Track your mood, journal your thoughts, log your workouts, and more...</p>
      <div>
        <a href="/journal">Start Journaling</a>
        <a href="/workout">Track Workouts</a>
        {/* Add more links to other features/pages */}
      </div>
    </div>
  );
};

export default Home;
