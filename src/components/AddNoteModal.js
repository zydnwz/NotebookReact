import React, { useState, useContext } from "react";
import { NoteContext } from "../contexts/NoteContext";
import "./AddNoteModal.css";

const AddNoteModal = () => {
  const { isModalOpen, closeModal, addNote, modalNote, updateNote } = useContext(NoteContext);
  const [title, setTitle] = useState(modalNote ? modalNote.title : "");
  const [description, setDescription] = useState(modalNote ? modalNote.description : "");

  const handleSubmit = () => {
    if (modalNote) {
      updateNote(modalNote.id, title, description);
    } else {
      addNote(title, description);
    }
    setTitle("");
    setDescription("");
    closeModal();
  };

  return (
    <div
      className={`modal ${isModalOpen ? "open" : ""}`}
      onClick={(e) => {
        if (e.target.className === "modal open") {
          closeModal();
        }
      }}
    >
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Add New Note</h2>
          <div className="input-labels">
            <div>
              <label>Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-buttons">
            <button onClick={handleSubmit}>
              {modalNote ? "Update" : "Add To Book"}
            </button>
            <button className="close-modal" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNoteModal;