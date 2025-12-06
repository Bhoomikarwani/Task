let buttons = document.querySelectorAll('.btn');
let msg= document.getElementById('msg');
let reset=document.getElementById('reset');

let currentReaction=null;
const counts={
  like:0,
  dislike:0
};

function handleReaction(clickedType){
  //if you again click the same button
   
   if(currentReaction=== clickedType){
    counts[clickedType]--;
    document.getElementById(clickedType).classList.remove('selected');
    //reset 
    currentReaction=null;
    msg.innerText="You haven't clicked";
   }

  

  else{
    //if your reaction is going to change
    if(currentReaction){
    counts[currentReaction]--;
    document.getElementById(currentReaction).classList.remove('selected');
     }
  
  //new selection
  currentReaction=clickedType;
  counts[clickedType]++;
  document.getElementById(clickedType).classList.add('selected');
  const msgText={like:'👍', dislike:'👎'};
  msg.innerText=`You clicked ${msgText[clickedType]}`;
  }

   updateCount();
}
function updateCount(){
  document.getElementById('1').innerText=counts.like;
   document.getElementById('2').innerText=counts.dislike;
}

buttons.forEach(btn=>{
  btn.addEventListener('click' , ()=>{
    let type=btn.getAttribute('data-type');
    handleReaction(type);
   });
});

function resetGame(){
  counts[currentReaction]--;
   updateCount();
   document.getElementById(currentReaction).classList.remove('selected');
   currentReaction=null;
  msg.innerText="You haven't clicked";
  
}

//button event
reset.addEventListener('click', resetGame);