import React, { useState } from 'react';
import Modal from 'react-modal';
import { Todo as ITodo } from '../reducer';

interface Props {
  modalIsOpen: boolean;
  setModalIsClose: () => void;
  editTodo: ITodo | null;
}

const EditModal: React.FC<Props> = ({
  modalIsOpen,
  setModalIsClose,
  editTodo,
}) => {
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={setModalIsClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {editTodo ? editTodo.title : 'none'}
        {editTodo ? editTodo.body : 'none'}
        <h2>Hello</h2>
        <button type="button" onClick={setModalIsClose}>
          close
        </button>
        <div>I am a modal</div>
      </Modal>
    </>
  );
};

export default EditModal;
