// src/App.js
import React, { useState } from 'react';
import Modal from './Modal/Modal';
import style from './Modal/Modal.module.scss';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      <button onClick={toggleModal}>Click me</button>

      <Modal show={isModalOpen} onClose={toggleModal}>
        <h2 className={style.h2} >Hello world</h2>
      </Modal>
    </div>
  );
}

export default App;
