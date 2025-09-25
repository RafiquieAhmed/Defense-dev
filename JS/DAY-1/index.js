//how to make variables

let name ="Rafiquie"

let n=1;
 n=2;
 //let num=2; get error
 console.log(n);

 //const
 const age=24;
//  age=20; error

 console.log(age);

 //old method before es6

 var a=12;
 var a=0;
 console.log(a);

 //why not prefer var ?
 if(true){
    var con=1234;
    //not allow const ,let pass value out of scope
 }
 console.log("condition of var: ",con);

 //data Types

 //number
 function num(){
    let a=10,b=2.30;
    console.log(a+b);
    
 }
 num();
 //string
 function str(){
    let name1="gojo";
    let title='the strogest in jjk';
    console.log(name1,title);
 }
 str();

 //Bolean -->3

 function tf(){
    let login=true;
    let notlog=false;
    console.log(login,notlog);
    return login ,notlog;
 }
 console.log(tf());

 // undefined
 function und(){
    let user;
    console.log(user);
 }
 und();

 //Big Int
 function Bignum(){
    number1=3232536442353534535352423433n;
    console.log(number1);
 }
 Bignum();

 //null
 function value(){
    user_name=null;
    console.log(user_name);
    //name return  if know
    //exists but not fecth right now;
    // undefined not avilable in db

 }
 value();
 //symbol
 function sym(){
    const id1= Symbol("id");
    const id2=Symbol("id");
    console.log(id1==id2);
 }
 sym();


 //non primtive

 // 1--> array
 function arr(){
    let arr1=[10,20,5.7,"hello",true];
    console.log(arr1);
 }
 arr()

 //object
  function obj_info(){
    let user_deta={
        name:"Rafiquie",
        batch:2025,
        age:20,
        height:5.7,
    }
  }

  //function
  let s=function add(){
    console.log("hello");
  }
  s();
  console.log(s

  );

  //find class or type
  console.log(typeof s);
  //primitive immuable nature
  let jjk="GOJO";
  jjk[0]="r"; //not change 
  console.log(jjk);

  //non primitive  type mutable
  let arr2=[10,20,30,40];
  arr2.push(50);
  console.log(arr2);

  let obj1={
    name:"rafi",
    exp:0,
  }
  obj1.name="RAFIQUIE";
  console.log(obj1);

  let ob2=obj1; //pass by refernce sharing same address
  ob2.name="rohan"
  console.log(obj1);