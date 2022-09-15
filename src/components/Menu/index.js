import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import gsap from 'gsap';
import {TextPlugin} from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

function Menu() {

    // Ref Declarations
    const logoRef = useRef();
    const iconRef = useRef();
    const dropDownRef = useRef();
    const menuItemsRef = useRef([]);
    const linkRef = useRef([]);
    const menuTimeline = useRef();

    const [menuOpen, setMenuOpen] = useState(false);

    // NavBar Loading Animation
    useEffect(() => {
        gsap.fromTo([logoRef.current], {
            text: '',
            opacity: 0,
        },
        {
            text: 'connor white',
            opacity: 1,
            duration: 2,
            ease: "power4.inOut"
        })
        gsap.fromTo([iconRef.current], {
            x: 75,
            rotateZ: 360
        },
        {
            x: 0,
            rotateZ: 0,
            duration: 1,
            ease: "power3.inOut",
            delay: .75
        })
    }, []);

    // Menu State Change
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    // Menu Timeline Animation
    menuTimeline.current = gsap.timeline({ paused: true });
    menuTimeline.current.fromTo(dropDownRef.current, {
        opacity: 0,
        display: 'none',
        // position: 'relative',
        // backgroundColor: 'transparent',
        height: '0vh',
        width: '0vw',
    }, {
        opacity: 1,
        display: 'block',
        // position: 'absolute',
        backgroundColor: '#000000',
        height: '100vh',
        width: '100vw',
        duration: .25,
        ease: "power4.inOut"
    }, 0);
    menuTimeline.current.fromTo(iconRef.current, {
        rotateZ: 0
    }, {
        rotateZ: 315,
        duration: .75,
        ease: "back.inOut"
    }, .25);
    menuTimeline.current.fromTo(logoRef.current, {
        text: {
            value: 'connor white',
        }
    },{
        duration: 1,
        text: {
            value: 'designer & developer',
            ease: "power4.inOut"
        }, 
    }, .25);
    menuTimeline.current.fromTo(menuItemsRef.current.children, {
        opacity: 0,
        x: 25,
    }, {
        opacity: 1,
        x: 0,
        duration: .25,
        ease: "power4.inOut",
        delay: .25,
        stagger: {
            amount: .25
        }
    }, .25);
    menuTimeline.current.fromTo(linkRef.current.children, {
        scale: 0,
        opacity: 0,
    }, {
        scale: 1,
        opacity: 1,
        duration: .5,
        ease: "back.inOut",
        stagger: {
            amount: .25,
            from: 'end'
        }
    }, .5);

    // Run menu timeline animation when menu state changes
    useEffect(() => {

        let ctx = gsap.context(() => {
            menuOpen ? menuTimeline.current.play() : menuTimeline.current.reversed();
        })

        return () => ctx.revert();

    }, [setMenuOpen, menuOpen]);
    

    return (
        <div className="menu">
            <div className="navbar">
                <div className="name" ref={logoRef}>connor white</div>
                <div >
                    <img onClick={toggleMenu} ref={iconRef} src="./media/icons/menu-button.svg" alt="menu button" className="menu-icon"/>
                </div>
            </div>
            <div className="dropdown" ref={dropDownRef}>
                <div ref={menuItemsRef} className="menu-items"> 
                        <NavLink to="/" className="nav-link" onClick={toggleMenu}>Intro</NavLink>
                        <NavLink to="/projects" className="nav-link" onClick={toggleMenu}>Projects</NavLink>
                        <NavLink to="/contact" className="nav-link" onClick={toggleMenu}>Contact</NavLink>
                        <div ref={linkRef} className="linkouts"> 
                            <a href="https://www.linkedin.com/in/connorwhite-online/" target={"_blank"} rel="noreferrer"><img src="./media/icons/linkedin.svg" alt="Connor's LinkedIn" className="social-links" /></a>
                            <a href="https://github.com/connorwhite-online" target={"_blank"} rel="noreferrer"><img src="./media/icons/github.svg" alt="Connor's Github" className="social-links" /></a>
                            <a href="https://twitter.com/connor_online" target={"_blank"} rel="noreferrer"><img src="./media/icons/twitter.svg" alt="Connor's Twitter" className="social-links" /></a>
                            <a href="https://instagram.com/connorwhite.online" target={"_blank"} rel="noreferrer"><img src="./media/icons/instagram.svg" alt="Connor's Instagram" className="social-links" /></a>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;