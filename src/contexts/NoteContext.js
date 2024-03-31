import React, { createContext, useState, useEffect } from 'react';

const NoteContext = createContext();

const NoteContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [searchTerm, setSearchTerm] = useState('');
  const [totalNotes, setTotalNotes] = useState(0);
  const [shownNotes, setShownNotes] = useState(0);
  const [modalNote, setModalNote] = useState(null);
  const [filteredNotes, setFilteredNotes] = useState([]); 
  
  useEffect(() => {
    const filtered = notes.filter(note => note.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredNotes(filtered);
    setTotalNotes(notes.length);
    setShownNotes(filtered.length); 
  }, [notes, searchTerm]);

  const addNote = (title, description) => {
    setNotes(prevNotes => [...prevNotes, { id: Date.now(), title, description }]);
  };

  const deleteNote = id => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };

  const openEditModal = note => {
    setModalNote(note);
    setIsModalOpen(true);
  };

  const updateNote = (id, title, description) => {
    const updatedNotes = notes.map(note => {
      if (note.id === id) {
        return { ...note, title, description };
      }
      return note;
    });
    setNotes(updatedNotes);
    setModalNote(null);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalNote(null);
  };

  const searchNotes = term => {
    setSearchTerm(term);
  };

  return (
    <NoteContext.Provider value={{ 
      notes, 
      filteredNotes, 
      addNote, 
      deleteNote, 
      openEditModal, 
      updateNote, 
      toggleModal, 
      closeModal, 
      searchNotes, 
      totalNotes, 
      shownNotes, 
      isModalOpen, 
      modalNote 
    }}>
      {children}
    </NoteContext.Provider>
  );
};

export { NoteContext, NoteContextProvider };
