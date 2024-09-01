var cur = document.querySelector("#cursor");
var blr = document.querySelector("#cursor_blur");
var h4all = document.querySelectorAll("#nav h4");
var login_btn = document.querySelector("#nav button");
// var main = document.querySelector("#main");
var login_page = document.querySelector(".wrapper_login");
var icon_rmv = document.querySelector(".wrapper_login i");
const sign_up_page = document.querySelector(".wrapper_sign_up");
var icon_rmv2 = document.querySelector(".wrapper_sign_up i");
const link1 = document.querySelector(".wrapper_login a");
const link2 = document.querySelector(".wrapper_sign_up a");

//responsive

const responsive_icon = document.querySelector("#nav i");
const res_nav = document.querySelector(".response_nav");

document.addEventListener("mousemove",(dets)=>{   // dets => attributes of mouse movement are taken
    // console.log(dets.x);
    cur.style.left = dets.x + "px"
    cur.style.top = dets.y + "px"
    blr.style.left = dets.x -150+ "px"
    blr.style.top = dets.y -150+ "px"
})

h4all.forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
        // console.log(dets);
        cur.style.scale = 4
        cur.style.border = "solid 0.1px #fff"
        cur.style.backgroundColor = "transparent"
        cur.style.transition = "all ease 0.2s"
    })
    elem.addEventListener("mouseleave",()=>{
        cur.style.scale = 1
        cur.style.border = "#95C11E"
        cur.style.backgroundColor = "#95C11E"
        cur.style.transition = "0s"
    })
})

login_btn.addEventListener("click", ()=>{
    login_page.classList.add("pop_up");
})
icon_rmv.addEventListener("click", ()=>{
    login_page.classList.remove("pop_up");
    sign_up_page.classList.remove("pop_up");
    login_btn.removeAttribute("disabled");         // Enable login button
})
link1.addEventListener("click", ()=>{
    login_page.classList.remove("pop_up");
    sign_up_page.classList.add("pop_up");
    login_btn.setAttribute("disabled", "true");     // Disable login button
})
link2.addEventListener("click", ()=>{
    sign_up_page.classList.remove("pop_up");
    login_page.classList.add("pop_up");
    login_btn.setAttribute("disabled", "true");    // Disable login button
})
icon_rmv2.addEventListener("click", ()=>{
    login_page.classList.remove("pop_up");
    sign_up_page.classList.remove("pop_up");
    login_btn.removeAttribute("disabled");        // Enable login button
})

// responsive

responsive_icon.addEventListener("click",()=>{
    res_nav.classList.toggle("active");
})
document.addEventListener("click",(event)=>{
    if(!responsive_icon.contains(event.target) && !res_nav.contains(event.target)){
        res_nav.classList.remove("active");
    }
})

gsap.to("#nav",{
    duration: 0.5,
    delay: 0.5,
    backgroundColor: "black",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -30%",
        end: "top -90%",
        scrub: 2
    }
})

gsap.from("#about_sec",{
    y : 60,
    opacity : 0,
    duration: 1,
    scrollTrigger:{
        // markers : true,
        trigger : "#about_sec",
        scroller : "body",
        start : "top 80%",
        end: "top 10",
        scrub: 2 
    }
})
gsap.from("#i1",{
    y : -20,
    x : -20,
    scale : 0.2,
    duration: 1,
    scrollTrigger:{
        // markers : true,
        trigger : "#i1",
        scroller : "body",
        start : "top 60%",
        end: "top 50%",
        scrub: 2 
    }
})
gsap.from("#i2",{
    y : 20,
    x : 20,
    scale : 0.2,
    duration: 1,
    scrollTrigger:{
        // markers : true,
        trigger : "#i1",
        scroller : "body",
        start : "top 50%",
        end: "top 40%",
        scrub: 2 
    }
})
gsap.from("#last_up",{
    y : 60,
    scale: 0.9,
    duration: 1,
    scrollTrigger:{
        // markers : true,
        trigger : "#last_up",
        scroller : "body",
        start : "top 80%",
        end: "top 65%",
        scrub: 2 
    }
})
gsap.from("#last_up h1",{
    y : 40,
    duration: 1,
    scrollTrigger:{
        // markers : true,
        trigger : "#last_up h1",
        scroller : "body",
        start : "top 85%",
        end: "top 75%",
        scrub: 2 
    }
})