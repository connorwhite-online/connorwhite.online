import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import moment from "moment";
import './index.css';

function linkHoverIn() {
    gsap.to('.email-link', {
        duration: 0.5,
        x: 15,
        letterSpacing: '1px',
        ease: 'power4.out',
        autoRound: false,
    });
}

function linkHoverOut() {
    gsap.to('.email-link', {
        duration: 0.5,
        letterSpacing: '0px',
        x: 0,
        ease: 'power4.out',
        autoRound: false,
    });
}

function Contact () {
    
    const time = moment().format('h:mm a');

    const contactText = useRef();
    const emailLink = useRef();

    // Contact Page Loading Animation
    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(contactText.current, {
                opacity: 0,
                y: 50,
            }, {
                duration: 1,
                opacity: 1,
                y: 0,
                ease: 'power4.out',
                delay: 2,
            });
            gsap.fromTo(emailLink.current, {
                opacity: 0,
                y: 50,
            }, {
                duration: 1,
                y: 0,
                opacity: 1,
                ease: 'power4.out',
                delay: 2.5,
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="contact">
            <div className="contact-text" ref={contactText}>I currently have 0 unopened emails. I really do check them, so please feel free to shoot me an email regarding employment, freelance projects, or anything regarding surfing, parenthood, or old cars.<br/>I've never liked embedded email forms, so just use the link below!<br/>FYI: it's {time} my time.</div>
            <div><a className="email-link" ref={emailLink} href="mailto: connorwhitepdx@gmail.com" onMouseEnter={linkHoverIn} onMouseLeave={linkHoverOut}>connorwhitepdx@gmail.com →</a></div>
        </div>
    )
}

export default Contact;