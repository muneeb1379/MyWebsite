let menuBtn = document.querySelector(".menu-btn");
let navLinks = document.querySelector(".nav-links");
let navItems = document.querySelectorAll(".nav-links a");
let productCard = document.querySelectorAll(".product-card");




// MENU BUTTON
menuBtn.addEventListener("click", function() {
     navLinks.classList.toggle("show")
});

navItems.forEach(function(item){
    item.addEventListener("click", function(){
        navLinks.classList.remove("show");
    });
});


