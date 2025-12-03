function showMessage(){
    alert("Button was Clicked!");
}

function dontGo(){
    document.title = "Don't Leave. Come Back!"
}

function comeBack(){
    document.title = "Document";
}

document.querySelector("#msg").addEventListener("click", showMessage);
window.addEventListener("blur", dontGo);
window.addEventListener("focus", comeBack);

document.querySelector("#name").addEventListener("keyup", function(){
    document.querySelector("#nameOutput").innerHTML = document.querySelector("#name").value;
})


document.querySelector("#outer").addEventListener("click", function() {
    console.log("Outer capturing");
}, true);

document.querySelector("#inner").addEventListener("click", function(){
console.log("Inner target");
});


document.querySelector("#outer").addEventListener("click", function() {
    console.log("Outer bubbling");
});

document.querySelector("#menu").addEventListener("click", function(event){
    console.log(event.target.dataset.page)
})

document.querySelector("#buttonParent").addEventListener("click", function(e){
    document.querySelector("#fontChange").style.fontSize = e.target.dataset.page;
});

document.addEventListener("keydown", (e) => {
if(e.key === "z"){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
})