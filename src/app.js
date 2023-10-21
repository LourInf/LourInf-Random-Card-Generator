/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let cardsArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];
  //Selects random card from possibleCards array and sets HTML content of the element with class ".number" to the selected card
  let randomNumber = cardsArray[Math.floor(Math.random() * cardsArray.length)];

  document.querySelector(".number").innerHTML = randomNumber;

  //select random suit for the suit on top
  let suitsArray = ["♦", "♥", "♠", "♣"];
  let randomSuit = suitsArray[Math.floor(Math.random() * suitsArray.length)];

  let chosenSuit = (document.querySelector(".suit-top").innerHTML = randomSuit);

  //bottom suit needs to match suit on top
  let sameSuitBottom = (document.querySelector(
    ".suit-bottom"
  ).innerHTML = chosenSuit);

  /*let colorArray = ["#FF0000", "#000000"];
  let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
  document.querySelector(".suit-top").innerHTML = randomColor;*/
};
