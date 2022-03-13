//Mobile nav functionality

const hamburger = document.querySelector(".hamburger-icon"),
    menu = document.querySelector(".mobile-nav-list"),
    nav = document.querySelector(".nav"), 
    cart = document.querySelector(".shopping-cart"), 
    shoppingCartIcon = document.querySelector(".cart-icon"), 
    pageTitle = document.getElementsByTagName("title")[0], 
    mainContent = document.querySelector(".main-content");


hamburger.addEventListener("click", () => {
    if (menu.classList.contains("nav-open")) {
        menu.classList.remove("nav-open");
        hamburger.style.fill = "#fff";
    } else {
        menu.classList.add("nav-open");
        hamburger.style.fill = "#D87D4A";
    }
});

mainContent.addEventListener("click", () => {
    if (cart.classList.contains("open-cart")) {
        cart.classList.remove("open-cart");
        shoppingCartIcon.style.fill = "#fff";
        document.body.style.overflow = "auto";
    }
})

shoppingCartIcon.addEventListener("click", () => {
    if (cart.classList.contains("open-cart")) {
        cart.classList.remove("open-cart");
        shoppingCartIcon.style.fill = "#fff";
    } else {
        cart.classList.add("open-cart");
        shoppingCartIcon.style.fill = "#D87D4A";
    }
});

if (pageTitle.innerHTML.includes("Home page")) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = "black";
            nav.style.transition = "background-color .3s ease";
        } else {
            nav.style.backgroundColor = "transparent";
        }
    });
} else {
    nav.style.backgroundColor = "black";
    nav.style.transition = "none";
}