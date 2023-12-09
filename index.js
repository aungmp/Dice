 
let player1=document.querySelector(".pOne");
let player2=document.querySelector(".pTwo");
let answer=document.querySelector(".answer");
let nextBtn=document.querySelector(".nextBtn");
let imgOne=document.querySelector(".imgOne");
let imgTwo=document.querySelector(".imgTwo");

nextBtn.addEventListener('click',()=>{
 window.location.reload()=true;
})

let num1=null;
let num2=null;
 

 let btnOne=document.querySelector(".pOneBtn");
 let btnTwo=document.querySelector(".pTwoBtn");
 btnTwo.disabled=true;
 btnOne.enabled=true;
 btnOne.addEventListener('click',()=>{
      num1=(Math.floor((Math.random())*6))+1;
      if(num1==1){
        imgOne.setAttribute('src',"images/dice1.png");
      }else if(num1==2){
         imgOne.setAttribute('src',"images/dice2.png");
      }else if(num1==3){
        imgOne.setAttribute('src',"images/dice3.png");
     }else if(num1==4){
        imgOne.setAttribute('src',"images/dice4.png");
     }else if(num1==5){
        imgOne.setAttribute('src',"images/dice5.png");
     }else if(num1==6){
        imgOne.setAttribute('src',"images/dice6.png");
     }

 
    btnOne.disabled=true;
    btnTwo.disabled=false;
    
 });


 btnTwo.addEventListener('click',()=>{
     num2=(Math.floor((Math.random())*6))+1;
     if(num2==1){
        imgTwo.setAttribute('src',"images/dice1.png");
      }else if(num2==2){
        imgTwo.setAttribute('src',"images/dice2.png");
      }else if(num2==3){
        imgTwo.setAttribute('src',"images/dice3.png");
     }else if(num2==4){
        imgTwo.setAttribute('src',"images/dice4.png");
     }else if(num2==5){
        imgTwo.setAttribute('src',"images/dice5.png");
     }else if(num2==6){
        imgTwo.setAttribute('src',"images/dice6.png");
     }
 
     btnTwo.disabled=true;
      
     if(num1>num2){
        answer.innerHTML="Player One is Win";
     }else if(num1<num2){
        answer.innerHTML="Player Two is Win";
     }else{
        answer.innerHTML="Now is Same ,Play Again";
     }
    
 })
 



 

 
 
 
