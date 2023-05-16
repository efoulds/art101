// index.js - Lab 10 
// Javascript Events and Forms
// Author: Eri Foulds
// Date: 5.15.23


// Functions
function sortUserName(userName){
   var nameArray = userName.split('');
   var nameArraySort = nameArray.sort().reverse();
   var nameSorted = nameArraySort.join('');
   return nameSorted;
}

function sawThis(str){
  return str.replace(
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  );
}

buttonEl = document.getElementById("button");
  console.log("button element:", buttonEl);
    inputEl = document.getElementById("name");
  console.log("input element:", inputEl);
    outputEl = document.getElementById("output");
  console.log("output element:", outputEl); 

buttonEl.addEventListener("click", function (){
  var userName = inputEl.value;
  var newName = sawThis(sortUserName(userName));
  outputEl.innerHTML = "<p id=name-results>" + newName + "</p>";
});


