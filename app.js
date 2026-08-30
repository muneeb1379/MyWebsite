let menuBtn = document.querySelector(".menu-btn");
let navLinks = document.querySelector(".nav-links");
let navItems = document.querySelectorAll(".nav-links a");
let categories = document.querySelectorAll(".categories")




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
        let categorySlug = categoryName
        .toLowerCase()
        .replace(/\s+/g, "-")
        window.location.href = `products.html?category = ${categorySlug}`;
    });
});


