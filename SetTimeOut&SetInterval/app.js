// settimeout 

console.log("hi there!");

setTimeout(() => {
    console.log("this will run after 4s");
}, 4000);


console.log("this will run first");


// setInterval 
let firstinterval = setInterval(() => {
    console.log("this code will run after every two seconds")
}, 2000);

clearInterval(firstinterval);
