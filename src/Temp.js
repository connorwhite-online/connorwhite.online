import './Temp.css';
import gsap from 'gsap';

function Temp() {

    // function animations() {
    //     const bio = document.getElementById('bio');
    //     const linkouts = document.getElementById('linkouts');
    
    //     gsap.from(bio, {duration: 1, opacity: 0, y: 100, ease: "power3.out"});
    //     gsap.from(linkouts, {duration: 1, opacity: 0, scale: 0, ease: "power3.out"});
    // }

    // useEffect(animations);

    return (
        <div id="temp">
            <div id="bio">
            Hey, I'm a designer and developer interested in augmented reality, real-time 3D, additive manufacturing, and blockchain smart-contracts. 
            </div>
            <div id="linkouts">
                <a href="https://www.linkedin.com/in/connorwhite-online/" target={"_blank"} rel="noreferrer"><img src="../images/linkedin.png" alt="Connor's LinkedIn" style={{width: 40, padding: 10}} /></a>
                <a href="https://github.com/connorwhite-online" target={"_blank"} rel="noreferrer"><img src="../images/github.png" alt="Connor's Github" style={{width: 40, padding: 10}} /></a>
            </div>
        </div>
    )
};

export default Temp;