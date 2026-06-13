// object literal 

const student = {
    Name: "Sakhawat",
    age: "22",
    marks:"90"
}

const post = {
    username:"@Sakhavat",
    content:"this is my #firstPost",
    likes:150,
    reposts:5,
    tags:["@instagram","@thread"]
}

// Get Values 
 post.tags
 post["likes"]
 post.tags[0]

 let props = "reposts";
 post[props]  //valid
 post.props   //invalid

//  add or update values 


post.coments ="30";
post.likes ="200";
delete post.content;


// spread (object )

const data = {
    email:"ironman@gmail.com",
    password:"asdf",
};
const dataCopy = {...data,id:123,contry:"India"};



let arr = [1,3,5,6,8,3,7];

let obj1 = {...arr}; //arry indeces => be keys
let obj2 = {..."hello"}; //arry indeces => be keys