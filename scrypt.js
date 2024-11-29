// Initialize cart
let cart = [];
let total = 0;

// Function to add product to cart
function addToCart(product, price) {
    cart.push({ product, price });
    total += price;

    // Update the cart display
    updateCart();
}

// Function to update the cart
function updateCart() {
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = ''; // Clear current cart items

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.product} - $${item.price}`;
        cartList.appendChild(listItem);
    });

    // Update total price
    document.getElementById('totalPrice').textContent = `Total: $${total}`;
}

// Handle "Place Order" button click
document.getElementById('orderButton').addEventListener('click', function() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Create the message to send to Telegram bot
    let orderMessage = 'New Order:\n';
    cart.forEach(item => {
        orderMessage += `${item.product} - $${item.price}\n`;
    });
    orderMessage += `Total: $${total}`;

    // Send order to Telegram bot using Web App API
    if (Telegram.WebApp) {
        Telegram.WebApp.sendData(orderMessage);
        // Close the Web App after sending the data
        Telegram.WebApp.close();
    }
});
