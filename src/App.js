import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// View imports
import Intro from './components/Intro/index';
import Menu from './components/Menu/index';
// import Projects from './components/Projects/index';
// import Contact from './components/Contact/index';


function App() {
  return (
    <div id='app'>
      <Menu />
      <Routes>
        <Route path='/' element={<Intro />} />
        {/* <Route path='/projects' element={<Projects />} /> */}
        {/* <Route path='/contact' element ={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;
