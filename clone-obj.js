const pasport = {
    fullname: "Maria",
    lastname: "Yumasheva",
    age: 21,
    liveplace: "saint-p",
};
let id = pasport;//new name obj pasport become id
id.age = 22;//change age in id
pasport.age = 23;//change age in pasport
let clone = Object.assign({}, pasport);//new obj clone same like pasport
clone.age = 55;//change clone obj, pasport doesn't change
console.log(id.age);//23
console.log(clone.age);//55 