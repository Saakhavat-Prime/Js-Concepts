//promises are basically objects

//resolve or reject or pending

// saveDb("apna college", () => {
//     console.log("success : your data was saved");
//     saveDb("hello world", () => {
//         console.log("success2 : your data2 was saved");
//         saveDb("Shardha", () => {
//             console.log("success3 : your data3 was saved");
//         }, () => {
//             console.log("failure3 : weak connection. data not saved");

//         });
//     }, () => {
//         console.log("failure2 : weak connection. data not saved");
//     });
// },
//     () => {
//         console.log("failure : weak connection. data not saved");
//     });

// function 

function saveDb(data) {
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4){
            resolve("success : data was saved");
        }else {
            reject("failure : weak connection!");
        }
    });
};

saveDb("apna college")
.then((result)=>{
console.log("data1 saved");
console.log("result of promise: ", result);
return saveDb("hello world");
})
.then((result)=>{
    console.log("data2 saved");
    console.log("result of promise: ", result);
    return saveDb("shardha");
    
})
.then((result)=>{
    console.log("data3 saved");
    console.log("result of promise: ", result)

})
.catch((error)=>{
console.log("promise was rejected");
console.log("error of promise: ", error)
})
