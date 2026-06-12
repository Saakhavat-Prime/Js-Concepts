let arr = ["Jhon", "25", "Male",];

// arr.splice();
arr.splice(0, 0, "wick", "28", "Male");

arr.slice(0, 3,);


// foreach mehtod 
let num = [1, 2, 3, 4, 5, 6, 7]

// num.forEach(function(el){

//     console.log(el)
// });
// or 
print = function (el) {
    console.log(el)
}
num.forEach(print)
// foreach in arr of obj 

const classInfo = [
    {
        name: "aman",
        grade: "A+",
        city: "Dehli"


    },
    {
        name: "sakhavat",
        grade: "A",
        city: "pune"

    },
    {
        name: "karan",
        grade: "B",
        city: "Mumbai"

    }
]

// classInfo.forEach((names) =>{
//     console.log(names.name)
// })


// map function on array of obj 
let Contry = classInfo.map((el) => {
    return el.contry = "india"
})

// map functon 

let nums = [1, 2, 3, 4];
let double = nums.map((el) => {
    return el * 2;  // or el * el
})

// filter 
let numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let evenNunms = numbs.filter((el) => {
    return el % 2 == 0;       //or != 0 //<5
})


// reduce method 

let rdc = nums.reduce((acc, el) => {
    return acc + el;
})


let mams = [2,4,6,5,9,7,14,11,17];

// find maximum number from array using loop
// let max = -1;
// for (let i = 0; i < mams.length; i++) {
//     if (max < mams[i]) {
//         //         max = mams[i];

//     }
// }

// find maximum number from array using reduce method

let maximum = mams.reduce((max,el)=>{
    if(max < el){
         return el;
    }else{
        return max;
    }
});

console.log(maximum);


