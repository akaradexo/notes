import React from 'react';
import './App.css'

import {BrowserRouter, Route, Routes } from 'react-router-dom';

import NoteList from './components/NoteList';
import EditNote from './components/EditNote';
import CreateNote from './components/CreateNote';



const App = () => {
  return (
    <BrowserRouter>
      <section>
        <div className="container">
          <div className="header">
            <h1>NOTES</h1>
          </div>
          

        <Routes>
          <Route path="/" exact element={<NoteList/>}/>
          <Route path="/edit/:id" element={<EditNote/>}/>
          <Route path="/create" element={<CreateNote/>}/>
        </Routes>

        </div>
      </section>
    </BrowserRouter>
  );
};

export default App;
