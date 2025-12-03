var headings = [["About","A paragraph about us."],
["History", "A paragraph about our history."],
["Our Products", "A paragraph about our products."],
["Contact", "Our contact information"]];

var todoItems = [];

/*let h = document.createElement("h1");
h.append(headings[0]);
document.body.appendChild(h);*/

const addSections = () => {
    let m = document.createElement("main");
    document.body.appendChild(m);

    let i = 0;

    while(i < headings.length){
        let s = document.createElement("section");

        let h = document.createElement("h1");
        let p = document.createElement("p");

        h.append(headings[i][0]);
        p.append(headings[i][1]);

        s.appendChild(h);
        s.appendChild(p);

        m.appendChild(s);
        
        i++;
    }
}

function listAdd(){
    let t = document.querySelector("#item").value;
    if(t){
        todoItems.push(t);
        renderArray();
    }
}

function renderArray(){
    let l = document.querySelector("#list");
    l.innerHTML = "";
    for(let todoItem of todoItems){
        let i = document.createElement("li");
        i.append(todoItem);
        l.appendChild(i);
    }
}

function styleArticles(){
    let articles = document.querySelectorAll("article");
    for(let i = 0; i < articles.length; i++){
        articles[i].style.width = "50px";
        articles[i].style.height = "50px";
        articles[i].style.border = "5px solid lime";
    }
    articles.forEach(article => {
        article.addEventListener("click", function(){
            article.remove();
        })
        /*article.addEventListener("mouseleave", function(){
            article.style.backgroundColor = "white";
        })*/
    })
}

document.addEventListener("DOMContentLoaded", addSections);
document.querySelector("button").addEventListener("click", listAdd);
document.addEventListener("DOMContentLoaded", styleArticles);

