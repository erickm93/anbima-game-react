import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Universe from './pages/Universe';
import Continent from './pages/Continent';
import City from './pages/City';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/universe" component={Universe} />
      <Route path="/continent" component={Continent} />
      <Route path="/city" component={City} />
    </Router>
  );
}

export default App;
