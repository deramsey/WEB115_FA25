var input = document.querySelector("#name");

/*Standard Function Notation*/
function helloWorld(msg){
    /*alert(msg);*/
    document.querySelector("#output").innerHTML = msg;
}

/*Arrow Function Notation*/
const changeBg = () => {
    /*document.body.style.backgroundColor = "#ff7755";*/
    console.log(document.querySelector("#bg").value);
    localStorage.setItem('background', document.querySelector("#bg").value);
    document.body.style.backgroundColor = document.querySelector("#bg").value;
    document.querySelector("section").style.backgroundColor = document.querySelector("#bg").value;
}

const loadBg = () => {
    let color =  localStorage.getItem('background');
    document.body.style.backgroundColor = color;
    document.querySelector("section").style.backgroundColor = color;
}

function hoverSquare() {
    document.querySelector("section").style.border = "6px dotted yellow";
}

function addImage() {
    document.querySelector("img").src = "https://res.cloudinary.com/dwuwuaov5/image/upload/c_scale,w_480/f_webp/WEB%20115%20Fa25/pexels-jakeheinemann-1482101";
    document.querySelector("img").setAttribute("alt", "A farmer wearing a cowboy hat");
}

document.querySelector("#hello").addEventListener("click", function(e){helloWorld(`Hello ${input.value}!`)});
document.querySelector("#bg").addEventListener("change", changeBg);
document.addEventListener("DOMContentLoaded", loadBg);
document.querySelector("section").addEventListener("mouseenter", hoverSquare);
document.querySelector("section").addEventListener("mouseleave", () => {
    document.querySelector("section").style.border = "2px solid black";
});
document.addEventListener("DOMContentLoaded", addImage);