function myFunction() {
  document.getElementById("title").style.color = "yellow";
  document.getElementById("color1").style.color = "red";
  document.getElementById("color2").style.color = "blue";
}

function myFunction2() {
  document.body.style.backgroundColor = "#f3f3f3";
}

function myFunction3() {
  document.getElementById("colornew1").style.color = "black";
  document.getElementById("colornew2").style.color = "blue";
  document.getElementById("colornew3").style.color = "red";
  document.getElementById("colornew4").style.color = "darkred";
  document.getElementById("colornew5").style.color = "crimson";
}

function myPlayFunction1() {
  document.getElementById("myDIV").style.animationPlayState = "running";
}

function myPauseFunction1() {
  document.getElementById("myDIV").style.animationPlayState = "paused";
}

function myFunction4() {
  // Code for IE9
  document.getElementById("myDIV2").style.msTransform = "rotate(20deg)"; 
  // Standard syntax
  document.getElementById("myDIV2").style.transform = "rotate(20deg)"; 
}

function myFunction5() {
  document.getElementById("myImg").style.objectPosition = "0 5%";
}

function myFunction6() {
  document.getElementById("myDIV3").style.overflow = "scroll";
}