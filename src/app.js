/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  let showRandomCard = () => {
    document
      .querySelector(".btnShowCard")
      .addEventListener("click", function() {
        generateRandomCard();
        generateRandomSuit();
      });
  };

  //function to select random number
  let generateRandomCard = () => {
    let cardsArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];
    //Selects random card from possibleCards array and sets HTML content of the element with class ".number" to the selected card
    let randomNumber =
      cardsArray[Math.floor(Math.random() * cardsArray.length)];
    document.querySelector(".number").innerHTML = randomNumber;
  };

  //function to select random suit for the suit on top and  make bottom suit match the top suit
  let generateRandomSuit = () => {
    let suitsArray = ["♦", "♥", "♠", "♣"];
    let randomSuit = suitsArray[Math.floor(Math.random() * suitsArray.length)];

    // Set color based on the selected suit
    let colorOfSuit =
      randomSuit === "♥" || randomSuit === "♦" ? "red" : "black";

    document.querySelector(".suit-top").innerHTML = randomSuit;
    document.querySelector(".suit-bottom").innerHTML = randomSuit;
    document.querySelector(".suit-top").style.color = colorOfSuit;
    document.querySelector(".suit-bottom").style.color = colorOfSuit;
  };

  showRandomCard();
};
