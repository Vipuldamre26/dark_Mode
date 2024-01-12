let body = document.querySelector("body");
let btn = document.querySelector(".btn");
let heading = document.querySelector("h1");
let circle = document.querySelector(".circle");
circle.style.backgroundColor = "white";
btn.style.backgroundColor = "black";

let toggle = false;

btn.addEventListener("click", () => {
    if(!toggle){
        circle.classList.add("dark-mode");
        circle.style.backgroundColor = "black";
        btn.style.backgroundColor = "white";
        body.style.backgroundColor = "black";
        heading.style.color = "white";
        toggle = true;
    }
    else{
        circle.classList.remove("dark-mode");
        circle.style.backgroundColor = "white";
        body.style.backgroundColor = "white";
        btn.style.backgroundColor = "black";
        heading.style.color = "black";
        toggle = false;
    }

})