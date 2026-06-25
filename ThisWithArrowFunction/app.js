const student = {
    name:"jhon",
    marks: 95,
    prop:this,     //globalscope
    getName:function(){
        console.log(this);
        return this.name;
    } ,
    getMarks : ()=>{

        console.log(this);  //parentscope -> window
        return this.marks;

    },
    getinfo1:function(){
        setTimeout(() => {
            console.log(this);   //student
        }, 2000);
    },
    getinof2:function(){
        setTimeout(function () {
            console.log(this);         //window 
            
        }, 2000);
    }

}; 

       

// pratice Questions 

// arrow function to return square of number n: 


const square = n=> n * n;

// square(2);

// print hello world 5time at intervals of 2s 
 let hello = setInterval(() => {
    console.log("Hello World");
    
}, 2000);

setTimeout(() => {
    clearInterval(hello);
    console.log("clear interval");
    
}, 10000);