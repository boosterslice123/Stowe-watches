var home = document.querySelector("#home");
var spotlight = document.querySelector("#spotlight");
var shop = document.querySelector("#shop");

var visiblePage = home;

function showHome() {
    if (visiblePage != home) {
        visiblePage.style.display = "none";
        home.style.display = "block";
        visiblePage = home;
    }
}

function showSpotlight() {
    if (visiblePage != spotlight) {
        visiblePage.style.display = "none";
        spotlight.style.display = "block";
        visiblePage = spotlight;
    }
}

function showShop() {
    if (visiblePage != shop) {
        visiblePage.style.display = "none";
        shop.style.display = "block";
        visiblePage = shop;
    }
}