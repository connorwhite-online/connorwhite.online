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
    "product designer", 
    "developer",
    "crypto nerd",
    "AR Futurist",
    "apparel designer", 
    "hardware designer", 
    "car part 3D printer", 
    "anti-capitalist",
    "music producer",
    "animator"
];

let displayIndex = 0;
let elem = document.getElementById('skill-flash');
let delay = 3000; // 3 second delay

setInterval(() => {
  if (elem) {
    elem.innerHTML = skills[displayIndex];
    console.log(skills[displayIndex]);
  }
  
  // Move to the next item in dialog
  displayIndex++;
  
  // If display index goes out of index range, start again
  if (displayIndex >= skills.length) {
    displayIndex = 0;
  }
}, delay);

