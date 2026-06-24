let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let p = document.querySelector('p');

let changeColor= function (){
    console.dir(this.innerText);
    this.style.backgroundColor="blue";

}

h2.addEventListener('click', changeColor);
h3.addEventListener('click', changeColor);
p.addEventListener('click', changeColor);