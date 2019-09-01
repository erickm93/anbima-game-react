import React, { useState } from 'react';
import './Universe.css';
import { Link } from 'react-router-dom';
import { Popover, Button, Icon } from 'antd';
import planet from '../assets/planet.png';
import mercury from '../assets/mercury.png';
import saturn from '../assets/saturn.png';
import venus from '../assets/venus.png';
import robobob from '../assets/robobob.png';
import aviao from '../assets/aviao.svg';

export default () => {
  const [page, setPage] = useState(0);

  const carouselContent = () => {
    if (page === 0) {
      return (
        <p className="text">
          Olá, meu nome é BOB. Eu vou te ajudar nessa aventura no universo de investimentos!
        </p>
      );
    }

    if (page === 1) {
      return (
        <p className="text">
          Juntos vamos explorar cada mundo e aprender os principais conceitos.
        </p>
      );
    }

    return (
      <p className="text">
        Mas antes de embarcarmos nessa jornada vamos te explicar como funciona! Cada planeta representa uma área de conhecimento: Está Preparado? ENTÃO APERTE OS CINTOS E VAMOSSSSSS!!
      </p>
    );
  };

  const leftButtonChange = () => {
    if (page === 0) {
      return;
    }

    if (page === 1) {
      setPage(0);
      return;
    }

    setPage(1);
  };

  const rightButtonChange = () => {
    if (page === 0) {
      setPage(1)
      return;
    }

    if (page === 1) {
      setPage(2);
      return;
    }
  };

  const carouselRenderer = () => {
    return (
      <div className="wrapper">
        <Button className="element" onClick={leftButtonChange}>
          <Icon type="left" />
        </Button>
        {carouselContent()}
        <Button className="element" onClick={rightButtonChange}>
          <Icon type="right" />
        </Button>
      </div>
    );
  };

  const saturnPopover = () => {
    return (
      <Link to="/continent">
        O planeta Entenda vai nos mostrar quais são os principais produtos para investirmos e quais suas vantagens e riscos.
      </Link>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
      <Popover
        trigger="click"
        content={saturnPopover()}
      >
        <div className="teste">
          <img src={saturn} className="App-saturn" alt="saturn" />
        </div>
      </Popover>   
      
      
      <Popover
        trigger="click"
        content="No planeta Planeje vamos descobrir o que temos que fazer antes de investir em qualquer produto."
      >
        <div className="App-planet_pox">
          <img src={planet} className="App-planet" alt="planet" />
        </div>
      </Popover>
      
      <Popover
        trigger="click"
        placement="top"
        content="No planeta Escolha vamos desvendar os mistérios de uma escolha inteligente de investimentos."
      >
        <div className="App-mercury_pox">
          <img src={mercury} className="App-mercury" alt="mercury" />
        </div>
      </Popover>
      
      <Popover
        trigger="click"
        placement="top"
        content="O planeta Acompanhar, vai nos dizer como nos manter atualizados se a trajetória de nossa jornada de investimentos está na rota que planejamos!"
      >
        <div className="App-venus_pox">
          <img src={venus} className="App-venus" alt="venus" />
        </div>
      </Popover>

      <div className="App-robobob_pox">
        <Popover
          trigger="click"
          placement="topRight"
          content={carouselRenderer()}
        >
      	  <img src={robobob} className="App-robobob" alt="robobob" />
        </Popover>
      </div>

      <div className="App-aviao_pox">
      	<img src={aviao} className="App-aviao" alt="aviao" />
      </div>
      </header>
    </div>
  )
};
