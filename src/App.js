import React, { Suspense } from 'react';
import './Temp.css';
import { Canvas } from '@react-three/fiber';

// View imports
import Temp from './Temp';
import Model from './Model';
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <div id='app'>
      <div id='dommy'>
        <Temp />
      </div>
      <div id='webgl'>
        <Suspense fallback={null}>
          <Canvas camera={{ position: [2, 1, 2]}}>
            <spotLight position={[10, 10, 10]} />
            <spotLight position={[-10, -10, -10]} />
            <pointLight position={[0, 5, 0]} />
            <Model />
            <OrbitControls 
              autoRotate
              autoRotateSpeed={0.75}
            />
          </Canvas>
        </Suspense>
      </div>
      
    </div>
  );
}

export default App;
