// index.js - Lab 11 experimenting with jQuery
// Author: Eri Foulds
// Date: 5.17.23

// Constants

// Functions
$(document).ready(function() {
  $('<button class="btn-styled" type="button">Press me</button>').appendTo('#button1');
});

$(document).ready(function() {
  $('<button class="btn-styled" type="button">Press me</button>').appendTo('#button2');
});

$(document).ready(function() {
  $('<button class="btn-styled" type="button">Press me</button>').appendTo('#button3');
});

$(document).ready(function() {
  $('<button class="btn-styled" type="button">Press me</button>').appendTo('#button4');
});

  $("#button1").click(function() {
    $(".challenges").addClass("special");
      })

  $("#button2").click(function() {
    $(".problems").addClass("special");
      })

  $("#button3").click(function() {
    $(".reflection").addClass("special");
      })

  $("#button4").click(function() {
    $(".results").addClass("special");
      })



