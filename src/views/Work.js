import '../App.css';
import { Canvas } from '@react-three/fiber';
import { MeshStandardMaterial } from 'three';
import { MeshPhongMaterial } from 'three';

function Work() {
    return (
        <div id='work'>
            <Canvas>
                <mesh>
                    <planeBufferGeometry attach="geometry" args={[9, 16]} />
                    <MeshPhongMaterial attach="material" color="green" />
                </mesh>
            </Canvas>
        </div>
    )
}

export default Work;