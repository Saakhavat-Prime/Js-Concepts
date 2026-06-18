let sum = (a,b) =>{

    console.log(a+b);
}
sum(3,8);
sum(80,45);

let cube = n =>{

    return n*n*n;
}
console.log(cube(7));

let power = (a,b) =>{

    return a ** b;
}
console.log(power(7,2));


const hello = () => {
    console.log("hello world")
}

// implicit return 
// without return key word 

const func = (a,b) =>{
    a*b
    
}
// or 
const func2 = (a,b) =>{ a*b}