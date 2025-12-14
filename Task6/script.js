let next=document.getElementById("next");
let previous=document.getElementById("previous");
let imageBox=document.querySelector(".imagebox");
let counter=document.getElementById("number");
let alldots=document.querySelectorAll(".dots");

let index=0;
previous.disabled=true;

next.addEventListener("click" ,()=>{
    if(index==0){
        index=1;
        imageBox.classList.add("red"); 
        counter.innerText="1";
        previous.disabled=false;
        updateDots();
    }
    else if(index==1){
        index=2;
        imageBox.classList.remove("red"); 
        imageBox.classList.add("yellow"); 
        counter.innerText="2";
          previous.disabled=false;
        updateDots();
    }
    else if(index==2){
        index=3;
        imageBox.classList.remove("yellow"); 
        imageBox.classList.add("blue"); 
        counter.innerText="3";
          previous.disabled=false;
        updateDots();
    }
    else if(index==3){
        index=4;
        imageBox.classList.remove("blue"); 
        imageBox.classList.add("green"); 
        counter.innerText="4";
          previous.disabled=false;
        updateDots();
    }
    else if(index==4){
        index=5;
        imageBox.classList.remove("green"); 
        imageBox.classList.add("pink"); 
        counter.innerText="5";
          previous.disabled=false;
        updateDots();
    }
    else{
        next.disabled= true;
    }
});

previous.addEventListener("click",()=>{
   if(index==5){
        index=4;
        imageBox.classList.remove("pink");
        imageBox.classList.add("green"); 
        counter.innerText="4";
         next.disabled= false;
         previous.disabled=false;
        updateDots();
    }
    else if(index==4){
        index=3;
        imageBox.classList.remove("green"); 
        imageBox.classList.add("blue"); 
        counter.innerText="3";
         next.disabled= false;
         previous.disabled=false;
        updateDots();
    }
    else if(index==3){
        index=2;
        imageBox.classList.remove("blue"); 
        imageBox.classList.add("yellow"); 
        counter.innerText="2";
         next.disabled= false;
         previous.disabled=false;
        updateDots();
    }
    else if(index==2){
        index=1;
        imageBox.classList.remove("yellow"); 
        imageBox.classList.add("red"); 
        counter.innerText="1";
        previous.disabled=true;
         next.disabled= false;
        updateDots();
    }
});

function updateDots(){
    alldots.forEach((val ,i)=>{  //i=0,1,2,3,4
      val.classList.remove("bigger");
        if (i === index - 1) {
            val.classList.add("bigger");
        }
    });
}

let first=document.getElementById("first");
let last=document.getElementById("last");
first.addEventListener("click",()=>{
    index=1;
    imageBox.classList.remove("yellow","blue","green","pink");
    imageBox.classList.add("red");
    updateDots();
    counter.innerText="1";
    previous.disabled=true;
    next.disabled=false;
});
last.addEventListener("click",()=>{
    index=5;
    imageBox.classList.remove("red","yellow","blue","green");
    imageBox.classList.add("pink");
    updateDots();
    next.disabled=true;
    previous.disabled=false;
    counter.innerText="5";
})
