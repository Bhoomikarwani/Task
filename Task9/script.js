let smallerBtn=document.getElementById("smallerbtn");
let largerBtn=document.getElementById("largerbtn");
let sizeSlider=document.getElementById("sizeSlider");
let currentSize=document.getElementById("currentSize");
let para=document.getElementById("para");
let presetbtns=document.querySelectorAll(".presetbtn");
let resetbtn=document.getElementById("resetbtn");

function updateSize(newSize){
    let size=parseInt(newSize);
    //for smaller btn
    if(size<=10){
        size=10;
        smallerBtn.disabled=true;
    }
    else{
         smallerBtn.disabled=false;
    }
    //for larger btn
    if(size>=40){
        size=40;
        largerBtn.disabled=true;
    }
    else{
        largerBtn.disabled=false;
    }


    para.style.fontSize = size + "px"; 
    currentSize.innerText = size;        
    sizeSlider.value = size;
}
sizeSlider.addEventListener("input",()=>{
    updateSize(sizeSlider.value);
});

smallerBtn.addEventListener("click",()=>{
   let currentValue=sizeSlider.value;  //sizeSlider.value return string value
   currentValue=parseInt(currentValue)-2;  //parseInt converts string into int
   updateSize(currentValue);
});
largerBtn.addEventListener("click",()=>{
   let currentValue=sizeSlider.value;
   currentValue=parseInt(currentValue)+2;
   updateSize(currentValue);
});
presetbtns.forEach(btn => {
    btn.addEventListener("click",()=>{
      let newsize=btn.getAttribute("data-size");
      updateSize(newsize);
    });
});
resetbtn.addEventListener("click",()=>{
    updateSize(16);
});