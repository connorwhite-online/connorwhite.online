import React from 'react';
import './App.css';

// View imports
import Intro from './components/Intro/index';
import Menu from './components/Menu/index';


function App() {
  return (
    <div id='app'>
      <Menu />
      <Intro />
    </div>
  );
}

export default App;
