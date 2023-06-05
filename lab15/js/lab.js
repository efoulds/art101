// index.js - Lab 15 AJAX
// Author: Eri Foulds
// Date: 6.1.23

//function 
function yesNo() {
$.ajax({
  url: "https://yesno.wtf//api",
  type: "GET",
  data: {},
})
//results
.done(function(data) {
  var yes = data.answer;
  var no = data.image;
  $("#output").html("<h2>"+ yes);
  $("#output").append("<img src=" + no + ">");
})
}
//button
$("button").click(yesNo)