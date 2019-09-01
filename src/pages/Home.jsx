import React from 'react';
import Particles from 'react-particles-js';
import { Button } from 'antd';
import { Link } from "react-router-dom";
import spaceshipCharacter from '../assets/spaceship_character.svg';
import './Home.css';

export default () => {
  return (
    <div className="App">
      <Particles
        params={{
          "particles": {
              "number": {
                  "value": 50
              },
              "size": {
                  "value": 3
              }
          }
        }}
        className="Particles"
      />
      <img
        src={spaceshipCharacter}
        className="welcome_img"
      />
      <Link to={'/universe'}>
        <Button type="primary" className="init-button">
          Clique aqui para iniciar o jogo!
        </Button>
      </Link>
    </div>
  )
};
