import React from 'react';
import './Temp.css';
import ReactGA from 'react-ga';

// View imports
import Temp from './Temp';

// Analytics G-tag
const TRACKING_ID = "G-HXQ88BDCY9";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div id='app'>
      < Temp />
    </div>
  );
}

export default App;
