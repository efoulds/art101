// index.js - sort letters from user input name
// Author: Eri Foulds
// Date: 5.3.23

function sortUserName(){
  var userName = window.prompt ("Enter your name so I can fix it:");
    console.log("userName =",userName);

  var nameArray = userName.split('');
    console.log("nameArray =", nameArray);

  var nameSort = nameArray.sort();
    console.log("nameSort=",nameSort);

  return nameSort;

}
//output
document.writeln("I have fixed your name:", 
    sortUserName(), "</br>");
