const buttons=document.querySelectorAll(".btn");
const leadercolor=document.getElementById("leadercolor");
const count=document.getElementById("color");
const reset=document.getElementById("reset");
let counter=0;
const counts={
    red:0,
    blue:0,
    green:0,
    yellow:0,
}
const colors={red:'red',blue:'blue',green:'green',yellow:'yellow'};

buttons.forEach(btn=>{
   btn.addEventListener("click" , ()=>{
    let color=box.getAttribute('data-color');
    btn.classList.add("transition");

   let countDisplay = btn.parentElement.querySelector('.msg span[id]'); 
      let currentCount = parseInt(countDisplay.innerText);
       countDisplay.innerText = currentCount + 1;

   // if(color==='red'){
        
   //  }    
   });
});