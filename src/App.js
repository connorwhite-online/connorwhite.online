import React, { Suspense } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';

// View imports
import Intro from './components/Intro/index';
import Model from './components/Model/index';
import { OrbitControls } from '@react-three/drei';
import Gallery from './components/Gallery';

function App() {
  return (
    <div id='app'>
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
      
    </div>
  );
}

export default App;
