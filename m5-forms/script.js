const getColor = () => {
    console.log(document.querySelector("#color").value);
}

document.querySelector("#color").addEventListener("change", getColor);