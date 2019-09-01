import React, { useState, useRef } from 'react';
import {
  Popover,
  Popconfirm,
  Modal,
  Form,
  message,
  Drawer,
  Icon
} from 'antd';
import building1 from '../assets/predio1.png';
import building2 from '../assets/predio2.png';
import building3 from '../assets/predio3.png';
import building4 from '../assets/predio4.png';
import building6 from '../assets/predio6.png';
import building7 from '../assets/predio7.png';
import tree1 from '../assets/tree1.png';
import tree2 from '../assets/tree2.png';
import robot from '../assets/robot_bob.png';
import mainCharacter from '../assets/main_character.png';
import QuestionForm from '../components/QuestionForm';
import './City.css';

const WrappedForm = Form.create({ name: 'question-form' })(QuestionForm);

export default () => {
  const [videoModalVisible, setVideoModalVisible] = useState(false);
  const [formModalVisible, setFormModalVisible] = useState(false);
  const [houseLevel, setHouseLevel] = useState(1);
  const [quizzAnswered, setQuizzAnswered] = useState(false);
  const [drawerVisible, setDrawerVisible] =  useState(false);
  const [coins, setCoins] = useState(0);
  const formRef = useRef(null);

  const openVideoModal = () => {
    setVideoModalVisible(true);
  };

  const closeVideoModal = () => {
    setVideoModalVisible(false);
  };

  const saveFormRef = newFormRef => {
    formRef.current = newFormRef;
  };

  const submitForm = (event) => {
    event.preventDefault();

    const { form } = formRef.current.props;
    
    form.validateFields((err, values) => {
      if (!err) {
        if (values.questionAnswer === 1) {
          message.success('Parabéns, você acertou a pergunta.');
          setHouseLevel(2);
          setQuizzAnswered(true);
          setCoins(1);
          closeFormModal();

          return;
        }

        message.error('Puxa, você errou, reveja o conteúdo.');
        closeFormModal();
      }
    });
  };

  const houseComponent = () => (
    <Popconfirm
      title="Começar o desafio?"
      onConfirm={openVideoModal}
    >
      <a href="#">{`Conceito, Nível: ${houseLevel}`}</a>
    </Popconfirm>
  );

  const openFormModal = () => {
    if (quizzAnswered) {
      message.info('Você já esta no nivel 2, tente outra casa.');
      setVideoModalVisible(false);

      return;
    }

    setFormModalVisible(true);
    setVideoModalVisible(false);
  };

  const closeFormModal = () => {
    setFormModalVisible(false);
  };

  const openDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <div>
      <div className="wrapper">
        <Popover placement="top" content={houseComponent()} trigger="click">
          <img
            src={building1}
            className="left-building"
          />
        </Popover>
        <img
          src={tree1}
          className="tree"
        />
        <Popover placement="top" content={"Renda Fixa, Nível: 1"} trigger="click">
          <img
            src={building2}
            className="right-building"
          />
        </Popover>
      </div>
      <div className="wrapper">
        <Popover placement="top" content={"Ações, Nível: 1"} trigger="click">
          <img
            src={building3}
            className="left-building"
          />
        </Popover>
        <img
          src={tree2}
          className="tree"
        />
        <Popover placement="top" content={"Cambial, Nível: 1"} trigger="click">
          <img
            src={building4}
            className="right-building"
          />
        </Popover>
      </div>
      <div className="wrapper">
        <Popover placement="top" content={"Multimercado, Nível: 1"} trigger="click">
          <img
            src={building6}
            className="left-building"
          />
        </Popover>
        <img
          src={tree1}
          className="tree"
        />
        <Popover placement="top" content={"Riscos, Nível: 1"} trigger="click">
          <img
            src={building7}
            className="right-building"
          />
        </Popover>
      </div>
      <div className="wrapper">
        <img
          src={mainCharacter}
          className="player"
          onClick={openDrawer}
        />
        <Popover placement="topRight" content={"Uau!!! Esse lugar têm 6 grandes ‘casas do conhecimento’. Cada uma delas pode evoluir até o nível 3. Quando você concluir o nível 1 vai ganhar uma moeda de bronze. Se concluir o nível 2 vai ganhar uma moeda de Prata e no nível 3, uma moeda de Ouro."} trigger="click">
          <img
            src={robot}
            className="robot"
          />
        </Popover>
      </div>
      <Modal
        title="Assista ao video para entender mais do assunto"
        visible={videoModalVisible}
        onOk={openFormModal}
        onCancel={closeVideoModal}
      >
        <video width="300" height="240" controls>
          <source src={`${process.env.PUBLIC_URL}/apresentacao_conteudo.mp4`} type="video/mp4" />
        </video>
        <p>Assista o vídeo em tela cheia para melhor visualização</p>
      </Modal>
      <Modal
        title="Responda a essa pergunta para testar seus conhecimentos"
        visible={formModalVisible}
        onOk={submitForm}
        onCancel={closeFormModal}
      >
        <WrappedForm
          wrappedComponentRef={saveFormRef}
          onCancel={closeFormModal}
          onCreate={submitForm}
        />
      </Modal>
      <Drawer
        title="Jogador"
        placement="right"
        closable={false}
        onClose={closeDrawer}
        visible={drawerVisible}
      >
        <p><Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" />{` Bronze : ${coins}`}</p>
        <p><Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" /> Prata : 0</p>
        <p><Icon type="check-circle" theme="twoTone" twoToneColor="#52c41a" /> Ouro : 0</p>
      </Drawer>
    </div>
  );
};
