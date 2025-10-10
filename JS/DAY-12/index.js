//foreach
const arr=[10,20,30,"Rohit","sakura from wind breaker",90]


// arr.forEach((number)=>{
//     console.log(number);

// })

// arr.forEach((index,number,arr)=>{
//     console.log(index,number,arr);
// })

//filters
 const arr1=[10,20,6,90,66,890,999];
 //true:select ,false not selected

 const newArr=arr.filter((number)=>number<=19);
 console.log(newArr);

 //this =arr1
//  arr1.filtering=function(compare){
//     const ans=[];
//     for (let num of this){
//         if(compare(num)){
//             ans.push(num);
//         }
//     }
//     return ans;

//  }
 
//  console.log( arr1.filtering((num)=>num>90));
//not recommended
 Array.prototype.filtering=function(compare){
    const ans=[];
    for (let num of this){
        if(compare(num)){
            ans.push(num);
        }
    }
    return ans;

 }
 
 console.log( arr1.filtering((num)=>num>90));


 