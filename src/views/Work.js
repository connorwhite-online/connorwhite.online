import '../App.css';
import { Canvas } from '@react-three/fiber';
import { MeshStandardMaterial } from 'three';

function Work() {
    return (
        <div id='work'>
            <Canvas>
                <mesh
                geometry={planeGeometry}
                position={[0, 5, 10]}
                rotation={[0, 1, 10]}
                material={[MeshStandardMaterial]}
                />
            </Canvas>
        </div>
    )
}

export default Work;