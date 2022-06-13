import { Route, Routes } from 'react-router-dom';
import './App.css';

// Component imports
import Nav from './components/Nav';

// View imports
import Home from './views/Home';
import Info from './views/Info';
import Work from './views/Work';

function App() {
  return (
    <div id='app'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />}/>
        <Route path='/info' element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
