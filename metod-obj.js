//pasport with metod "How Old"
const pasport = {
    howOld() {
        console.log("How old " + this.fullname);
        console.log(this.age);
    },
    fullname: "Maria",
    lastname: "Yumasheva",
    age: 21,
    liveplace: "saint-p",
};
let clone = Object.assign({}, pasport);//new obj clone same like pasport
clone.age = 55;//change clone obj, pasport doesn't change
clone.fullname = "Katya";
pasport.howOld();
clone.howOld();
//calc with metod "read,multi,sum,subtract"
let calc = {
    read() {
        this.a = 1;
        this.b = 4;
        console.log("num1 = " + this.a +" num2 = "+ this.b);
},
    multi() {
        this.c = this.a * this.b;
        console.log("multi = "+this.c);  
       
    },
     sum() {
        this.c = Number(this.a) + Number(this.b);
        console.log("sum = " + this.c);

    },
    subtract() {
        this.c = this.a - this.b;
        console.log("subtract = " + this.c);

    },
}
calc.read();
calc.multi();
calc.sum();
calc.subtract();