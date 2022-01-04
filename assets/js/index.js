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
    targets: 'img',
    opacity: [0, 1],
    duration: '4000'
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

// Multnomah Drug hover marquee
$("#md-hover").mouseover(function(){
    $("#md-marquee").fadeIn();
});

$("#md-hover").mouseleave(function(){
    $("#md-marquee").fadeOut();
});

// LGS hover marquee
$("#lgs-hover").mouseover(function(){
    $("#lgs-marquee").fadeIn();
});

$("#lgs-hover").mouseleave(function(){
    $("#lgs-marquee").fadeOut();
});

// Parachute hover marquee
$("#parachute-hover").mouseover(function(){
    $("#parachute-marquee").fadeIn();
});

$("#parachute-hover").mouseleave(function(){
    $("#parachute-marquee").fadeOut();
});

const skills = [
    "a product designer", 
    "a front-end developer", 
    "an apparel designer", 
    "a hardware designer", 
    "a car part 3D printer", 
    "a music producer", 
    "an animator"
];

const skillFlash = () => {
    
    var timer = 0;

    for (let i = 0; i < skills.length; i++) {

        setTimeout( () => {
            document.getElementById('.skill-flash').innerHTML = skills[i];
        }, timer);

        timer = timer + 3000;
    }
}

skillFlash();


// const skillFlash = () => {

//     let count = 0;

//     count++;
// }

// $("#skill-flash").text(skillFlash);

