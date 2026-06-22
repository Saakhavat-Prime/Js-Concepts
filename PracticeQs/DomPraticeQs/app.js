let p = document.createElement('p');
p.innerText = "Hey I'am red!";
p.style.color = "red"

let container = document.querySelector('.container');

container.append(p);

let h3 = document.createElement('h3');
h3.innerText = " I'am a blue h3!";
h3.style.color = "blue"

container.append(h3);

let div = document.createElement('div');
// h3.innerText = (" I'am a blue h3!");
let h1 = document.createElement('h1');
h1.innerText = " I'm in a div";
let para = document.createElement('p');
para.innerText = " ME TOO!";
div.append(h1);
div.append(para);
div.style.border = "2px solid black";
div.style.backgroundColor = "pink";

container.append(div);


