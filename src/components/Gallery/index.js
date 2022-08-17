import React, { useRef, useState, useEffect } from "react";
import './index.css'
import gsap from "gsap";

function Gallery() {

    const titleRef = useRef();
    const thumbRef = useRef();

    const [clicked, setClicked] = useState(false);

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

    function handleClick() {
        let className = "thumb"
        if (clicked = true) {
            className += "click-state"
        }
        else {
            return className
        }
    }

    return(
        <div className="gallery">
                {galleryThumbs.map((thumb, i) => (
                    <div className="project">
                        <h1 ref={titleRef} className="project-title">{thumb.name}</h1>
                        <img
                            src={require(`../../assets/images/${i}.jpg`)}
                            alt={thumb.name}
                            key={thumb}
                            ref={thumbRef}
                            onClick={handleClick}
                            className="thumb"
                        />
                    </div>
                ))};
        </div>
    )

};

export default Gallery;
