import React, { useRef, useState, useEffect } from "react";
import './index.css';
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {TextPlugin} from 'gsap/TextPlugin'
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

// Kill Console Warnings on Null GSAP Targets
gsap.config({
    nullTargetWarn: false,
    trialWarn: false,
});
    
gsap.set('.null', {opacity: 1});

function linkHoverIn() {
    gsap.to('.project-link', {
        duration: 0.5,
        letterSpacing: '1px',
        ease: 'power4.out',
        autoRound: false,
    });
}

function linkHoverOut() {
    gsap.to('.project-link', {
        duration: 0.5,
        letterSpacing: '0px',
        ease: 'power4.out',
        autoRound: false,
    });
}

function Gallery() {

    // Setup root component Ref
    const gallery = useRef(null);

    // Project Animation (each)
    useEffect(() => {
        let ctx = gsap.context(() => {
          let projects = gsap.utils.toArray(".project");
                projects.forEach((project, index) => {
                    
                    let info = project.querySelector(".project-info");

                    gsap.fromTo([info.children, project.children], {
                        opacity: 0,
                        x: 100,
                    }, {
                        opacity: 1,
                        x: 0,
                        duration: 1,
                        stagger: {
                            each: 0.5,
                            from: "start",
                            ease: "power4.out",
                        },
                        scrollTrigger: {
                            trigger: project,
                            scroller: gallery.current,
                            start: "left center",
                            end: "right center",
                            horizontal: true,
                            toggleActions: "play reset play reverse"
                        }
                    })
                })
          
        }, gallery); // <-- scope all selector text to the component
        
        return () => ctx.revert();
      }, []);
        
    // Array of Individual Projects
    const [Projects] = useState([
        {
            name: 'R3F-Kerosene',
            roles: ['React', 'three.js', 'Blender'],
            bio: 'Quick-start framework for performant, real-time 3D apps using React.js to create reusable components from three.js scenes and models.',
            folder: 'r3f-kerosene',
            link: 'https://r3f-kerosene.vercel.app',
        },
        {
            name: 'R3F-Immersive',
            roles: ['React', 'WebXR', 'Blender'],
            bio: 'A framework for creating immersive VR/AR experiences using React.js, three.js, and WebXR. The demo is only visible via mobile VR browsers (I recommend Mozilla XR Viewer) or VR headset. A testament to the current limitations of WebXR.',
            folder: 'r3f-immersive',
            link: 'https://r3f-immersive.vercel.app',
        },
        {
            name: 'Multnomah Drug',
            roles: ['Web Design', 'Apparel Design', 'Creative Direction'],
            bio: 'In the summer of 2020, I designed, manufactured, and distributed over 3000 masks with the help of local manufacturers and a houseless advocacy agency.',
            folder: 'multnomah-drug',
            link: 'https://instagram.com/multnomahdrug',
        },
        {
            name: 'Klyxx Creative',
            roles: ['Product Design', 'Webflow'],
            bio: 'Design and Webflow development for NYC-based creative agency. My role included in-depth case studies of previous work as well as new presentation assets.',
            folder: 'klyxx-creative',
            link: 'https://www.klyxx.co/',

        },
        {
            name: 'SecurityPal',
            roles: ['Web Design', 'Webflow'],
            bio: 'Site design and Webflow development for an SF-based startup expediting internal authorization security questionnaires. Congrats on your Series A!',
            folder: 'securitypal',
            link: 'https://www.securitypalhq.com/',
        },
        {
            name: 'Parachute Papers',
            roles: ['Identity', 'Packaging', 'Web Design', 'Wix'],
            bio: 'Identity, site design, Wix build, and packaging for a subscription rolling-paper brand.',
            folder: 'parachute-papers',
            link: 'https://www.instagram.com/parachutepapers',
        }
    ]);

    return(
        // Component Container
        <div className="gallery" ref={gallery}>
                {/* Mapping through Projects array to create individual projects */}
                {Projects.map((project, index) => (
                    <div className="project" key={index}>
                        
                        <div className="project-info">
                            <div className="project-title">{project.name}<span className="minimap">0{index + 1}</span></div>
                            <div className="project-roles">
                                {project.roles.map((role, index) => (
                                    <div className="role" key={index}>{role}</div>
                                ))}
                            </div>
                            <div className="project-bio">{project.bio}</div>
                            <a className="project-link" href={project.link} onMouseEnter={linkHoverIn} onMouseLeave={linkHoverOut} target={"_blank"} rel="noreferrer">view live project →</a>
                        </div>
                        <div className="project-image">
                            <img
                                // source array of images from each project folder assets/images/${project}/${i}
                                src={require(`../../assets/images/${project.folder}.png`)}
                                // alt = {project.name} + {project.i}
                                alt={project.name}
                                className="thumb"
                            />
                        </div>
                    </div>
                ))};
        </div>
    )

};

export default Gallery;