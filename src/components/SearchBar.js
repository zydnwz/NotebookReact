import React, { useContext, useState } from "react";
import { NoteContext } from "../contexts/NoteContext";
import "./SearchBar.css";

const SearchBar = () => {
  const { totalNotes, shownNotes, toggleModal } = useContext(NoteContext);
  const [searchQuery, setSearchQuery] = useState(""); 
  const { searchNotes } = useContext(NoteContext);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    searchNotes(query); 
  };

  return (
    <div className="search-bar">
      <div className="search-label">Search Notes:</div>
      <input
        type="text"
        value={searchQuery} 
        onChange={handleSearch} 
      />
      <div>Total Notes: {totalNotes} </div>
      <div>Showing: {shownNotes} </div>
      <button onClick={toggleModal}>Add New Note</button>
    </div>
  );
};

export default SearchBar;
