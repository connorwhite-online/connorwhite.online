import React, { useEffect, useRef, Suspense } from 'react';
import './index.css';
import { gsap } from 'gsap';

// 3D Canvas & Controls
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// 3D Model Imported
import Model from '../Model/index';

function Intro() {

    const bioText = useRef();
    
    useEffect(() => {
        let ctx = gsap.context(() => {
                gsap.fromTo(bioText.current, {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 1,
                    delay: 1.25,
                    ease: "power3.inOut"
                });
        });
        return () => ctx.revert();
    } , []);

    

    return (
        <div className="intro">
            <div className="dom">
                <div ref={bioText} className="bio">
                    Hey, I'm an interactive <span className="hl">designer and developer</span> interested in AR, machine learning, additive manufacturing, and distributed communities.
                </div>
            </div>
            <div className="webgl">
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