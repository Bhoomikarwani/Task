let btn24 = document.getElementById("tab-2024");
let btn25 = document.getElementById("tab-2025");
let box24 = document.getElementById("kbc2024");
let box25 = document.getElementById("kbc2025");

box24.style.display = "block";
box25.style.display = "none";

btn24.style.backgroundColor = "white";
btn24.style.color = "black";

btn25.style.backgroundColor = "rgba(255,255,255,0.4)";
btn25.style.color = "white";

btn24.onclick = function() {
    box24.style.display = "block";
    box25.style.display = "none";
    btn24.style.backgroundColor = "white";
    btn24.style.color = "black";

    btn25.style.backgroundColor = "rgba(255,255,255,0.4)";
    btn25.style.color = "white";
}
btn25.onclick = function() {
    box25.style.display = "block";
    box24.style.display = "none";
    btn25.style.backgroundColor = "white";
    btn25.style.color = "black";

    btn24.style.backgroundColor = "rgba(255,255,255,0.4)";
    btn24.style.color = "white";
}