let buttons = document.querySelectorAll(".color");
let body = document.querySelector("body");
let randomColorBtn = document.getElementById("random-color");
let favBtn = document.getElementById("favorite");
let applyFavBtn = document.getElementById("applyfavorite");

let currentDisplay = document.getElementById("current-color");
let lastDisplay = document.getElementById("last-color");
let savedDisplay = document.getElementById("saved-color");

let currentColor = "None";
let lastColor = "None";
let favoriteColor = "None"; 
let favoriteName = "None";  


// We use this function for EVERYTHING (Clicks, Random, and Favorite)
function updatePage(newColor, newName) {
    // 1. Update Last Color (Requirement 6)
    if (currentColor !== "None") {
        lastColor = currentColor;
        lastDisplay.innerText = currentDisplay.innerText; 
    }
    currentColor = newColor;
    body.style.backgroundColor = currentColor;
    currentDisplay.innerText = newName;

    buttons.forEach(btn => 
      btn.classList.remove("active")
    );
    
    buttons.forEach(btn => {
        if (btn.getAttribute("data-name") === newName) {
            btn.classList.add("active");
        }
    });
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let color = btn.getAttribute("data-color");
        let name = btn.getAttribute("data-name");
        updatePage(color, name);
    });
});

// Random Button
randomColorBtn.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * buttons.length);
    let randomBtn = buttons[randomIndex];
    
    let color = randomBtn.getAttribute("data-color");
    let name = randomBtn.getAttribute("data-name");
  
    updatePage(color, name);
});

// Save Favorite
favBtn.addEventListener("click", () => {
    if (currentColor !== "None") {
        favoriteColor = currentColor;
        favoriteName = currentDisplay.innerText; 
        
        savedDisplay.innerText = favoriteName;
        alert("Color saved as favorite!");
    } else {
        alert("Pick a color first!");
    }
});

//  Apply Favorite
applyFavBtn.addEventListener("click", () => {
    if (favoriteColor !== "None") {
       
        updatePage(favoriteColor, favoriteName);
    } else {
        alert("No favorite saved yet!");
    }
});
