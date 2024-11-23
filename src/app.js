/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function randomElement(array) {
    let randomArray = Math.floor(Math.random() * array.length); //calcula solo un num aleatorio
    return array[randomArray];  
  }

  let randomWho = randomElement(who);
  let randomAction = randomElement(action);
  let randomWhat = randomElement(what);
  let randomWhen = randomElement(when);

  console.log(randomWho);
  console.log(randomAction);
  console.log(randomWhat);
  console.log(randomWhen);

  document.querySelector(
    "#Excuse"
  ).innerHTML = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;

};
