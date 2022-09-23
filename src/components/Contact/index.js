import React from "react";
import gsap from "gsap";
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
    return (
        <div className="contact">
            <div className="contact-text">I currently have 0 unopened emails. I really do check it, so please feel free to shoot me an email regarding employment, freelance projects, or just to riff about how AGI could usher in a more equitable form of capitalism. I've never liked embedded email forms, so just use the link below!</div>
            <div><a className="email-link" href="mailto: connorwhitepdx@gmail.com" onMouseEnter={linkHoverIn} onMouseLeave={linkHoverOut}>connorwhitepdx@gmail.com →</a></div>
        </div>
    )
}

export default Contact;