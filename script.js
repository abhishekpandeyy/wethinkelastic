

gsap.to('.scrollerPage h1', {
    scrollTrigger: {
        trigger: '.scrollerPage',
        pin: true,
        scroller:'body',
        scrub: 1,
        start: 'top 10%',
        end: 'bottom -40%',
        // markers: true,
    },
    // ease: "slow",
    transform: `translateX(-70%)`,
})
gsap.to('.vidST', {
    scrollTrigger: {
        trigger: '.first',
        // pin: true,
        scroller:'body',
        scrub: 5,
        start: 'top -30%',
        end: 'bottom -25%',
        // markers: true,
    },
    // duration:2,
    width: '100%',
    // height: 'auto',
})


// var importImg=document.querySelectorAll('.import');

// importImg.forEach(function(elem){


// })