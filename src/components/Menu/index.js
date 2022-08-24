import React, { useEffect, useState, useRef } from 'react';
import './index.css';
import gsap from 'gsap';

function Menu() {

    const logoRef = useRef();
    const iconRef = useRef();
    const dropDownRef = useRef();
    const menuTimeline = useRef();

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        gsap.fromTo([logoRef.current], {
            scaleY: 0,
            opacity: 0,
        },
        {
            scaleY: 1,
            opacity: 1,
            duration: 1.25,
            ease: "power3.inOut"
        })
        gsap.fromTo([iconRef.current], {
            scale: 0,
            rotateZ: -180
        },
        {
            scale: 1,
            rotateZ: 0,
            duration: 1,
            ease: "power3.inOut",
            delay: .75
        })
    }, []);


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    }

    useEffect(() => {
        if (menuOpen === true) {
            gsap.fromTo([iconRef.current], {
                rotateZ: 0
            }, 
            {
                rotateZ: -180,
                duration: 1,
                ease: "power3.inOut",
                delay: .25
            })
        }
    }, []);


    return (
        <div className="menu">
            <div className="navbar">
                <div className="name" ref={logoRef}>connor white</div>
                <div className="menu-icon">
                    <img onClick={toggleMenu} ref={iconRef} src="./media/icons/menu-button.svg" alt="menu button" />
                </div>
            </div>
            <div ref={dropDownRef} className={menuOpen ? "menu-items" : "menu-items-hidden"}> 
                    insert menu
            </div>
            
            {/* <div ref={linkIcons} id="linkouts">
                <a href="https://www.linkedin.com/in/connorwhite-online/" target={"_blank"} rel="noreferrer"><img src="../images/linkedin.png" alt="Connor's LinkedIn" style={{width: 40, padding: 10}} /></a>
                <a href="https://github.com/connorwhite-online" target={"_blank"} rel="noreferrer"><img src="../images/github.png" alt="Connor's Github" style={{width: 40, padding: 10}} /></a>
            </div> */}
        </div>
    )
}

export default Menu;