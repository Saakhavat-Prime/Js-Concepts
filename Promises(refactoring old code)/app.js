let h1 = document.querySelector('h1');

function changeColor(color,delay) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        h1.style.color = color;
        resolve("color changed!");
    }, delay);
    })  
}


changeColor("red",1000)
.then(()=>{
    console.log("red color");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("orange color");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("green color");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("blue color");
})
// changeColor('red',1000,()=>{
//     changeColor('green',1000, ()=>{
//         changeColor('orange',1000,()=>{
//             changeColor('blue',1000,()=>{
//                 changeColor('yellow',1000)
//             })
//         })
//     })
// });