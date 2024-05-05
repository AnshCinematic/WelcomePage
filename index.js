let myName = document.querySelector("[data-input]");
let display = document.querySelector("[data-name]");
let btn = document.getElementById("#btn");
let para = document.querySelector(".content");
btn.addEventListener("click", displayName);

function displayName(){
    display.innerHTML=myName.value;
    para.style.display = 'list-item';
}