import '../App.css';
import { Canvas } from '@react-three/fiber';
import { MeshPhongMaterial } from 'three';

function Work() {
    return (
        <div id='work'>
            <Canvas>
                <ambientLight />
                <mesh>
                    <planeBufferGeometry attach="geometry" args={[9, 16]} />
                    <MeshPhongMaterial attach="material" color="green" />
                </mesh>
            </Canvas>
        </div>
    )
}

export default Work;