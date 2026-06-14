// function hello() {
//     console.log("Hello");
// }

// hello();


function print1to5() {
    for (let i = 0; i <= 5; i++) {
        console.log(i);

    }
}


function isAdult() {
    let age = 23;

    if (age >= 18) {
        console.log("adult");
    } else {
        console.log("not adult");
    }
}

isAdult();


// Function with arguments 

function printInfo(Name, age) {
    console.log(`${Name}'s age is ${age}`);

}
printInfo("sakhawat", 23);
printInfo("wahaj", 22);
printInfo("karan");


// return keyword in function

function sum(a, b) {
    // console.log(a+b);
    return a + b;
    // console.log("this will not run")

}
sum(7, 4);
sum(sum(3, 8), 9);



//  function calcAvg(a,b,c){
//     let avg = (a+b+c/3);
//     return (a+b+c/3)


//  }
//  function printTable(n){
//     for (let i = 0; i<=n*10; i+=n){
//         return 

//     }

//  }

// Function expression 
let product = function (a, b) {
    return a + b
}
product();
let hello = function () {
    console.log("hello")
}
hello = function () {
    console.log("hello World!")
}
hello();

// high-order function 

// take a function as arguments or retrun a function

function multipleGreet(func, count) {  //higher order function
    for (let i = 1; i <= count; i++) {
        func();

    }
}
let greet = function () {
    console.log("hello");

}
multipleGreet(greet, 10);
multipleGreet(function () { console.log("hello there") }, 10);

// return a function 

function oddEvenTest(request) {

    if (request == "odd") {
        return function (n) {
            console.log(!(n % 2 == 0))
        }

    } else if (request == "even") {
        return function (n) {
            console.log(n % 2 ==0);
        }
    }else{
        console.log("wrong request"); 
    }

}

let request = "odd";  

