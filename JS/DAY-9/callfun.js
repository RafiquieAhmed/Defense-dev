// function greet(){
//     console.log("Hello Ji, Kaise ho")
// }

// function dance(){
//     console.log("I am dancing");
// }

// function meet(callback){
//     console.log("I am going to meet someone");
//     // dance(); hardcode (Reusable)
//     // code hota jisko marta
//     callback();
//     console.log("I have finished meeting");
// }

// meet(greet);
// meet(dance);

// blinkit

function blinkitOrderPlaced(){
    console.log("We have started packing your Order");
}

function zomatoOrderPlaced(){
    console.log("We have started preparing your food");
}

function payment(amount,callback){
    console.log(`${amount} payment has initilized`)
    console.log("Payment is received");
    callback();

    // GST: Government
    // Rider ko kitna payment dena
    // company ko kitna 
}

payment(500,zomatoOrderPlaced);
payment(300,blinkitOrderPlaced);