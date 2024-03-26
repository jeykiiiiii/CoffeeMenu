// Prices for each type of coffee
var coffeePrices = {
    "Coffee 1": 5,
    "Coffee 2": 6,
    "Coffee 3": 4,
    "Coffee 4": 7,
    "Coffee 5": 4.5,
    "Coffee 6": 6.5
};

// Open the order dialog
function openOrderDialog(coffeeName) {
    var modal = document.getElementById("orderDialog");
    var coffeeNameElement = document.getElementById("coffeeName");
    coffeeNameElement.textContent = "Order " + coffeeName;
    modal.style.display = "block";
}

// Close the order dialog
function closeOrderDialog() {
    var modal = document.getElementById("orderDialog");
    modal.style.display = "none";
}

// Place the order
function placeOrder() {
    var quantity = parseInt(document.getElementById("quantity").value);
    var name = document.getElementById("name").value.trim();
    var location = document.getElementById("location").value.trim();
    var coffeeName = document.getElementById("coffeeName").textContent;
    
    if (isNaN(quantity) || quantity <= 0 || name === '' || location === '') {
        alert("Please enter valid values for quantity, name, and location.");
        return;
    }
    
    var totalValue = calculateTotal(coffeeName, quantity);
    var message = "Thank you, " + name + "! You have ordered " + quantity + " of " + coffeeName + ". Your order will be delivered to " + location + ". Total cost: $" + totalValue.toFixed(2);
    
    alert(message);
    closeOrderDialog();
}

// Calculate total value
function calculateTotal(coffeeName, quantity) {
    var pricePerCoffee = coffeePrices[coffeeName];
    return pricePerCoffee ? quantity * pricePerCoffee : 0;
}
