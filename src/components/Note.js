// components/Note.js
import React, { useContext } from "react";
import { NoteContext } from "../contexts/NoteContext";

const Note = ({ note }) => {
  const { deleteNote, openEditModal } = useContext(NoteContext);

  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.description}</p>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
      <button onClick={() => openEditModal(note)}>Edit</button>
    </div>
  );
};

export default Note;
