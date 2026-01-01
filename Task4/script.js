const listItems=document.querySelectorAll(".ele");
const counter=document.getElementById("counter");
const progressBar = document.getElementById("progress"); //  green bar
const markAll=document.getElementById("markAll");
const unmarkAll=document.getElementById("unmarkAll");
let count=0;
let totalElements=listItems.length;
listItems.forEach(item =>{
    item.addEventListener("click", ()=>{
        item.classList.toggle('completed');
  
       if(item.classList.contains('completed')){
        count++;
       }
       else{
        count--;
       }
    counter.innerText=count;

    const percentage=(count/totalElements)*100;
    progressBar.style.width=percentage + "%";
    });
});
markAll.addEventListener("click",()=>{
    listItems.forEach(val =>{
        val.classList.add("completed");
        count=5;
        counter.innerText=count;
        progressBar.style.width= 100+"%";
    });
});
unmarkAll.addEventListener("click",()=>{
    listItems.forEach(val =>{
        val.classList.remove("completed");
        count=0;
        counter.innerText=count;
        progressBar.style.width= 0+"%";
    });
});
