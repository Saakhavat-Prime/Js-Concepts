// Q1
let input = document.createElement('input');
let button = document.createElement('button');

button. innerText = "Click me";

// q2
document.body.append(input);
document.body.append(button);

input.setAttribute('placeholder', "username");
button.setAttribute('id', "btn");

// Q3
 let btn = document.querySelector("#btn");
 btn.classList.add("btnclass");

//  Q4

let h1 = document.createElement('h1');
h1.innerText = 'DOM PRACTICE';
h1.classList.add('h1class');
document.body.append(h1);
// Q5 
let p = document.createElement('p');
p.innerHTML = 'Apna College <b>Delta</b>Practice';
document.body.append(p);




