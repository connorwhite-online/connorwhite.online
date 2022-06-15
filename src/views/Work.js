import '../App.css';
import { Canvas } from '@react-three/fiber';
import { MeshStandardMaterial } from 'three';

function Work() {
    return (
        <div id='work'>
            <Canvas>
                <mesh>
                    <planeBufferGeometry />
                    <MeshStandardMaterial />
                </mesh>
            </Canvas>
        </div>
    )
}

export default Work;