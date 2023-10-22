/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  //timer variable as global cause it's needed by both setTimer and stopTimer functions
  let timer = "";

  //function to display a random card
  let showRandomCard = () => {
    generateRandomCard();
    generateRandomSuit();
  };

  //function to 1st show a random card and after that, sets a timer for displaying a new card every 10 seconds
  let setTimer = () => {
    showRandomCard();
    setTimeout(setTimer, 10000);
  };

  //function to stop the timer
  let stopTimer = () => {
    clearTimeout(timer);
  };

  //click event listeners: for the "Show Card" button, "Set Timer" button, and "Stop Timer" button
  document
    .querySelector(".btnShowCard")
    .addEventListener("click", showRandomCard);
  document.querySelector(".btnSetTimer").addEventListener("click", setTimer);
  document.querySelector(".btnStopTimer").addEventListener("click", stopTimer);

  //function to select random number for the card: selects random card from array and sets HTML content of the element with class ".number" to the selected card
  let generateRandomCard = () => {
    let cardsArray = [2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];
    let randomNumber =
      cardsArray[Math.floor(Math.random() * cardsArray.length)];
    document.querySelector(".number").innerHTML = randomNumber;
  };

  //function to select a random suit for the card and make the bottom suit match the top suit
  let generateRandomSuit = () => {
    let suitsArray = ["♦", "♥", "♠", "♣"];
    let randomSuit = suitsArray[Math.floor(Math.random() * suitsArray.length)];
    //set color based on the selected suit
    let colorOfSuit =
      randomSuit === "♥" || randomSuit === "♦" ? "red" : "black";
    document.querySelector(".suit-top").innerHTML = randomSuit;
    document.querySelector(".suit-bottom").innerHTML = randomSuit;
    document.querySelector(".suit-top").style.color = colorOfSuit;
    document.querySelector(".suit-bottom").style.color = colorOfSuit;
  };

  //when page loads, shows a random card
  showRandomCard();
};
