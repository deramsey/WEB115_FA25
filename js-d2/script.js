var h = document.createElement("header");
var m = document.createElement("main");
var f = document.createElement("footer");

document.body.insertBefore(m, document.querySelector("script"));
document.body.insertBefore(h, m);
m.after(f);

document.body.style.boxSizing = "border-box";
document.body.style.margin = "0";
document.body.style.padding = "0";

document.body.style.backgroundColor = "#525252";

h.style.backgroundColor = "#ccc";
h.style.minHeight = "10vh";
h.style.padding = "1px";

m.style.backgroundColor = "white";
m.style.minHeight = "70vh";
m.style.width = "50%";
m.style.margin = "0 auto";
m.style.padding = "12px";

f.style.backgroundColor = "#ccc";
f.style.minHeight = "20vh";

h.innerHTML = "<h1>Hello World!</h1>";

var subheader = document.createElement("h2");
var subcontent = document.createTextNode("This is my Subheading");
subheader.appendChild(subcontent);
m.appendChild(subheader);

var b = document.createElement("button");
var btext = document.createTextNode("Click Me!");
b.appendChild(btext);
m.appendChild(b);

const addParagraph = () => {
    let p = document.createElement("p");
    let t = document.createTextNode("Added Paragraph!");
    p.appendChild(t);
    m.appendChild(p);
}

b.addEventListener("click", addParagraph);

var b2 = document.createElement("button");
var b2text = document.createTextNode("Bring it Back!");
b2.appendChild(b2text);
m.appendChild(b2);

subheader.addEventListener("click", function(event){
    event.target.parentNode.removeChild(subheader);
});

b2.addEventListener("click", function(event){
    m.insertBefore(subheader, b);
})