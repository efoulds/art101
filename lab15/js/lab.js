// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

function yesNo() {
$.ajax({
  url: "https://yesno.wtf//api",
  type: "GET",
  data: {},
})

.done(function(data) {
  var yes = data.answer;
  var no = data.image;
  $("#output").html("<h2>"+ yes);
  $("#output").append("<img src=" + no + ">");
})
}

$("button").click(yesNo)