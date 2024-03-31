import React from "react";
import { NoteContextProvider } from "./contexts/NoteContext";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";
import AddNoteModal from "./components/AddNoteModal";
import './App.css';

const App = () => {
  return (
    <NoteContextProvider>
      <div className="app">
        <h1>Notebook</h1>
        <SearchBar />
        <AddNoteModal />
        <NoteList />
      </div>
    </NoteContextProvider>
  );
};

export default App;
