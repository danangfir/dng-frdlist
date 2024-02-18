export function gif() {
var i  = 1;
var totalGif = 20;
var totalGifArr = [];

while(i < totalGif){
  totalGifArr.push(i++);
}
gsap.utils.shuffle(totalGifArr);
console.log(totalGifArr[0]);

  outputImages.setAttribute("src", "../gif/sticker_"+ totalGifArr[0] + ".gif")
}