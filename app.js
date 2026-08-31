let menuBtn = document.querySelector(".menu-btn");
let navLinks = document.querySelector(".nav-links");
let navItems = document.querySelectorAll(".nav-links a");
let categories = document.querySelectorAll(".category-item");
let cartItem = document.querySelector(".cart-items");





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



// CART ITEMS
let cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [
    {
        id: 1,
        name: "Nacklaces Bracelets Ear Rings Nose Pin Nose Rings Finger Rings",
        description: "Premium Jewellery Collection",
        Image: "./images/earings1.jpg",
        Price: 45,
        quantity: 1
    },

    {
        id: 2,
        name: "Golden Luxury Necklace",
        category: "NECKLACE",
        description: "Premium jewellery collection",
        image: "./images/necklace1.jpg",
        price: 75,
        quantity: 1
    },

    {
        id: 3,
        name: "Royal Diamond Ring",
        category: "RING",
        description: "Premium jewellery collection",
        image: "./images/ring1.jpg",
        price: 60,
        quantity: 1
    }
];

localStorage.setItem(
    "cartProducts",
    JSON.stringify(cartProducts)
);

function displayCart() {

    let products = cartItems.querySelectorAll(".cart-item");

    products.forEach(function(product, index) {

        let quantity = product.querySelector(
            ".cart-quantity span"
        );

        let price = product.querySelector(
            ".cart-price"
        );

        let productPrice =
            cartProducts[index].price;

        let productQuantity =
            cartProducts[index].quantity;


        quantity.textContent =
            productQuantity;


        price.textContent =
            "$" +
            (productPrice * productQuantity).toFixed(2);

    });


    updateTotal();

}


// ==========================================
// PLUS BUTTON
// ==========================================

let plusButtons = document.querySelectorAll(
    ".cart-quantity button:last-child"
);


plusButtons.forEach(function(button, index) {

    button.addEventListener("click", function() {

        cartProducts[index].quantity++;


        localStorage.setItem(
            "cartProducts",
            JSON.stringify(cartProducts)
        );


        displayCart();

    });

});


// ==========================================
// MINUS BUTTON
// ==========================================

let minusButtons = document.querySelectorAll(
    ".cart-quantity button:first-child"
);


minusButtons.forEach(function(button, index) {

    button.addEventListener("click", function() {

        if (cartProducts[index].quantity > 1) {

            cartProducts[index].quantity--;

        }


        localStorage.setItem(
            "cartProducts",
            JSON.stringify(cartProducts)
        );


        displayCart();

    });

});


// ==========================================
// DELETE PRODUCT
// ==========================================

let deleteButtons = document.querySelectorAll(
    ".cart-remove"
);


deleteButtons.forEach(function(button, index) {

    button.addEventListener("click", function() {

        cartProducts.splice(index, 1);


        localStorage.setItem(
            "cartProducts",
            JSON.stringify(cartProducts)
        );


        let cartItem =
            button.closest(".cart-item");


        cartItem.remove();


        updateTotal();

    });

});


// ==========================================
// UPDATE TOTAL
// ==========================================

function updateTotal() {

    let subtotal = 0;


    cartProducts.forEach(function(product) {

        subtotal +=
            product.price *
            product.quantity;

    });


    let shipping = 10;

    let discount = 15;


    if (cartProducts.length === 0) {

        shipping = 0;
        discount = 0;

    }


    let total =
        subtotal +
        shipping -
        discount;


    document.querySelector(
        ".summary-row:nth-of-type(1) strong"
    ).textContent =
        "$" + subtotal.toFixed(2);


    document.querySelector(
        ".summary-row:nth-of-type(2) strong"
    ).textContent =
        "$" + shipping.toFixed(2);


    document.querySelector(
        ".summary-row:nth-of-type(3) strong"
    ).textContent =
        "-$" + discount.toFixed(2);


    document.querySelector(
        ".summary-total strong"
    ).textContent =
        "$" + total.toFixed(2);

}


// ==========================================
// INITIAL LOAD
// ==========================================

displayCart();