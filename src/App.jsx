import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Universe from './pages/Universe';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/universe" component={Universe} />
    </Router>
  );
}

export default App;
