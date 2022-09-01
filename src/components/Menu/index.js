import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import gsap from 'gsap';

function Menu() {

    const logoRef = useRef();
    const iconRef = useRef();
    const dropDownRef = useRef();
    const menuItemsRef = useRef([]);
    const linkRef = useRef([]);
    const menuTimeline = useRef();
    const reverseTL = useRef();

    const [menuOpen, setMenuOpen] = useState(false);

    // NavBar Loading Animation
    useEffect(() => {
        dropDownRef.current.style.display = 'none';
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
        backgroundColor: 'none'
    }, {
        opacity: 1,
        backgroungColor: '#000000',
        duration: .25,
        ease: "power4.inOut"
    }, 0);
    menuTimeline.current.fromTo(iconRef.current, {
        rotateZ: 0
    }, {
        rotateZ: 405,
        duration: .75,
        ease: "back.inOut"
    }, 0);
    menuTimeline.current.fromTo(menuItemsRef.current.children, {
        opacity: 0,
        scaleY: 0,
    }, {
        opacity: 1,
        scaleY: 1,
        duration: .5,
        ease: "power4.inOut",
        delay: .25,
        stagger: {
            amount: .25
        }
    }, 0);
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

    // Menu Timeline Reverse Animation
    reverseTL.current = gsap.timeline({ paused: true });
    reverseTL.current.fromTo(iconRef.current, {
        rotateZ: 405
    }, {
        rotateZ: -360,
        duration: .75,
        ease: "back.inOut"
    }, 0);
    reverseTL.current.fromTo(linkRef.current.children, {
        scale: 1,
        opacity: 1,
    }, {
            scale: 0,
            opacity: 0,
            duration: .5,
            ease: "back.inOut",
            stagger: {
                amount: .25,
                from: 'end'
            }
    }, 0);
    reverseTL.current.fromTo(menuItemsRef.current.children, {
        opacity: 1,
        scaleY: 1,
    }, {
            opacity: 0,
            scaleY: 0,
            duration: .5,
            delay: .25,
            ease: "power4.inOut",
            stagger: {
                amount: .25
            }
    }, 0);


    useEffect(() => {

        menuOpen ? menuTimeline.current.play() : reverseTL.current.play();

        if (menuOpen) {
            setTimeout(() => {
                dropDownRef.current.style.display = 'block';
            }, 250);
        } else {
            setTimeout(() => {
                dropDownRef.current.style.display = 'none';
            }, 2000);
        }

    }, [setMenuOpen, menuOpen]);
    

    return (
        <div className="menu">
            <div className="navbar">
                <div className="name" ref={logoRef}>connor white</div>
                <div >
                    <img onClick={toggleMenu} ref={iconRef} src="./media/icons/menu-button.svg" alt="menu button" className="menu-icon"/>
                </div>
            </div>
            <div ref={dropDownRef}>
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