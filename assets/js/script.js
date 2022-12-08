

function drawsvg() {

   document.getElementById("#changetext").innerHTML = '1. <strong>Rejoins notre famille</strong> !';
   document.querySelector('.titre').style.display = "block";
   document.querySelector('.titre').style.animation = "opacitytext 2s";
   document.querySelector('.titre').style.animationPlayState = "running";



   document.querySelector('.traitsvg').style.animationPlayState = "running";

   /*if(trait) {*/
      document.querySelector('.traitsvg').style.animation = "draw 1s linear forwards";
      document.querySelector('.traitsvg').style.animationPlayState = "paused";
      document.querySelector('.traitsvg').style.animationPlayState = "running";
   /*}*/





}


function drawsvg2 () {


   document.querySelector('.titre').style.animation = "opacitytext2 2s";
   document.querySelector('.titre').style.animationPlayState = "running";

   document.getElementById("#changetext").innerHTML = '2. <strong>Réponds au test</strong> !';
   document.querySelector('.traitsvg').style.animation="draw2 2s linear forwards";
   document.querySelector('.traitsvg').style.animationPlayState="paused";
   document.querySelector('.traitsvg').style.animationPlayState="running";

   /*if(trait) {
      document.querySelector('.traitsvg').style.animation="draw5 2s linear forwards";
      document.querySelector('.traitsvg').style.animationPlayState="paused";
      document.querySelector('.traitsvg').style.animationPlayState="running";

   }*/


}

function drawsvg3 () {
   document.querySelector('.titre').style.animation = "opacitytext3 2s";
   document.querySelector('.titre').style.animationPlayState = "running";

   document.getElementById("#changetext").innerHTML = '3. <strong>Découvre ton bonbon</strong> !'
   trait =  document.querySelector('.traitsvg').style.animation="draw3 1s linear forwards";
   document.querySelector('.traitsvg').style.animation="draw3 1s linear forwards";
   document.querySelector('.traitsvg').style.animationPlayState="paused";
   document.querySelector('.traitsvg').style.animationPlayState="running";




}


gsap.to(".busscrolltrigger", {
   scrollTrigger: ".busscrolltrigger", // start the animation when ".box" enters the viewport (once)
   x: 1500
});




