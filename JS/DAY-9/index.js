//function

function greeting(){
    console.log("welcome to day 9 of js series -->Function topic-->")
    return 'never miss a single day!'
}
console.log(greeting());

//passing multiple values in sinle function
// function addnum(num1,num2,num3=0,num4=0){
//     const sum=num1+num2+num3+num4;
//     console.log(sum);
// }
// addnum(2,3)
// addnum(30,-20);
// addnum(100,21,-2,-90)

//soluation for 10000 values

function addnum(...num){
    let sum =0;
    for(let val of num){
        sum+=val;
    }
    console.log(sum);
}
addnum(1,0,2,3,4,5,6,7,8,9)


function fun(){
    const arr=[10,20,30,40]
    const arr2=[11,22,33,44];
    const[first,second,...num]=arr

    //combine two arrays

    const ans=[...arr,...arr2];
    return(ans);

}
//console.log(fun());

//vs
//getting erro
console.log(fun1(2,2));
const fun1=function(num1,num2){
    return num1+num2;
}
console.log(fun1(2,2));

console.log(fun2(20,20));
function fun2(num1,num2){
    return num1+num2;
}

//arrow function

const addingnum=(num1,num2)=>{
    return num1+num2;
}

//optimize or short hand if have single line return;
const twonum=(num1,num2)=>num1+num2;

console.log(twonum(2,8));


