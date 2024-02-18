import {nameList} from '../name.js';
import {imageDrag} from './script.js';
var listTotal = nameList.length;

var i = 0;

gsap.registerPlugin(Draggable);
for(i; i<listTotal;i++) {
Draggable.create(".listGsap" + i, {
  bounds: ".kontainer",
  inertia: true
});
}
