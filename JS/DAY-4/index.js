//operators
//arithmetic operator
function arithmetic(){


let x=20;
let y=10;
let add=x+y;
let sub =x-y;
let mul =x-y;
let div=x/y;
let mod=x%y;
let numpow=x**2;
console.log(add ,sub,mul , div , mod ,numpow);
}
arithmetic();

//comparision operator;
function comparision () {
    let x=10;
    let y="10";
    
console.log(x<y);
console.log(x>y);
console.log(x<=y);
console.log(x>=y);
console.log(x==y);
console.log(x!=y);
console.log(x===y);
}
comparision();

//triple equal to (===) ->type check(same type hone chaiye===, uske baad wo comparision )
let z="120";
let a=Number(z);
console.log(a);
console.log(typeof(a));

function NAN(){
    let a="121ac";
    let b=Number(a);
    console.log(b);
    console.log(0/0);
}
NAN();
function dt(){
//boolean ->number
console.log(Number(true));
console.log(Number(false));
console.log(String(10),typeof(String(10)));
console.log(Number (null));
console.log(Number (undefined));
console.log(String(true));
console.log(String(undefined),typeof(String(undefined)));
console.log(Boolean(30));
console.log(Boolean(""));

}
dt();
/* note the js behaviour follows ====ecma =====
*/

//conversation <= ,<,>,>=  b/w (null ->number ,undefined -->NAN)
console.log(null>=0);
console.log(null<=0);
console.log(null<0);
console.log(null>0);
console.log(null>=undefined);

console.log("Rohit">"Mohit");
console.log(NaN==NaN);
 //loops
 for(let i=0;i<10;i++){
    console.log(i);
 }
 let i=0;
 while(i<10){
    console.log(i);
    i++;
 }

 let age=15;
 if(age>=18){
    console.log("eligible");
 }
 else{
    console.log("not elible");
 }

 branch="cse"
 if(branch="cse"){
    console.log("computer branch");
 }
 else if(branch="ece"){
    console.log("not computer");
 }
else{
      console.log("not computer branch");
}

//logical operators
console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true);

console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(false || true);

let a1="Rohi";
let a2="Mohi";
let  a3=a1 && a2;
console.log(a3);

// &&: if first value is fasle,it will return the first value itself
//if first valuev is true ,it will return second

function OR_oper(){
    let a=0;
    let b=20
    console.log(a||b);
    let c=10;
    console.log(c||b);

}
OR_oper();
// &&: if first value is True,it will return the first value itself
//if first valuev is flase ,it will return second

console.log(4!=5);
