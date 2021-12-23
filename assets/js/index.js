// Establish current scroll position
var currentScroll = window.scrollY

// Distinguish between scroll up and scroll down
var autoScroll = function() {

    // if (window.pageYOffset >= currentScroll) {

    //     window.scrollBy(0, -window.innerHeight);
    // }
    // else {
    //     window.scrollBy(0, window.innerHeight);
    // }
};

// Trigger filtered scroll on scroll event
document.addEventListener("scroll", autoScroll);