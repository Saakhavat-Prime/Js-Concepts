let jsonRes = '{"fact":"All cats have claws, and all except the cheetah sheath them when at rest.","length":73}';

let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);



let Student = {
    name : "sakhvat",
    marks : 95
};

JSON.stringify(Student);
console.log(Student);