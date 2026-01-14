let cursor = document.querySelector(".cursor")
let page1 = document.querySelector(".page1")
let img = document.querySelector("img")
let parentdiv = document.querySelector(".parent")
page1.addEventListener("mousemove",function(el){
    let xaxis = el.x
    let yaxis = el.y
    gsap.to(cursor,{
        x:xaxis,
        y:yaxis,
        duration:1,
        ease:"back.out"

    })
})

parentdiv.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:2,
        
    })
})

parentdiv.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:1
    })
})