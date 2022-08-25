import React, { useEffect, useRef, Suspense } from 'react';
import './index.css';
import gsap from 'gsap';


// 3D Canvas & Controls
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// 3D Model Imported
import Model from '../Model/index';

function Intro() {

    const bioText = useRef();
    
    useEffect(() => {
        gsap.fromTo([bioText.current], {
            y: 200, 
            opacity: 0,
            ease: "power3.inOut"
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 1.25
        });
    } , []);

    

    return (
        <div id="intro">
            <div id='dom'>
                <div ref={bioText} id="bio">
                    Hey, I'm an interactive <span className="hl">designer and developer</span> interested in AR, machine learning, additive manufacturing, and connecting communities.
                </div>
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
                            autoRotateSpeed={1}
                        />
                    </Canvas>
                </Suspense>
            </div>
        </div>
    )
};

export default Intro;