// locomotive js - smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// gsap to animate
gsap.from(".nlink",{
    stagger: .2,
    y: 10,
    duration: 1,
    ease: Power2,
    opacity: 0,
})

gsap.from(".anim2",{
    y: 50,
    stagger: .3,
    opacity: 0,
    ease: Expo,
    duration: 1
})

Shery.textAnimate("#headings h1", {
    style: 2,
    y: 10,
    delay: 0.3,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
});

document.querySelector("#ftext")
.addEventListener("mouseover", function(){
    gsap.to("#future video",{
        opacity: 1,
        duration: 1,
        ease: Power4
    })
})

document.querySelector("#ftext")
.addEventListener("mouseleave", function(){
    gsap.to("#future video",{
        opacity: 0,
        duration: 1,
        ease: Power4
    })
})