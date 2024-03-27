import React from 'react';
import './App.css';
import Header from './components/Header';
import NoteList from './components/NoteList';
import AddNoteButton from './components/AddNoteButton';
import NotesProvider from './context/NotesProvider';

function App() {
  return (
    <NotesProvider>
      <div className="App">
        <Header />
        <NoteList />
        <AddNoteButton />
      </div>
    </NotesProvider>
  );
}

export default App;
