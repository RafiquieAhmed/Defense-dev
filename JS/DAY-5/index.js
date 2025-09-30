function num(){
    //Number
    let a=10;
    let b=345.6824;
    console.log(typeof b.toFixed(2));
     console.log(b.toFixed(2));
     console.log(b.toPrecision(3));
    console.log(b.toString());
    
}
//num();
//new method
function metod(){
    let a= new Number(20);
    let c=a;
    console.log(c==a);
    let b= new Number(20);
    console.log(a==b);
    let obj1={
        name:"Rohit"
    }
     let obj2=obj1;
    console.log(obj1==obj2);
    console.log("the boolean expression :",Boolean(10));
    console.log(Boolean(new Number(10)));
    console.log(Boolean([]));
    console.log(Boolean(null));
    //Non primitive : Reference bases pe compare
    //primtive copy by value
 }

//metod();

//Maths

console.log(Math.abs(-4));
console.log("PI",Math.PI);
console.log("Log10",Math.LN10);
console.log("Square root",Math.SQRT2);
console.log("cell",Math.ceil(6.3));
console.log("floor",Math.floor(6.3));
console.log("max",Math.max(6.8,0,56,90));

//random number

console.log(Math.random());