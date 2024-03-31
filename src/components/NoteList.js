import React, { useContext } from "react";
import { NoteContext } from "../contexts/NoteContext";
import Note from "./Note";
import "./NoteList.css";

const NoteList = () => {
  const { filteredNotes } = useContext(NoteContext); 

  return (
    <div className="note-list">
      {filteredNotes.map((note) => ( 
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteList;
