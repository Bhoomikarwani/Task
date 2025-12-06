let showall=document.getElementById('showall');
let hideall=document.getElementById('hideall');

let count=document.getElementById("count");
let counter=0;

let biobtn=document.getElementById('ShowBio');
let bio=document.getElementById('bio');
let mode1="hide";
bio.classList.add("hide");
biobtn.addEventListener("click",()=>{
   if(mode1=="hide"){
      mode1="show";
      bio.classList.remove("hide");
      biobtn.innerText="Hide Bio";
      counter++;
      count.innerText=counter;
   }
   else{
      mode1="hide";
      bio.classList.add('hide');
      biobtn.innerText="Show Bio";
      counter--;
      count.innerText=counter;
   }
});

let skillbtn=document.getElementById('ShowSkills');
let skills=document.getElementById('skills');
let mode2="hide";
skills.classList.add("hide");
skillbtn.addEventListener("click",()=>{
   if(mode2=="hide"){
      mode2="show";
      skills.classList.remove("hide");
      skillbtn.innerText="Hide Skills";
      counter++;
      count.innerText=counter;
   }
   else{
      mode2="hide";
      skills.classList.add("hide");
      skillbtn.innerText="Show Skills";
      counter--;
      count.innerText=counter;
   }
});

let hobbiesbtn=document.getElementById('ShowHobbies');
let hobbies=document.getElementById('hobbies');
let mode3="hide";
hobbies.classList.add("hide");
ShowHobbies.addEventListener("click",()=>{
   if(mode3=="hide"){
      mode3="show";
      hobbies.classList.remove("hide");
      ShowHobbies.innerText="Hide Hobbies";
      counter++;
      count.innerText=counter;
   }
   else{
      mode3="hide";
      hobbies.classList.add('hide');
      ShowHobbies.innerText="Show Hobbies";
      counter--;
      count.innerText=counter;
   }
});

showall.addEventListener('click',()=>{  //hum suddenly count ko 3 nhi kar sakte
   //if close than open
   if(mode1=="hide"){
      mode1="show";
      bio.classList.remove("hide");
      biobtn.innerText="Hide Bio";
      counter++;
      count.innerText=counter;
   }
   if(mode2=="hide"){
      mode2="show";
      skills.classList.remove("hide");
      skillbtn.innerText="Hide Skills";
      counter++;
      count.innerText=counter;
   }
    if(mode3=="hide"){
      mode3="show";
      hobbies.classList.remove("hide");
      ShowHobbies.innerText="Hide Hobbies";
      counter++;
      count.innerText=counter;
   }
});

hideall.addEventListener('click',()=>{
  count.innerText=0;
  counter=0;
   if(mode1!="hide"){
      mode1="hide";
      bio.classList.add("hide");
      biobtn.innerText="Show Bio";
   }
   if(mode2!="hide"){
      mode2="hide";
      skills.classList.add("hide");
      skillbtn.innerText="Show Skills";   
   }
   if(mode3!="hide"){
      mode3="hide";
     hobbies.classList.add('hide');
      ShowHobbies.innerText="Show Hobbies";
   }
});