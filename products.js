const productsContainer = document.getElementById("products");
productsContainer.innerHTML = products.map(product => `
    <div class="product-card">
        <div class="image-box">
            <span class="new-badge">${product.badge}</span>
            <img
                src="${product.image}"
                alt="${product.alt}"
            >
        </div>
        <div class="product-info">
            <span class="category">
                ${product.category}
            </span>
            <h2>
                ${product.title}
            </h2>
            <p>
                ${product.description}
            </p>
            <div class="bottom">
                <span class="price">
                    ${product.price}
                </span>
                <button class="shop-btn">
                    Shop Now
                </button>
            </div>
        </div>
    </div>
`).join("");


// PRODUCT DETAILS
const productCards = document.querySelectorAll(".product-card");

productCards.forEach(function(card, index) {

    const shopButton = card.querySelector(".shop-btn");

    shopButton.addEventListener("click", function() {

        window.location.href =
            "product.html?id=" + index;

    });

});