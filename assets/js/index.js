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

// anime({
//     targets: '.project-title',
//     translateY: [-250, 0],
//     dirction: 'reverse',
//     duration: '3000'
// });

// anime({
//     targets: '.project-brief',
//     translateY: [250, 0],
//     duration: '3000'
// });
anime({
    targets: '.project-title',
    translateY: [225, 0],
    duration: '2000'
});
anime({
    targets: '.project-brief',
    translateY: [250, 0],
    duration: '1750'
});