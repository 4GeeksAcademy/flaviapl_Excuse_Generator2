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

  function getRandomElement(array) {
    let randomArray = Math.floor(Math.random() * array.length); //calcula solo un num aleatorio
    return array[randomArray];
  }

  let randomWhoItem = getRandomElement(who);
  let randomActionItem = getRandomElement(action);
  let randomWhatItem = getRandomElement(what);
  let randomWhenItem = getRandomElement(when);

  document.querySelector(
    "#Excuse"
  ).innerHTML = `${randomWhoItem} ${randomActionItem} ${randomWhatItem} ${randomWhenItem}`;
};
