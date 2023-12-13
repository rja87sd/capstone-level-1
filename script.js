"use strict";

const inputEmail = document.getElementById("email");
const inputAbout = document.getElementById("about");
const inputMessage = document.getElementById("message");
const btnSubmit = document.querySelector("form");
const outputMessages = document.getElementById("lfg-messages");

// Check if there is data in local storage
const existingMessages = JSON.parse(localStorage.getItem("lfgMessages")) || [];

// Display existing messages on page load
existingMessages.forEach((message) => {
  outputMessages.innerHTML += createCard(message);
});

btnSubmit.addEventListener("submit", (e) => {
  const valEmail = inputEmail.value;
  const valAbout = inputAbout.value;
  const valMessage = inputMessage.value;

  // Create a new message object
  const newMessage = { email: valEmail, about: valAbout, message: valMessage };

  // Add the new message to the existing messages array
  existingMessages.push(newMessage);

  // Save the updated messages array to local storage
  localStorage.setItem("lfgMessages", JSON.stringify(existingMessages));

  // Display the new message on the page
  outputMessages.innerHTML += createCard(newMessage);

  // Prevent the form from submitting and refreshing the page
  e.preventDefault();

//   Clear the data from input fields
    inputEmail.value = "";
    inputAbout.value = "";
    inputMessage.value = "";
});

function createCard(message) {
  return `<div class="card mx-auto my-2" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${message.about}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">Submitted by ${message.email}</h6>
      <p class="card-text">${message.message}</p>
    </div>
  </div>`;
}
