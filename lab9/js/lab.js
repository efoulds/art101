// index.js - Lab 10, Modifying the DOM
// Author: Eri Foulds
// Date: 5.16.23

// Constants

// Functions
window.onload = function () {
  document.getElementById("output");
   var outputEl = document.getElementById("output");

  document.createElement("p");
    var new1El = document.createElement("p");
      new1El.innerHTML = "Now you see me";

  document.createElement("j");
   var new2El = document.createElement("j");
      new2El.innerHTML = "Now you don't"

  outputEl.appendChild(new1El);
  outputEl.appendChild(new2El);

  outputEl.style.color = "navy";


}
