import React, { useRef, useState, useEffect } from "react";
import './index.css'
import gsap from "gsap";

function Gallery() {

    const titleRef = useRef();
    const thumbRef = useRef();

    // expand array to include title, bio, folder, and id
    const [galleryThumbs] = useState([
        {
            name: 'm1 one',
            bio: 'vroom vroom',
        },
        {
            name: 'm1 two',
            bio: 'vroom vroom',
        },
        {
            name: 'm1 three',
            bio: 'vroom vroom',
        },
        {
            name: 'm1 four',
            bio: 'vroom vroom',
        },
        {
            name: 'm1 five',
            bio: 'vroom vroom',
        },
        {
            name: 'm1 six',
            bio: 'vroom vroom',
        },
        {
            name: 'm1 seven',
            bio: 'vroom vroom',
        }
    ])

    // export animations to a new hook that can be reused
    useEffect(() => {
        gsap.fromTo([titleRef.current], {
                x: 200, 
                opacity: 0,
                ease: "power3.inOut"
            },
            {
                x: 0,
                opacity: 1,
                duration: .75
            })
        gsap.fromTo([thumbRef.current], {
                scale: 0, 
                opacity: 0,
            },
            {
                scale: 1,
                opacity: 1,
                ease: "power3.inOut",
                duration: .75,
                delay: .25
            })
    } , []);

    return(
        <div className="gallery">
                {galleryThumbs.map((thumb, i) => (
                    <div className="project">
                        <h1 ref={titleRef} className="project-title">{thumb.name}</h1>
                        <img
                            // source array of images from each project folder assets/images/${project}/${i}
                            src={require(`../../assets/images/${i}.jpg`)}
                            // alt = {project.name} + {project.id}
                            alt={thumb.name}
                            key={thumb}
                            ref={thumbRef}
                            className="thumb"
                        />
                    </div>
                ))};
        </div>
    )

};

export default Gallery;