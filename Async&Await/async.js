async function greet (){
    throw "404 page not found"
    console.log("hello");
}

greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log("result was : ", result)
})
.catch((err)=>{
    console.log("promise was rejected with error : ", err)
})


//  async with arrow function 
let demo  = async ()=>{
    throw "some random error";
    return 5;
}
