let total = 0;

function addToCart(name, price) {
    total += price;

    document.getElementById("total").innerHTML = total;

    let li = document.createElement("li");
    li.innerHTML = name + " - ₹" + price;
    document.getElementById("cartItems").appendChild(li);

    alert(name + " added to cart");
}
function payNow(total) {

    var options = {
        key: "rzp_test_T8Jja5drHUXnUD",
        amount: total * 100, 
        currency: "INR",
        name: "Vehicle World",
        description: "Vehicle Rental Payment",

        handler: function (response) {
            alert("Payment Successful!");
            alert("Payment ID: " + response.razorpay_payment_id);
        },

        theme: {
            color: "#ff6f00"
        }
    };

    var rzp = new Razorpay(options);
    rzp.open();
}