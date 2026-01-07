let menu = document.querySelector(".left")
let sidebar = document.querySelector(".menu")
let h3 = document.querySelector("nav h3");
let i = document.querySelector("nav i")
function showNav(){
    sidebar.style.display = "block";
    h3.style.color="white"
    h3.style.border="1px white solid"
    i.style.color="white"
    i.style.border="1px white solid"
    
}

function hideNav(){
    sidebar.style.display = "none"
    h3.style.color="black"
    h3.style.border="1px black solid"
    i.style.color="black"
    i.style.border="1px black solid"

}