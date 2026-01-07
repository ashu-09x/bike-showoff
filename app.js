let lt = gsap.timeline();

lt.from(".centre h1",{
    opacity: 0,
    duration: 0.8,
    y: -200
})
.from(".left",{
    opacity: 0,
    duration: 0.6,
    y: -150
}, "-=0.4")
.from(".right",{
    opacity: 0,
    duration: 0.6,
    y: -150
}, "-=0.4")
.from(".page1>h1",{
    opacity: 0,
    duration: 0.7,
    y: 40,
    scale: 0.8
})
.from(".images",{
    opacity: 0,
    duration: 0.6,
    y: 40,
    stagger: 0.4
})
.to("#img6",{ rotate: -5,  duration: 0.4 })
.to("#img5",{ rotate: -10, duration: 0.4 })
.to("#img4",{ rotate: -15, duration: 0.4 })
.to("#img3",{ rotate: -20, duration: 0.4 })
.to("#img2",{ rotate: -25, duration: 0.4 })
.to("#img1",{ rotate: -30, duration: 0.4 });

gsap.to(".page2 h1",{
    transform:"translateX(-170%)",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:3,
        pin:true
    }
})