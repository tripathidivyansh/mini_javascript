document.getElementById("main-title").innerHTML = "welcome!";

document.getElementById("main-title").textContent = "Hello World";



document.getElementById("myLink").href = "https://example.com";

document.getElementById("main-title").style.color = "blue";

document.getElementById("main-title").style.fontSize = "24px";

let element = document.getElementById("box");
element.classList.add("active");
element.classList.remove("hidden");


// Add or remove claSSeS

let element1 = document.getElementById("box");
element.classList.add("active");
element.classList.remove("hidden");

// remove element 
let element2 = document.getElementById("oldDiv");
element2.remove();


document.getElementById("btn").addEventListener("click", function(){
    alert("button was clicked!");
});