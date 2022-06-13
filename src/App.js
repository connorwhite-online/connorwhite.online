import { Route, Routes } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';

function App() {
  return (
    <div id='app'>
      <Nav />
      <Routes>
        <Route path='/'/>
        <Route path='/work' />
        <Route path='/info' />
      </Routes>
    </div>
  );
}

export default App;
