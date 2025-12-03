const checkInput = () => {
    let inVal = document.querySelector("#name").value;

    if(inVal == "hello"){
        alert("hello!");
    }

    else if(inVal){
        let t = document.createElement("h1");
        let tText = document.createTextNode(inVal);
        t.append(tText);
        document.body.append(t);
        if(inVal == "red"){
            t.style.color = "red";
        }
        else if(inVal == "blue"){
            t.style.color = "blue";
        }
        else if(inVal == "green"){
            t.style.color = "green";
        }
        else if(inVal == "yellow"){
            t.style.color = "yellow";
        }
    }
    else if(inVal == "hello"){
        //unreachable code!
        alert("Hello");
    }
    else{
        alert("No text entered. Please enter text into the box and try again.");
    }
}

function makeThings(){
    let i = 0;
    while(i < 20){
        let t2 = document.createElement("p");
        let t2Text = document.createTextNode("Added with loop");
        t2.append(t2Text);
        document.body.appendChild(t2);

        i = i + 1;
        //i++
    }
}

document.querySelector("button").addEventListener("click", checkInput);
document.addEventListener("DOMContentLoaded", makeThings);