// index.js - Arrays and Objects
// Author: Eri Foulds
// Date: 5.3.23

//define variables
// Define Variables
myTransport = ["Honda Accord", "Subaru", "carpool", "bicycle"];

// create an object for my main ride
myMainRide = {
    make: "Honda",
    model : "Accord",
    color : "Navy",
    year : 2006,
    age : function() {
        return 2023 - this.year;
    }
}

// output
document.writeln("Kinds of transportion I use: ", myTransport, "</br>");

document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");