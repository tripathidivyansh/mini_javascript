document.getElementById("myId");
document.getElementByClassName("class");
document.getElementBy("p");
document.querySelector(".closs")
document.querySelectorAll("div");

document.getElementById("demo").style.color = "blue"
document.getElementById("demo").innerHTML = "Hello World";

document.getElementById("demo").style.color = "blue"

document.getElementById("btn").addEventListener("click", function(){
    alert("Button clicked!");
});

let newPara = document.createElement("p");
newPara.textContent = "This is a new paragraph";

document.body.appendChild(newPara);