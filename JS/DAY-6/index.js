function string(){
    const str1="what means by Noor";
     const date="28-9-2025";
    const day ="monday";
    const str2='what is your dream on 28-9-2025 ';
    const str3 =`sanji has best character deveploment  ${day}`;
    console.log(str1);
    console.log(str2);
    console.log(str3);
    //immutable
    console.log(str1.length);
    console.log(str1);
     //change
    day[2]="m";
    console.log(day);
}
//string();
function fun(){
    str ="Coder army on js series code to dev";
    console.log(str.toUpperCase());
    console.log(str.toLowerCase());
    console.log(str);

    console.log(str.indexOf('Code'));
    console.log(str.indexOf('arv'));
    console.log(str.lastIndexOf('cod'));
    console.log(str.includes('js'));

}
//fun();

function cutstr(){
    str ="Coder army on js series code to dev coder";
    console.log(str.slice(2,7));
    console.log(str.slice(-5));
    console.log(str.substring(2,10));//not vaild negative index
    const a="run";
    const b="to dev";
    const c=a+" "+b;
    console.log(c);
    const name="moahammed"
    console.log(name.replace("ed","ad"));
    console.log(str.replaceAll("der","de"));
    const str1="         hi !    hello     "
    console.log(str1.trim());
    const names="balu firdos raju sai arun ";
    console.log(names.split(" "));

}
cutstr();

//time
// const now = new Date();

// console.log(now);
// console.log(now.toString());
// console.log(now.toISOString());
// console.log(now.toLocaleString());


// Local time chal rha
// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getHours());
// console.log(now.getSeconds());


// days: Mon-tue(1 based)
// Month: 0 1

// year month date hour minute second millisecond
// const now = new Date(2025,8,20,8,25,16,125);

// console.log(now.toString());


// Timestamp
const now = Date.now();
const dates = new Date(1759275037293);
// console.log(dates.toString());

console.log(dates);
console.log(now);
// 1759272851288: TimeStamp