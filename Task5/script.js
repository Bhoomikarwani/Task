const buttons=document.querySelectorAll(".btn");
const leaderColor=document.getElementById("leadercolor");
const leaderCount=document.getElementById("leadercolor");
const reset=document.getElementById("reset");
const counts={
    red:0,
    blue:0,
    green:0,
    yellow:0,
}
const colors={red:'red',blue:'blue',green:'green',yellow:'yellow'};

function updateLeader(){
    const values=Object.values(counts);
    const max=Math.max(...values);

    let winners=[];

    if(counts.red==max){
        winners.push("Red");
    }
    if(counts.blue==max){
        winners.push("Blue");
    }
    if(counts.green==max){
        winners.push("Green");
    }
    if(counts.yellow==max){
        winners.push("Yellow");
    }
    if (max === 0) {
        leaderColor.innerText = "";
        leaderCount.innerText = "";
    } else {
        // .join(" & ") automatically handles ties! 
        // example if red and blue win, it writes "Red & Blue"
        leaderColor.innerText = winners.join(" & ");
        leaderCount.innerText = winners + " with " + max + " clicks ";
    }

     buttons.forEach(btn => {
       
        let btnColor = btn.getAttribute("data-color");
        if (counts[btnColor] === max && max > 0) {
            btn.classList.add("winner"); 
        } else {
            btn.classList.remove("winner");
        }
    });
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let color = btn.getAttribute('data-color');
        counts[color]++;

        let countDisplay = btn.parentElement.querySelector('.msg span');
        countDisplay.innerText = counts[color];

        updateLeader();
    });
});

reset.addEventListener("click",()=>{
    let counts={ red:0,blue:0, green:0,yellow:0,}
    const allSpans=document.querySelectorAll(".msg span");
    allSpans.forEach(span=>{
        span.innerText=0;
    });
    leaderColor.innerText="";
    leaderCount.innerText="";
    buttons.forEach(btn=>{
        btn.classList.remove("winner");
    });
});