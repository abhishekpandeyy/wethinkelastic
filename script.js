

gsap.to('.scrollerPage h1', {
    scrollTrigger: {
        trigger: '.scrollerPage',
        pin: true,
        scroller: 'body',
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
        scroller: 'body',
        scrub: 5,
        start: 'top -30%',
        end: 'bottom -25%',
        
    },
    // duration:2,
    width: '100%',
    // height: 'auto',
})

var cursor = document.querySelector('.followerOfImg');

var imgg=document.querySelectorAll('.divs');


document.addEventListener('mousemove',function(details){
    // console.log(details.target.classList.contains('divs'));
    gsap.to('#followerOfImg',{
        top:details.y,
        left:details.x,
        
    })
})


imgg.forEach(function(elem)
{
    elem.addEventListener('mouseenter',function(){
        console.log("enter");
        gsap.to('#followerOfImg',{
            transform: 'translate(-50%,-50%) scale(1)',
            opacity:1,
            delay:.2,
            duration:.6,
        })
    })
    elem.addEventListener('mouseout',function(){
        console.log("leave");
        gsap.to('#followerOfImg',{
            transform: 'translate(-50%,-50%) scale(0)',
            opacity:0,
            delay:0,
        })
       
    })
})

gsap.to('#rototingImg',{
    rotate:360,
    duration:13,
    ease:'none',
    repeat:-1,

})

Shery.textAnimate('#hello',{
    y:80,
    duration:4,
})
