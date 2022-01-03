window.addEventListener('scroll', console.log(scrollY));

anime({
    targets: '#work',
    translateX: [-250, 0],
    duration: '1500'
});

anime({
    targets: '#about',
    translateX: [-250, 0],
    duration: '1750'
});

anime({
    targets: '#contact',
    translateX: [-250, 0],
    duration: '2000'
});

anime ({
    targets: '.hero',
    scale: [0.75, 1],
    easing: 'linear',
    duration: '500'
});

anime({
    targets: '.project-title',
    translateY: [125, 0],
    duration: '2000'
});

anime({
    targets: '.project-brief',
    translateY: [125, 0],
    duration: '1750'
});

const projectTitles = document.getElementsByClassName(".project-title");

const projectTitleHover = projectTitles.addEventListener('click', linkArrow);

const linkArrow = () => {
    
    const getSpan = document.querySelector("span");

    getSpan.textContent = "→";

    return;
};