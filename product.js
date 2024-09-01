var sidenav = document.getElementById("sidenav")

var menuicon = document.getElementById("menuicon")

menuicon.addEventListener("click" , function(){
    sidenav.style.right = 0
})

let closenav = document.getElementById("closenav")

closenav.addEventListener("click" , function(){
    sidenav.style.right = "-50%"
})

let productContainer = document.getElementById("productcontainer");
let search = document.getElementById("search");
let productList = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function (event) {
    let enteredValue = event.target.value.toUpperCase();

    for (let count = 0; count < productList.length; count++) {
        let productName = productList[count].querySelector("h3").textContent.toUpperCase();

        if (productName.indexOf(enteredValue) < 0) {
            productList[count].style.display = "none";
        } else {
            productList[count].style.display = "block";
        }
    }
});