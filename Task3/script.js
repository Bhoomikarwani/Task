const textarea=document.getElementById("textarea");
const originalText=document.getElementById("original"); 
const upperCaseText=document.getElementById("uppercase"); 
const lowerCaseText=document.getElementById("lowercase");
const resetBtn=document.getElementById("resetBtn");
const copyBtn=document.getElementById("copyBtn");
 let counter=document.getElementById("counter");

textarea.addEventListener("input",()=> {
    let text=textarea.value;
    
    originalText.innerText=text;
    upperCaseText.innerText=text.toUpperCase();
    lowerCaseText.innerText=text.toLowerCase();
    counter.innerText=text.length;
});

resetBtn.addEventListener("click",()=>{
    textarea.value="";
    originalText.innerText="";
    upperCaseText.innerText="";
    lowerCaseText.innerText="";
    counter.innerText=0;
});

copyBtn.addEventListener("click", ()=>{
    let copy=upperCaseText.innerText;
});


