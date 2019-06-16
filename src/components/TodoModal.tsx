import React, { useState } from 'react';
import Modal from 'react-modal';

const TodoModal: React.FC = () => {
  const [modalIsOpen, setOpenModal] = useState(false);
  const openModal = () => {
    setOpenModal(true);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <>
      <button type="button" onClick={openModal}>
        Open Modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button type="button" onClick={closeModal}>
          close
        </button>
        <div>I am a modal</div>
      </Modal>
    </>
  );
};

export default TodoModal;
