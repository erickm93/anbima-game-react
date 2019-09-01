import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import logo from '../assets/logo.svg';
import './Home.css';

export default () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/universe">Universe</Link>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type="primary">Button</Button>
      </header>
    </div>
  )
};
