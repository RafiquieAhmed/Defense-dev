const mul=(n1,n2)=>n1*n2;

console.log(mul(2*5));

let arr=[111,23,59,9];
arr.sort((a,b)=>a-b);

// const greeting=()=>{
//     return{
//         name:"alpha",
//         age:20,
//     }
// }

//step1

// const greeting=()=>{name:"robin",age:25} //getting error to return some 

//solution(
const greeting=()=>({name:"robin",age:25});
console.log(greeting);

//IIFE->immedately calling function after created  ()();

(function wishing(){
    console.log("welcome to js series");
})();
(()=>{
    console.log("python vsjs");
})();