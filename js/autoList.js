import {nameList} from '../name.js';


var i = 0;
var randomPadding = ["4px","6px","8px","10px"];

export function increment() {
  gsap.utils.shuffle(nameList);
for(i; i < nameList.length; i++){
  var li = document.createElement("li");
  li.classList.add("listEl");
  var listDiv = document.createElement("div");
  listDiv.classList.add("listDiv", "listGsap"+1)
  var text = document.createTextNode(nameList[i].toString().replace(/"/g,""));
  li.append(text);
  listDiv.append(li);
  autoIncrementList.appendChild(listDiv);
  
  gsap.utils.shuffle(randomPadding);
document.getElementsByClassName("listEl")[i].style.padding = randomPadding[0];
}
}