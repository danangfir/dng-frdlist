var warna = [
"#31ec8b",
"#fc7878",
"#ec8731",
"#46a9cb",
"#fa7bfc",
"#fcfb49",
"#79ff9c",
"#ed74a4",
"#8ec5f9",
  ]
  

  var i = 0
export function randColor() {
  i = 0;
  function looping() {
  setTimeout(function() {
    i++;
    if (i < warna.length) {
      looping(); 
      kontainer.style.background = warna[i];
      body.style.background = warna[i];
      sticker_12.style.filter = "drop-shadow(5px 5px 10px" + warna[i] +")"
    } else if (i == warna.length) {
      i = 1;
      looping();
    }
  }, 250)
}
      looping(); 
}
  
 export function stopRandColor() {
   i = warna.length + 1;
   var setWarna = warna[Math.floor(Math.random()*warna.length)];
    kontainer.style.background = setWarna;
    body.style.background = setWarna;
  }
  
  
  var iii = 0;
setInterval(function() {
iii++;
sticker_15.style.filter = "drop-shadow(0 0 15px"+ warna[iii] +")";
  if(iii == warna.length) {
    iii = 0
  }
}, 100)





sticker_15.addEventListener("click", function() {
  randColor();
  setTimeout(function() {
    stopRandColor();
  }, 5000);
}) 