const urlParams = new URLSearchParams(window.location.search);

const productId = Number(urlParams.get("id"));

const product = products[productId];
console.log("products",products)

if (product) {

    // Product Image
    document.getElementById("mainProductImage").src =
        product.image;

    document.getElementById("mainProductImage").alt =
        product.alt;


    // Category
    document.getElementById("productCategory").textContent =
        product.category;


    // Product Name
    document.getElementById("productName").textContent =
        product.title;


    // Price
    document.getElementById("productPrice").textContent =
        product.price;


    // Description
    document.getElementById("productDescription").textContent =
        product.description;

}