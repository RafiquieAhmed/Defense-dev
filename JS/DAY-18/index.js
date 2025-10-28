//callback hellwith food order example
const orderDetail = {
    cost: 520,
    items: ["biryani", 'pani puri', 'pizza'],
    customer_name: "Rohit",
    customer_location: "Dwarka",
    restaurant_name: "Dominos",
};

function preparingOrder(orderDetail, Callback) {
    console.log(`Your Order is getting Prepared ${orderDetail.items}`);

    setTimeout(() => {
        console.log("Your Order is prepared");
        orderDetail.token = "10";  // ✅ Add token number
        Callback(orderDetail);  // 👉 Pass to next step
    }, 3000);
}

function pickupOrder(orderDetail, Callback) {
    console.log(`Delivery partner is on the way to pickup the order from ${orderDetail.restaurant_name}`);

    setTimeout(() => {
        console.log("I have picked up your order");
        orderDetail.pickup = true;  // ✅ Mark as picked up
        Callback(orderDetail);  // 👉 Pass to next step
    }, 3000);
}
function deleiverOrder(orderDetail) {
    console.log(`I am on my way to deliver the order ${orderDetail.customer_location}`);

    setTimeout(() => {
        console.log("Your order is delivered successfully");
        orderDetail.delivery = true;  // ✅ Final status
    }, 1000);
}
