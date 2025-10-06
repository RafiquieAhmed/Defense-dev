//object
function japan(){

const info={
    name:"akira",
    age:60,
    know_as:"father of anime"

}
console.log(info);
console.log(typeof info);
console.log(info.know_as);
//crud operations

//create

info.character="GOKU";
info.bestchar="Gohan";
// console.log(info);

//update:
info.bestchar="Goten";

info.insipred="01 naruto"

//delete
delete info.insipred;
//read
console.log(info);
}

// japan()


// how it store in key value FormDataEvent
// "name" =["value"]

function log_behid(){
    const anime={
    name:"akira",
    age:60,
    know_as:"father of anime",
    famous:"created of GOKU",

}
console.log(anime["name"]);
console.log(anime["age"]);

//print only keys
console.log(Object.keys(anime));
//pint values not key
console.log(Object.values(anime));
//print both
console.log(Object.entries(anime));
}

// log_behid();

function loop(){
    const user={
     name:"akira",
    age:60,
    know_as:"father of anime",
    famous:"created of GOKU",

}
//default keys
for(let num in user){
    console.log(num);

}
//value
for(let keys in user){
    console.log(keys,user[keys]);
    //not vaild console.log(keys,useer.keys)

    //behind => user.eys user["name"] user["age"]
}

//object destruction
// old way
// const name=user.name;
// const age=user.age;
//console.log(name,age);

//(new style) object destructing
// const {name,famous}=user;
// new naming 


const { names: username, famous: userfamous } = user;

console.log(username, userfamous);

//aray destruction
const arr=[10,20,30,40,50]
const [fir,sec]=arr
console.log(fir,sec);
}
// loop()

function dif(){
        const user={
     name:"akira",
    age:60,
    know_as:"father of anime",
    famous:"created of GOKU",

}

//for in loop not best in all case
//for of loop array ke
const temparr=Object.keys(user);
for(let keys of temparr){
    console.log(keys);
}
//for values
for(let val of Object.values(user)){
    console.log(val);
}
for(let val of Object.entries(user)){
    console.log(val);
}

//best app for entries
for(let [keys,values] of Object.entries(user)){
    console.log(keys,values);
}
}
dif()



// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
//    greeting: function(){
//     console.log(`Strike is coming on 18 october ${this.name}`);
//     return 20;
//    }
// }

// const user2 = {
//     name:"Mohan",
//     account:201,
//      greeting: function(){
//     console.log(`Strike is coming on 18 october ${this.name}`);
//     return 20;
//    }
// }

// user2.greeting = user.greeting;

// user2.greeting();
// const va = user.greeting();
// console.log(va);

// nested object

// const user = {
//    name: "Rohit",
//    age: 20,
//    emailId: "negi@gmail.com",
//    amount: 3400,
//    address: {
//     city:"kotdwar",
//     state:"Uttarkhand"
//    }
// }

// shallow copy
// const user2 = {...user};
// user2.name = "Mohan";
// user2.address.city = "Dwarka";

// console.log(user2);

// console.log(user.address.city);


// deep copy

// const user2 = structuredClone(user);
// user2.address.city = "Dwarka";
// console.log(user);
// keY; String || Symbol

// const sym = Symbol("id");

// const user = {
//     name:"Rohit",
//     age:20,
//     0: 100,
//     2: "Mohan",
//     [sym]:"Hello Ji"
// }

// const arr = [10,20,30,40];

// {
//     0:10,
//     1:20,
//     2:30,
//     3: 40
// }

console.log(user[sym]);


