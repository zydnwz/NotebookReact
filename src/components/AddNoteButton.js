import React, { useContext } from 'react';
import { NotesContext } from '../context/NotesProvider';
import Modal from './Modal';

const AddNoteButton = () => {
  const { showModal, setShowModal } = useContext(NotesContext);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <button onClick={openModal}>Add New Note</button>
      {showModal && <Modal />}
    </>
  );
};

export default AddNoteButton;
