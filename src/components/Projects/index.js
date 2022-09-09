import React, { useRef, useState, useEffect } from "react";
import './index.css';
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Kill Console Warnings on Null GSAP Targets
    gsap.config({
        nullTargetWarn: false,
        trialWarn: false,
    });
    
    gsap.set('.null', {opacity: 1})

function Gallery() {

    // Setup Refs
    const titleRef = useRef();
    const bioRef = useRef();
    const linkRef = useRef();
    const imageRef = useRef();

    // Project Loading Animation
    useEffect(() => {
        gsap.fromTo(titleRef.current, {
            opacity: 0,
            scaleY: 0,
        }, {
            opacity: 1,
            scaleY: 1,
            duration: 1,
            ease: "power4.out",
        });
        gsap.fromTo(bioRef.current, {
            opacity: 0,
            y: -100,
        }, {
            opacity: 1,
            y: 1,
            duration: 1,
            ease: "power4.out",
        });
        gsap.fromTo(linkRef.current, {
            opacity: 0,
            scaleY: 0,
        }, {
            opacity: 1,
            scaleY: 1,
            duration: 1,
            ease: "power4.out",
        });
        gsap.fromTo(imageRef.current, {
            opacity: 0,
            scaleY: 0,
        }, {
            opacity: 1,
            scaleY: 1,
            duration: 1,
            ease: "power4.out",
        });

    }, []);
        
    // Array of Individual Projects
    const [Projects] = useState([
        {
            name: 'R3F-Kerosene',
            bio: 'Quick-start framework for performant, real-time 3D apps using React.js to create reusable components from three.js scenes and models.',
            folder: 'r3f-kerosene',
            link: 'https://r3f-kerosene.vercel.app',
        },
        {
            name: 'R3F-Immersive',
            bio: 'A framework for creating immersive VR/AR experiences using React.js and three.js.',
            folder: 'r3f-immersive',
            link: 'https://r3f-immersive.vercel.app',
        },
        {
            name: 'Multnomah Drug',
            bio: 'In the summer of 2020, I designed, manufactured, and distributed over 3000 masks with the help of local manufacturers and a houseless advocacy agency. I built a whole brand around the project including design, development, and creative direction.',
            folder: 'multnomah-drug',
            link: 'https://instagram.com/multnomahdrug',
        },
        {
            name: 'Klyxx Creative',
            bio: 'Design and Webflow development for NYC-based creative agency.',
            folder: 'klyxx-creative',
            link: 'https://www.klyxx.co/',

        },
        {
            name: 'SecurityPal',
            bio: 'Site design and Webflow development for an SF-based IT security startup.',
            folder: 'securitypal',
            link: 'https://www.securitypalhq.com/',
        },
        {
            name: 'Parachute Papers',
            bio: 'Site design, Wix build, and packaging for a subscription rolling-paper brand',
            folder: 'parachute-papers',
            link: 'https://www.parachutepapers.com/',
        }
    ]);

    return(
        // Component Container
        <div className="gallery">
                {/* Mapping through Projects array to create individual projects */}
                {Projects.map((project, i) => (
                    <div className="project" key={project.name}>
                        <div className="project-info">
                            <h1 ref={titleRef.current} className="project-title">{project.name}</h1>
                            <p ref={bioRef.current} className="project-bio">{project.bio}</p>
                            <a ref={linkRef.current} className="project-link" href={project.link} target={"_blank"} rel="noreferrer">view live project →</a>
                        </div>
                        <div className="project-image">
                            <img
                                // source array of images from each project folder assets/images/${project}/${i}
                                src={require(`../../assets/images/${i}.jpg`)}
                                // alt = {project.name} + {project.i}
                                alt={project.name}
                                ref={imageRef.current}
                                className="thumb"
                            />
                        </div>
                    </div>
                ))};
        </div>
    )

};

export default Gallery;