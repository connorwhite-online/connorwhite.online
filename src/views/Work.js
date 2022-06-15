import '../App.css';
import { Canvas } from '@react-three/fiber';

function Work() {
    return (
        <div id='work'>
            <Canvas>
                <mesh
                position={[0, 5, 10]}
                rotation={[0, 1, 10]}
                >
                    <planeGeometry/>
                    <meshStandardMaterial />
                </mesh>
            </Canvas>
        </div>
    )
}

export default Work;