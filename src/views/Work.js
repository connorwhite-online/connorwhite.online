import '../App.css';
import { Canvas } from '@react-three/fiber';

function Work() {
    return (
        <div id='work'>
            <Canvas>
                <mesh
                position={[0, .7, .5]}
                >
                    <planeGeometry/>
                    <meshStandardMaterial />
                </mesh>
            </Canvas>
        </div>
    )
}

export default Work;