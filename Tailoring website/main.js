//wrap every latter in span 
var textWrapper = document.querySelector(' .mllo .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
.add({
    targets: '.mllo .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
}).add({
    targets: '.mllo',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
})