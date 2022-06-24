import { Route, Routes } from 'react-router-dom';
import './App.css';

// Component imports
import Nav from './components/Nav';
import Temp from './Temp';

// View imports
import Home from './views/Home';
import Info from './views/Info';
import Work from './views/Work';

function App() {
  return (
    <div id='app'>
      < Temp />
      {/* <div id='navigation'>
      <Nav />
      </div>
      <div id='meat'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work' element={<Work />}/>
          <Route path='/info' element={<Info />} />
        </Routes>
      </div> */}
    </div>
  );
}

export default App;
