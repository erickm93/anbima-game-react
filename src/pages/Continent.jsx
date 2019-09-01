import React from 'react';
import { Popover } from 'antd';
import { Link } from "react-router-dom";
import continent1 from '../assets/continente1.png';
import continent2 from '../assets/continente2.png';
import continent3 from '../assets/continente3.png';
import continent4 from '../assets/continente4.png';
import continent5 from '../assets/continente5.png';
import continent6 from '../assets/continente6.png';
import boat from '../assets/barco.png';
import robot from '../assets/robot_bob.png';
import './Continent.css'

const fundsButton = () => (
  <Link to={'/city'}>
    Fundos de Investimento
  </Link>
);

export default () => {
  return (
    <div className="body-wrapper">
      <div className="continent-line">
        <Popover placement="topRight" content={"Previdência Privada"} trigger="click">
          <img
            src={continent1}
            className="continent-img continent-left"
          />
        </Popover>
        <Popover placement="topRight" content={"Títulos Publicos"} trigger="click">
          <img
            src={continent2}
            className="continent-img continent-right"
          />
        </Popover>
      </div>
      <div className="continent-line">
        <Popover placement="topRight" content={fundsButton()} trigger="click">
          <img
            src={continent3}
            className="continent-img continent-left"
          />
        </Popover>
        <Popover placement="topRight" content={"Ações"} trigger="click">
          <img
            src={continent4}
            className="continent-img continent-right"
          />
        </Popover>
      </div>
      <div className="continent-line">
        <Popover placement="topRight" content={"Títulos Privados"} trigger="click">
          <img
            src={continent5}
            className="continent-img continent-left"
          />
        </Popover>
        <Popover placement="topRight" content={"Poupança"} trigger="click">
          <img
            src={continent6}
            className="continent-img continent-right"
          />
        </Popover>
      </div>
      <img
        src={boat}
        className="boat-character"
      />
      <Popover placement="topRight" content={"Legal! Chegamos no mundo “Entenda”. Nossaa!!! Esse planeta tem várias coisas legais para conhecermos! Cada continente é um tipo de investimento que temos que conhecer! Vamos explorar!!! Escolha um deles para começarmos!"} trigger="click">
        <img
          src={robot}
          className="robot-character"
        />
      </Popover>
    </div>
  );
};
