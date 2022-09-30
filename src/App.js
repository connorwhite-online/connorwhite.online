import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

// View imports
import Intro from './components/Intro/index';
<<<<<<< HEAD
import Model from './components/Model/index';
import { OrbitControls } from '@react-three/drei';
import Gallery from './components/Gallery/index';
=======
import Menu from './components/Menu/index';
import Projects from './components/Projects/index';
import Contact from './components/Contact/index';
// import NotFound from './components/NotFound/index';

>>>>>>> develop

function App() {
  return (
    <div id='app'>
<<<<<<< HEAD
      <div id='dommy'>
        <Intro />
      </div>
      <div id='webgl'>
        <Suspense fallback={null}>
          <Canvas camera={{ position: [2, 1, 2]}}>
            <spotLight position={[10, 10, 10]} color={0x0ffff} />
            <spotLight position={[-10, -10, -10]} color={0xf43473} />
            <pointLight position={[0, 5, 0]} color={0xf27653} />
            <Model />
            <OrbitControls 
              autoRotate
              autoRotateSpeed={0.75}
            />
          </Canvas>
        </Suspense>
      </div>
      <div>
        <Gallery />
      </div>
      
=======
      <Menu />
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element ={<Contact />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
>>>>>>> develop
    </div>
  );
}

export default App;
