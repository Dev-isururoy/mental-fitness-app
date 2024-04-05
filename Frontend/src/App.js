import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Meditation from './pages/Meditation';
import MoodTracker from './pages/MoodTracker';
import Journal from './pages/Journal';
import Workout from './pages/Workout';
import Nutrition from './pages/Nutrition';
import Sleep from './pages/Sleep';
import Habits from './pages/Habits';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import './App.css'; // Import CSS file for styling

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/meditation" component={Meditation} />
          <Route path="/mood" component={MoodTracker} />
          <Route path="/journal" component={Journal} />
          <Route path="/workout" component={Workout} />
          <Route path="/nutrition" component={Nutrition} />
          <Route path="/sleep" component={Sleep} />
          <Route path="/habits" component={Habits} />
          {/* Add more routes as needed */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
