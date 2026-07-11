let h1 = document.querySelector('h1');

function changeColor(color,delay,nextColorChnage) {
    setTimeout(() => {
        h1.style.color = color;
        if(nextColorChnage)nextColorChnage();


    }, delay);
}

changeColor('red',1000,()=>{
    changeColor('green',1000, ()=>{
        changeColor('orange',1000,()=>{
            changeColor('blue',1000,()=>{
                changeColor('yellow',1000)
            })
        })
    })
})

// callback nesting    -->   callback hell 
// changeColor('red',1000);
// changeColor('green',2000);
// changeColor('orange',3000);
// changeColor('blue',4000);
// changeColor('yellow',5000);
