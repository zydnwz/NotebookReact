// components/SearchBar.js
import React, { useContext } from 'react';
import { NoteContext } from '../contexts/NoteContext';
import './SearchBar.css';

const SearchBar = () => {
  const { totalNotes, shownNotes, toggleModal, searchNotes } = useContext(NoteContext);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Notes..."
        onChange={(e) => searchNotes(e.target.value)}
      />
      <div>Total: {totalNotes} </div>
      <div>Shown: {shownNotes} </div>
      <button onClick={toggleModal}>Add New Note</button>
    </div>
  );
};

export default SearchBar;
