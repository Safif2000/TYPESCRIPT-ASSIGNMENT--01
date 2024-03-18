// Great Magicians: Start with a copy of your program from Exercise 39.
//  Write a function called make_great() that modifies 
//  the array of magicians by adding the phrase the Great to each magician’s 
//  name. Call show_magicians() 
// to see that the list has actually been modified.
var magician = ['Harry Potter', 'Renaissance', 'Hermione  Granger', 'Ron weasley', "Albus Dumbledore"];
function make_great(magicArry) {
    for (var i = 0; i < magicArry.length; i++) {
        magicArry[i] = "The Great " + magicArry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (element) {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
