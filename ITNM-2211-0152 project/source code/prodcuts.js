// Initialize the cart as an empty array
let cart = [];

// Function to add items to the cart
function addToCart(productName, productPrice) {
    const item = {
        name: productName,
        price: productPrice
    };
    cart.push(item);
    alert(`${productName} has been added to your cart!`);
}

// Function to navigate to the selected category page
function navigateToCategory() {
    const selectedCategory = document.getElementById('category').value;
    let url = 'products.html';
    if (selectedCategory !== 'all') {
        url = `${selectedCategory}.html`;
    }
    window.location.href = url;
}
