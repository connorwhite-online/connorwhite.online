import React, { useEffect, useRef } from "react";
import "./index.css";
import gsap from "gsap";

function Menu() {

    const logoRef = useRef();
    const iconRef = useRef();

    useEffect(() => {
        gsap.fromTo([logoRef.current], {
            scaleY: 0,
        },
        {
            scaleY: 1,
            duration: 1,
            ease: "power3.inOut"
        })
        gsap.fromTo([iconRef.current], {
            scale: 0,
            rotateZ: 180
        },
        {
            scale: 1,
            rotateZ: 0,
            duration: 1,
            ease: "power3.inOut"
        })
    }, []);

    
    return (
        <div id="menu">
            <div className="name" ref={logoRef}>connor white</div>
            <div className="nav">
                <img ref={iconRef} src="./media/icons/menu-button.svg" alt="menu button" />
            </div>
            
            {/* <div ref={linkIcons} id="linkouts">
                <a href="https://www.linkedin.com/in/connorwhite-online/" target={"_blank"} rel="noreferrer"><img src="../images/linkedin.png" alt="Connor's LinkedIn" style={{width: 40, padding: 10}} /></a>
                <a href="https://github.com/connorwhite-online" target={"_blank"} rel="noreferrer"><img src="../images/github.png" alt="Connor's Github" style={{width: 40, padding: 10}} /></a>
            </div> */}
        </div>
    )
}

export default Menu;