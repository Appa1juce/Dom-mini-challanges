"use strict";

let total = 0;
let totalParagraph = document.querySelector(".total");
let cola = document.querySelector(".cola");
let peanuts = document.querySelector(".peanuts");
let chocolate = document.querySelector(".chocolate");
let gummies = document.querySelector(".gummies");

cola.addEventListener("click", () => {
  total += 2;
  totalParagraph.textContent = `total: $${total}`;
});
peanuts.addEventListener("click", () => {
  total += 3;
  totalParagraph.textContent = `total: $${total}`;
});
chocolate.addEventListener("click", () => {
  total += 4;
  totalParagraph.textContent = `total: $${total}`;
});
gummies.addEventListener("click", () => {
  total += 6;
  totalParagraph.textContent = `total: $${total}`;
});

// -------------------------#2-----------------------------------------------------
// listen for submission
// derive the two values from input
// use the values to create the number of coins and type
let formContainer = document.querySelector(".form-container");
let coinContainer = document.querySelector(".coin-container");

formContainer.addEventListener("submit", (e) => {
  event.preventDefault();
  let formData = new FormData(formContainer);
  let amount = formData.get("amount");
  let type = formData.get("type");
  //   console.log(amount, type);
  for (let i = 0; i < amount; i++) {
    let coins = document.createElement("div");
    let coinParagraph = document.createElement("p");
    coinParagraph.textContent = type;
    coins.classList.add(type, "coin");
    coins.append(coinParagraph);
    coinContainer.append(coins);
    //   coin.addEventListener("click", () => {
    //     coin.remove();
    //   });
  }
  formContainer.reset;
});

// ------------------------#3-----------------------------------------------------

let lightBulb = document.querySelector(".light-bulb");
let lightOn = document.querySelector(".on");
let lightOff = document.querySelector(".off");
let lightToggle = document.querySelector(".toggle");
let lightend = document.querySelector(".end");

lightOn.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "yellow";
});

lightOff.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "gray";
});

// lightToggle.addEventListener("click", () => {
//   lightBulb.style.backgroundColor = "none";
//   lightBulb.classList.toggle(".light-on");
//   lightBulb.classList.toggle(".light-off");
// }

lightend.addEventListener("click", () => {});
