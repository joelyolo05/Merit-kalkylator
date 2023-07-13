'use strict';
// Always try to improve our coding
// To get users letter A=20 poäng B=17.5 poäng C=15 poäng D=12.5 poäng E=10 poäng F=0 poäng
// When a click of F button get a score = 0 and then take its value and add it too the A1
// Do the same with the F button to all the other buttons

const F = 0;
const E = 10;
const D = 12.5;
const C = 15;
const B = 17.5;
const A = 20;

let elements = document.querySelectorAll('.button');

let clickEvent = () => {
  console.log(F);
  document.querySelector('.score').textContent = F;
};
elements.forEach(item => {
  item.addEventListener('click', clickEvent);
});

let Fgradebtn = document.querySelectorAll('.button1');

let clickEvent1 = () => {
  console.log(E);
};
elements.forEach(item => {
  item.addEventListener('click', clickEvent);
});
