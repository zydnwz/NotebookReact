import React, { createContext, useState } from 'react';

export const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [displayedNotes, setDisplayedNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const editNote = (index, updatedNote) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = updatedNote;
    setNotes(updatedNotes);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const searchNotes = (searchTerm) => {
    setSearchTerm(searchTerm);
    const filteredNotes = notes.filter(note =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayedNotes(filteredNotes);
  };

  return (
    <NotesContext.Provider value={{
      notes,
      displayedNotes,
      searchTerm,
      addNote,
      editNote,
      deleteNote,
      searchNotes
    }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
