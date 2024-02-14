/*const toggleButton = document.getElementById('toggle-button');
const lampadaImg = document.getElementById('lampada.img');

let islampadaOn = false;

button.addEventListener('click' , function(){
 islampadaOn = islampadaOn;
 if(islampadaOn) {
    lampadaImg.src = "./lampada1.png";
 }
 else{
    lampadaImg.src= "./lampada-par20.png";
 }

})*/

const button = document.getElementById("buttonjs");
let lampImg = document.getElementById("teste1");
let lampImg1 = document.getElementById("teste2");
let lampImg2 = document.getElementById("teste3");


let lampadas1 = false;

button.addEventListener('click', function(){
   lampadas1 = lampadas1;
   if (lampadas1) {
      lampImg.src = "C:\Users\joaow\Desktop\plano-d--main\refletor 150w.webp";
   }
   else {
      lampImg.src = "./refletor1.webp";
      lampImg1.src = "./refletor1.webp"
      lampImg3.src = "./refletor1.webp"
   }
})


