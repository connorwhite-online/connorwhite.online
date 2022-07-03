import './Temp.css';
import gsap from 'gsap';
import { useEffect } from 'react';

const bio = document.getElementById('bio');
const linkouts = document.getElementById('linkouts');

const textIn = gsap.from(bio, {duration: 1, opacity: 0, y: 100, ease: "power3.out"});
const imagesIn = gsap.from(linkouts, {duration: 1, opacity: 0, scale: 0, ease: "power3.out"});

function Temp() {
    return (
        <div id="temp">
            <div onLoad={textIn} id="bio">
            Hey, I'm a designer and developer interested in augmented reality, real-time 3D, additive manufacturing, and blockchain smart-contracts. 
            </div>
            <div id="linkouts">
                <a onLoad={imagesIn} href="https://www.linkedin.com/in/connorwhite-online/" target={"_blank"} rel="noreferrer"><img src="../images/linkedin.png" alt="Connor's LinkedIn" style={{width: 40, padding: 10}} /></a>
                <a onLoad={imagesIn} href="https://github.com/connorwhite-online" target={"_blank"} rel="noreferrer"><img src="../images/github.png" alt="Connor's Github" style={{width: 40, padding: 10}} /></a>
            </div>
        </div>
    )
};

export default Temp;