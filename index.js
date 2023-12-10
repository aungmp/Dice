 
let player1=document.querySelector(".pOne");
let player2=document.querySelector(".pTwo");
let answer=document.querySelector(".answer");
let nextBtn=document.querySelector(".nextBtn");
let imgOne=document.querySelector(".imgOne");
let imgTwo=document.querySelector(".imgTwo");

nextBtn.addEventListener('click',()=>{
 location.reload()=true;
})

let num1=null;
let num2=null;
 

 let btnOne=document.querySelector(".pOneBtn");
 let btnTwo=document.querySelector(".pTwoBtn");


 btnTwo.disabled=true;
 btnOne.enabled=true;
 btnOne.addEventListener('click',()=>{
      num1=(Math.floor((Math.random())*6))+1;
      let image="images/dice"+num1+".png";
      imgOne.setAttribute('src', image);
      
 
    btnOne.disabled=true;
    btnTwo.disabled=false;
    
 });


 btnTwo.addEventListener('click',()=>{
     num2=(Math.floor((Math.random())*6))+1;
     let image="images/dice"+num2+".png";
     imgTwo.setAttribute('src', image);
 
     btnTwo.disabled=true;
      
     if(num1>num2){
        answer.innerHTML=" 🚩 Player One is Win";
     }else if(num1<num2){
        answer.innerHTML="Player Two is Win  🚩";
     }else{
        answer.innerHTML=" 🚩 Draw,Let's Play Again  🚩";
     }
    
 })
 



 

 
 
 
