var totalStar = 10;
var i = 0;
export function addStar() {
  for(i; i<totalStar; i++) {
    var star = document.createElement("div");
    var starEl = document.getElementById("star");

  star.classList.add("star");
  starEl.append(star);
  }
}

