const Student = {

    name:"jhon",
    age:"23",
    math:95,
    phys:90,
    eng:85,
    getAvg(){
        console.log(this)
        let avg = (this.eng + this.math + this.phys / 3);
        console.log(`${this.name} got avg marks = ${avg}`)
    }
}
Student.getAvg()

 function getAvg(){
    console.log(this);
   
}
getAvg()