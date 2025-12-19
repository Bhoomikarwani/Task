let dropdown= document.getElementById("msg-select");
let msg=document.getElementById("msg");
let counter=document.getElementById("counter");
let clear=document.getElementById("clear");
let count=0;
dropdown.addEventListener("change", ()=>{
    let selectedValue=dropdown.value;
    if(selectedValue===""){
        msg.style.display="none";
        return;
    }
    msg.style.display="block";

    if(selectedValue==="success"){
       msg.innerText="✓ Operation successful!";
       msg.classList.remove("success","warning","error","info");
       msg.classList.add("success");
       count++;
       counter.innerText=count;
    }
    else if(selectedValue==="warning"){
        msg.innerText="⚠ Please review your input";
        msg.classList.remove("success","warning","error","info");
        msg.classList.add("warning");
        count++;
        counter.innerText=count;
    }
    else if(selectedValue==="error"){
        msg.innerText="✗ Something went wrong";
        msg.classList.remove("success","warning","error","info");
        msg.classList.add("error");
        count++;
        counter.innerText=count;
    }
    else if(selectedValue==="info"){
        msg.innerText="ℹ Here's some information";
        msg.classList.remove("success","warning","error","info");
        msg.classList.add("info");
        count++;
        counter.innerText=count;
    }
});

//clear button
clear.addEventListener("click",()=>{
    selectedValue="";
    msg.style.display="none";
    dropdown.value="";
});
