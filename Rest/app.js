function sum (...args){
    return args.reduce((sum ,el) => sum + el);
}
function min (msg,...args){
    console.log(msg)
    return args.reduce((min ,el) => min>el? el:min);
}

// Destructuring Array 
let names = ["tony","bruce","peter","steve","jon"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];

let[winner,runnerup ,...other] = names;


// Destructuring Objects 

const student = {
    name:"karan",
    age:22,
    class:10,
    subjects:["hindi","english","math","science"],
    username:"karan@123",
    password:"asdf"
}

// let usename = student.username;
// let password = student.password;

let {username:user,password:passkeys,} = student;