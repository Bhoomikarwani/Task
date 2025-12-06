let boxes=document.querySelectorAll('.box');
let reset=document.getElementById('reset');
let   totalClicksELement=document.getElementById('number');
let totalClicks=0;
const counts={
    red:0,
    blue:0,
    green:0,
}
const colors={red:'red',blue:'blue',green:'green'};



boxes.forEach(box=>{
   box.addEventListener('click',()=>{
    totalClicks++;
    totalClicksELement.innerText=totalClicks;
    let color=box.getAttribute('data-color');
   
    // 1. You start here(box)
    // 2. You go UP one level (.parentElement)
   // 3. You look DOWN inside that wrapper to find the paragraph with the ID
   //.querySelector('.clicks p[id]')
   //In simple terms, parseInt stands for "Parse Integer." It is a translator that converts Text (String) into a Number .
    let countDisplay = box.parentElement.querySelector('.clicks p[id]'); 
         let currentCount = parseInt(countDisplay.innerText);
         countDisplay.innerText = currentCount + 1;

    
    if(color==='red'){
        // red->blue
        box.classList.add('blue');
        box.classList.remove('red');
        box.setAttribute('data-color','blue');
    }
    else if(color==='blue'){
        //blue->green
        box.classList.add('green');
        box.classList.remove('blue');
        box.setAttribute('data-color','green');
    }
    else {
        //green->red
        box.classList.add('red');
         box.classList.remove('green');
         box.setAttribute('data-color','red');
    }
   
   });
});

reset.addEventListener('click',()=>{
    totalClicks = 0;
    totalClicksELement.innerText=0;

    
    boxes.forEach((box, index) =>{
       //index always starts from zero
        let countDisplay = box.parentElement.querySelector('.clicks p[id]');
        countDisplay.innerText = 0;
        // Remove all color classes first to be safe
        box.classList.remove('red', 'blue', 'green');
        // Box 1 (index 0) was Red, Box 2 (index 1) was Blue, Box 3 (index 2) was Green
        if(index===0){
            box.classList.add('red');
            box.setAttribute('data-color', 'red');
        }
        else if(index===1){
            box.classList.add('blue');
            box.setAttribute('data-color', 'blue');
        }
        else if(index===2){
            box.classList.add('green');
            box.setAttribute('data-color', 'green');
        }
        
    });

});
