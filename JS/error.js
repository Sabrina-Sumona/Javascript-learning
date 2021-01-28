//Error handling
// console.log("Before Error!");//this will be print
// test();
// console.log("After Error!");//but not this

try {
    test();//now it does not afftect the after parts
    undefined.test();//call from any undefined element
} catch(err) {
    // this only part works when error occurs
    console.log(err);
    console.log(err.message);
    console.log(err.name);
} finally {
    // this part works always
    console.log("I am inside finally!");
}

console.log("After Error!");


// Error message defining

let a = prompt('Enter a number:');

try {
    if(a>15) throw "Too Big";
    //a = 5 to 15, no error message
    else if (a<5) throw "Too small";
} catch(err) {
    console.log(err);
}

///https://www.w3schools.com/jsref/jsref_obj_error.asp