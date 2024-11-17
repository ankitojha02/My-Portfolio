/*================================toggle style switcher============================ */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", ()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
//hide style switcher on scroll 
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
        {
            document.querySelector(".style-switcher").classList.remove("open");
        }
})

/*================================theme colors============================ */
/*let alternateStyles = document.querySelectorAll(".alternate-style")
console.log(alternateStyles);
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(style.getAttribute("title"))
            {
                style.removeAttribute("disabled");
            }
        else {
            style.setAttribute("disabled","true");
        }
    })
}
setActiveStyle();*/
let color2 = document.querySelector(".color-2");
console.log(color2);
color2.addEventListener("click", ()=>{
    document.querySelector("#colors1").setAttribute('disabled', 'true');
    document.querySelector("#colors3").setAttribute('disabled', 'true');
    document.querySelector("#colors4").setAttribute('disabled', 'true');
    document.querySelector("#colors5").setAttribute('disabled', 'true');
     document.querySelector("#colors2").removeAttribute("disabled");
})

let color1 = document.querySelector(".color-1");
console.log(color1);
color1.addEventListener("click", ()=>{
    document.querySelector("#colors2").setAttribute('disabled', 'true');
    document.querySelector("#colors3").setAttribute('disabled', 'true');
    document.querySelector("#colors4").setAttribute('disabled', 'true');
    document.querySelector("#colors5").setAttribute('disabled', 'true');
     document.querySelector("#colors1").removeAttribute("disabled");
   
})

let color3 = document.querySelector(".color-3");
color3.addEventListener("click", ()=>{
    document.querySelector("#colors2").setAttribute('disabled', 'true');
    document.querySelector("#colors1").setAttribute('disabled', 'true');
    document.querySelector("#colors4").setAttribute('disabled', 'true');
    document.querySelector("#colors5").setAttribute('disabled', 'true');
     document.querySelector("#colors3").removeAttribute("disabled");
   
})

let color4 = document.querySelector(".color-4");
color4.addEventListener("click", ()=>{
    document.querySelector("#colors2").setAttribute('disabled', 'true');
    document.querySelector("#colors1").setAttribute('disabled', 'true');
    document.querySelector("#colors3").setAttribute('disabled', 'true');
    document.querySelector("#colors5").setAttribute('disabled', 'true');
     document.querySelector("#colors4").removeAttribute("disabled");
   
})

let color5 = document.querySelector(".color-5");
color5.addEventListener("click", ()=>{
    document.querySelector("#colors2").setAttribute('disabled', 'true');
    document.querySelector("#colors1").setAttribute('disabled', 'true');
    document.querySelector("#colors4").setAttribute('disabled', 'true');
    document.querySelector("#colors3").setAttribute('disabled', 'true');
     document.querySelector("#colors5").removeAttribute("disabled");
   
})

/*================================theme dark and light colors============================ */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", ()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }

    else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})



