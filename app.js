const products = [
    {
        image: "./images/img1.jpg",
        thumbnails: ["./images/img1.jpg","./images/img1.jpg","./images/img1.jpg","./images/img1.jpg"],
        alt: "Sneakers",
        category: "Footwear",
        title: "Urban Sneakers",
        description: "Modern sneakers designed for everyday comfort.",
        price: "$89",
        badge: "NEW"
    },
    {
        image: "./images/img2.jpg",
        alt: "Watch",
        category: "Accessories",
        title: "Classic Watch",
        description: "Elegant design with a timeless premium finish.",
        price: "$129",
        badge: "NEW"
    },
    {
        image: "./images/img3.jpg",
        alt: "Bag",
        category: "Bags",
        title: "Leather Bag",
        description: "Premium leather bag with a sophisticated appearance.",
        price: "$99",
        badge: "NEW"
    },
    {
        image: "./images/img3.jpg",
        alt: "Jacket",
        category: "Fashion",
        title: "Premium Jacket",
        description: "Stylish jacket made for a modern and confident look.",
        price: "$149",
        badge: "NEW"
    },
    {
        image: "./images/img1.jpg",
        alt: "Sunglasses",
        category: "Eyewear",
        title: "Modern Shades",
        description: "Minimal sunglasses with a clean and stylish design.",
        price: "$69",
        badge: "NEW"
    },
    {
        image: "./images/img2.jpg",
        alt: "Hoodie",
        category: "Clothing",
        title: "Premium Hoodie",
        description: "Soft and comfortable hoodie with a premium finish.",
        price: "$79",
        badge: "NEW"
    }
];



let menuBtn = document.querySelector(".menu-btn");
let navLinks = document.querySelector(".nav-links");
let navItems = document.querySelectorAll(".nav-links a");
let categories = document.querySelectorAll(".category-item");

// CART
let cartBtn = document.querySelector(".cart");
let cartItems = document.querySelectorAll(".cart-item");
let cartCount = document.querySelector(".cart-count");
let subtotalElement = document.querySelector(".summary-row strong");
let totalElement = document.querySelector(".summary-total strong");
let removeButtons = document.querySelectorAll(".cart-remove");
let quantityButtons = document.querySelectorAll(".cart-quantity button");
let couponInput = document.querySelector(".coupon-input input");
let couponButton = document.querySelector(".coupon-input button");
let shipping = 10;
let discount = 15;

// New Arrivels Cards

// MENU BUTTON
menuBtn.addEventListener("click", function() {
     navLinks.classList.toggle("show")
});

navItems.forEach(function(item){
    item.addEventListener("click", function(){
        navLinks.classList.remove("show");
    });
});


// Categories
categories.forEach(function(category){
    category.addEventListener("click", function(){
        let categoryName = category.querySelector("h3").textContent;
        console.log("Category name",categoryName)
        let categorySlug = categoryName
        .toLowerCase()
        .replace(/\s+/g, "-")
        window.location.href = `products.html?category = ${categorySlug}`;
    });
});
// ---------------------------------------------------------

// CARTBTN

cartBtn.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "./cart.html";
});




// UpdateCart

function UpdateCart(){
    let cartItems = document.querySelectorAll(".cart-tiem");
    let subtotal = 0;
    let totalItems = 0;

    cartItems.forEach(function(item){
        // Quantity
        let quantityElement = item.querySelector(".cart-quantity span");
        let quantity = Number(quantityElement.textContent);

        // Price
        let priceElement = item.querySelector(".cart-price");
        let price = parseFloat(priceElement.textContent.replace("$", ""));

        // Add Price to subtotal
        subtotal += price;

        // Add quantity to cart count
        totalItems += quantity;
    });

    // Update subTotal
    subtotalElement.textContent = "$" + subtotal.toFixed(2);

    // Update cart count
    cartCount.textContent = totalItems;

    // Calculate total
    let total = subtotal + shipping -discount;

    // Update total
    totalElement.textContent = "$" + total.toFixed(2);

}



// CART Increase number
quantityButtons.forEach(function(button){
    button.addEventListener("click", function(){

        // find .cart-quantity
        let quantityBox = button.parentElement;

        // find span
        let quantityElement = quantityBox.querySelector("span");

        // Convert quantity to number
        let quantity = Number(quantityElement.textContent);

        // find current cart item
        let cartItem = button.closest(".cart-item");

        // find price element
        let priceElement = cartItem.querySelector(".cart-price");

        // get original product

        let originalPrice = parseFloat(cartItem.querySelector(".cart-info strong").textContent.replace("$", "")
    )

    // Plus

    if(button.textContent.trim() === "+"){
        quantity++;
    }else if(button.textContent.trim() === "-"){
        if(quantity > 1){
            quantity--;
        }
    }

    // Update Quantity

    quantityElement.textContent = quantity;

    // Update product price
    let productTotal = originalPrice * quantity;

    priceElement.textContent = "$" + productTotal.toFixed(2);

    UpdateCart();
    });
});


// Remove function
removeButtons.forEach(function(button){
    button.addEventListener("click", function(){
        let cartItem = button.closest(".cart-item");
        cartItem.remove();
    });
});


// COUPON

couponButton.addEventListener("click", function(){
    let coupon = couponInput.value.trim().toUpperCase();

    if(coupon === "SAVE15"){
        discount = 15;
        UpdateCart();
        alert("Coupon applied successfully!");
    }else{
        discount = 0;
        UpdateCart();
        alert("Invalid Coupon Code!");
    }
});

UpdateCart();


// New Arrivels
