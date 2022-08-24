import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// View imports
import Intro from './components/Intro/index';
import Menu from './components/Menu/index';


function App() {
  return (
    <div id='app'>
      <Menu />
      <Routes>
        <Route path='/' element={<Intro />} />
      </Routes>
      <Intro />
    </div>
  );
}

export default App;
