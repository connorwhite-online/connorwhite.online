// // Establish current scroll position
// var currentScroll = window.scrollY

// // Distinguish between scroll up and scroll down
// var autoScroll = function() {

//     if (window.pageYOffset >= currentScroll) {

//         window.scrollBy(0, -window.innerHeight);
//     }
//     else {
//         window.scrollBy(0, window.innerHeight);
//     }
// };

// // Trigger filtered scroll on scroll event
// document.addEventListener("scroll", autoScroll);

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

// anime({
//     targets: '.text-box',
//     translateY: [250, 0],
//     duration: '2000'
// });

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