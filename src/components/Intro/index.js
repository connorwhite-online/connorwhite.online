import React, { useEffect, useRef } from 'react';
import '../../App.css';
import gsap from 'gsap';

function Intro() {

    const bioText = useRef();
    const linkIcons = useRef();
    
    useEffect(() => {
        gsap.fromTo([bioText.current], {
                y: 200, 
                opacity: 0,
                ease: "power3.inOut"
            },
            {
                y: 0,
                opacity: 1,
                duration: .75
            })
        gsap.fromTo([linkIcons.current], {
                y: 200, 
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                ease: "power3.inOut",
                duration: .75,
                delay: .25
            })
    } , []);

    return (
        <div id="temp">
            <div ref={bioText} id="bio">
            Hey, I'm a designer and developer interested in augmented reality, real-time 3D, additive manufacturing, and blockchain smart-contracts. 
            </div>
            <div ref={linkIcons} id="linkouts">
                <a href="https://www.linkedin.com/in/connorwhite-online/" target={"_blank"} rel="noreferrer"><img src="../images/linkedin.png" alt="Connor's LinkedIn" style={{width: 40, padding: 10}} /></a>
                <a href="https://github.com/connorwhite-online" target={"_blank"} rel="noreferrer"><img src="../images/github.png" alt="Connor's Github" style={{width: 40, padding: 10}} /></a>
            </div>
        </div>
    )
};

export default Intro;