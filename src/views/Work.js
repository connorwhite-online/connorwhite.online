import '../App.css';
import { Canvas } from '@react-three/fiber';

function Work() {
    return (
        <div id='work'>
            <Canvas>
                <mesh>
                    <planeGeometry />
                    <meshStandardMaterial />
                </mesh>
            </Canvas>
        </div>
    )
}

export default Work;