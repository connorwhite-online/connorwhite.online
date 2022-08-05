import React, { useEffect, useRef } from 'react';
import './Temp.css';
import gsap from 'gsap';
import { TimelineMax } from 'gsap/gsap-core';

function Temp() {

    const tl = useRef();
    const bioText = useRef();
    const linkIcons = useRef();

    useEffect(() => {
        tl.current = new TimelineMax()
        .from(bioText.current, 1, { y: -100, opacity: 0 })
        .from(linkIcons.current, 1, { y: -100, opacity: 0 })
    }, []);





    // function animations() {
    //     const bio = document.getElementById('bio');
    //     const linkouts = document.getElementById('linkouts');
    
    //     gsap.from(bio, {duration: 1, opacity: 0, y: 100, ease: "power3.out"});
    //     gsap.from(linkouts, {duration: 1, opacity: 0, scale: 0, ease: "power3.out"});
    // }

    // useEffect(animations);

    // useEffect(() => {
    //     gsap.from(bioText.current, {duration: .75, opacity: 0, y: 100, ease: "power3.out"});
    //     console.log('useEffect');
    // });

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

export default Temp;