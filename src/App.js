import React from 'react';
import './Temp.css';
import ReactGA from 'react-ga';

// Analytics G-tag
const TRACKING_ID = "G-HXQ88BDCY9";
ReactGA.initialize(TRACKING_ID);

// View imports
import Temp from './Temp';

function App() {
  return (
    <div id='app'>
      < Temp />
    </div>
  );
}

export default App;
