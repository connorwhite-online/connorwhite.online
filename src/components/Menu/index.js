import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import gsap from 'gsap';

function Menu() {

    const logoRef = useRef();
    const iconRef = useRef();
    const dropDownRef = useRef();
    const menuRef = useRef();
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

    menuTimeline.current = gsap.timeline({ paused: true });
    // menuTimeline.current
    // .fromTo(
    //     [menuRef.current],
    //     {
    //         y: -100,
    //     }, {
    //         y: 0,
    //         duration: 1,
    //         ease: "power3.inOut"
    //     }
    // )
    // .fromTo([logoRef.current], {
    //     opacity: 0,
    // }, {
    //     opacity: 1,
    //     duration: 1,
    //     ease: "power3.inOut",
    // }

    // )
    // .fromTo([iconRef.current], {
    //     rotateZ: 0,
    // }, {
    //     rotateZ: 270,
    //     duration: 1,
    //     ease: "power3.inOut",
    // }

    // )
    // .fromTo([dropDownRef.current], {
    //     opacity: 0,
    //     scaleY: 0,
    // }, {
    //     opacity: 1,
    //     scaleY: 1,
    //     duration: 1,
    //     ease: "power3.inOut",
    //     stagger: {
    //         amount: .15
    //     }
    // }

    // )

    useEffect(() => {
        menuOpen ? menuTimeline.current.play() : menuTimeline.current.reverse();
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
        <div ref={menuRef} className={menuOpen ? "menu-open" : "menu"}>
            <div className="navbar">
                <div className={menuOpen ? "name-open" : "name"} ref={logoRef}>connor white</div>
                <div >
                    <img onClick={toggleMenu} ref={iconRef} src={menuOpen ? "./media/icons/menu-button-black.svg" : "./media/icons/menu-button.svg"} alt="menu button" className={menuOpen ? "menu-icon-open" : "menu-icon"}/>
                </div>
            </div>
            <div ref={dropDownRef} className={menuOpen ? "menu-items" : "menu-items-hidden"}> 
                    <NavLink to="/" className="nav-link" onClick={toggleMenu}>Intro</NavLink>
                    <NavLink to="/projects" className="nav-link" onClick={toggleMenu}>Projects</NavLink>
                    <NavLink to="/contact" className="nav-link" onClick={toggleMenu}>Contact</NavLink>
                    <div className="linkouts"> 
                        <a href="https://www.linkedin.com/in/connorwhite-online/" target={"_blank"} rel="noreferrer"><img src="./media/icons/linkedin-icon.png" alt="Connor's LinkedIn" className="social-links" /></a>
                        <a href="https://github.com/connorwhite-online" target={"_blank"} rel="noreferrer"><img src="./media/icons/github-icon.png" alt="Connor's Github" className="social-links" /></a>
                        <a href="https://twitter.com/connor_online" target={"_blank"} rel="noreferrer"><img src="./media/icons/twitter-icon.png" alt="Connor's Twitter" className="social-links" /></a>
                        <a href="https://instagram.com/connorwhite.online" target={"_blank"} rel="noreferrer"><img src="./media/icons/instagram-icon.png" alt="Connor's Instagram" className="social-links" /></a>
                    </div>
            </div>
            
            {/* <div ref={linkIcons} id="linkouts">
                <a href="https://www.linkedin.com/in/connorwhite-online/" target={"_blank"} rel="noreferrer"><img src="../images/linkedin.png" alt="Connor's LinkedIn" style={{width: 40, padding: 10}} /></a>
                <a href="https://github.com/connorwhite-online" target={"_blank"} rel="noreferrer"><img src="../images/github.png" alt="Connor's Github" style={{width: 40, padding: 10}} /></a>
            </div> */}
        </div>
    )
}

export default Menu;