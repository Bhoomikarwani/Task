// 1. Select all the question containers (the parent divs)
const allQuestions = document.querySelectorAll('.ques');

// 2. Loop through each question container
allQuestions.forEach((questionBox) => {

    // Scope the variables: Find elements ONLY inside this specific questionBox
    // Note: We use querySelector (singular) to find the first match inside this box
    const dropdown = questionBox.querySelector("select");
    const msg = questionBox.querySelector(".msg"); 
    const button = questionBox.querySelector(".btn"); // Assumes your Show Answer button has class="btn"
    const showAns = questionBox.querySelector(".show-ans");
    const hideBtn = questionBox.querySelector(".hide-btn"); // Make sure to add this class in HTML

    // LOGIC 1: Handle Dropdown Changes
    dropdown.addEventListener("change", () => {
        let selectedValue = dropdown.value;

        const correctAnswer = dropdown.dataset.correct; 

        let isCorrect = false;

       // COMPARE USER SELECTION VS CORRECT ANSWER
       if (selectedValue === correctAnswer) {
         isCorrect = true;
       }

        // If user selects the default "Select one", hide the message
        if (selectedValue === "") {
            msg.style.display = "none";
            return;
        }

        msg.style.display = "block"

        


        
        // isCorrect = false;
        
        // Simple check logic (You can expand this or make it dynamic)
       // if (selectedValue === "lotus" || selectedValue === "Pandu" || selectedValue === "Karnam Malleswari") {
        //      isCorrect = true;
        // }

        if (isCorrect) {
            msg.innerText = "Correct Answer";
            msg.classList.remove("wrong");
            msg.classList.add("correct");
            button.style.display = "none"; // Hide 'Show Answer' button
            dropdown.disabled = false; // Keep it enabled or disable as you prefer
        } else {
            msg.innerText = "Incorrect Answer";
            msg.classList.remove("correct");
            msg.classList.add("wrong");
            button.style.display = "block"; // Show 'Show Answer' button
            dropdown.disabled = true; // Lock the dropdown so they can't change it
        }
});

    // LOGIC 2: Handle "Show Answer" Button
    if (button) {
        button.addEventListener("click", () => {
            if (showAns) {
                showAns.classList.remove("show");
            }
        });
    }

    // LOGIC 3: Handle "Hide Answer" Button
    if (hideBtn) {
        hideBtn.addEventListener("click", () => {
            if (showAns) {
                showAns.classList.add("show");
            }
        });
    }
});