const form = document.getElementById('auditionForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();// If you remove this line: You would click "Submit Application," the page would instantly flash and reload

    const name = document.getElementById('fullname').value;
    const mobile = document.getElementById('mobile').value;
    const state = document.getElementById('state').value;
    const reason = document.getElementById('reason').value;

    if (state === "") {
        alert("Please select your state.");
        return;
    }
    console.log("Form Submitted:", { name, mobile, state, reason });
    
    alert("Thank you, " + name + "! Your audition application has been submitted successfully.");
    form.reset();
});