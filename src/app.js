import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

let textoExcusa = document.getElementById("excuseGenerada");
textoExcusa.innerHTML=excuseResult(who, action, what, when);

  console.log(textoExcusa.innerHTML);
};
const randomNumber = (array) => Math.floor(Math.random()*array.length); // return i del array;
const randomEle = (array) => array[randomNumber(array)]; //return el valor dentro del array;
const excuseResult = (array1, array2, array3, array4) => `${randomEle(array1)} ${randomEle(array2)} ${randomEle(array3)} ${randomEle(array4)}`;



