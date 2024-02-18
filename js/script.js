import {gif} from './randomGif.js';
import {increment} from './autoList.js';
import {randColor, stopRandColor} from './color.js';
import {addStar} from "./star.js";
addStar();

  increment();
var lagu = new Audio("../konga.mp3");
gsap.registerPlugin(Draggable);

export var imageDrag = Draggable.create("#imageDiv", {  
  bounds: ".konten",
  autoScroll:1
})[0];


imageDrag.addEventListener("click", function() {
  increment();
  gif();
  konten.classList.add("animated");
  kontainer.classList.add("animated");
  overlay.style.display = "block";
  lagu.play();
});





imageDiv.addEventListener("touchstart", function() {
  increment();
  konten.classList.add("animated");
  kontainer.classList.add("animated");
  overlay.style.display = "block";
  lagu.play();
})
imageDiv.addEventListener("mousedown", function() {
  increment();
  konten.classList.add("animated");
  kontainer.classList.add("animated");
  overlay.style.display = "block";
  lagu.play();
})
imageDiv.addEventListener("touchstart", function() {
  randColor();
})
imageDiv.addEventListener("mousedown", function() {
  randColor();
})
imageDiv.addEventListener("touchend", function() {
  stopRandColor();
})
imageDiv.addEventListener("mouseup", function() {
  stopRandColor();
})



