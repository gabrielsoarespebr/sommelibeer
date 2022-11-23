drinks();

for (let i = 0; i < 2; i++) {


    var x = document.querySelector(".product-image");
    x.setAttribute("src", drinks()[i].img);

    var x = document.querySelector("#price");
    x.textContent = "R$" + drinks()[i].price.toFixed(2);

    var x = document.querySelector(".product-name");
    x.textContent = drinks()[i].name;

    var x = document.querySelector(".rating");
    x.textContent = drinks()[i].rating.toFixed(1);

    var x = document.querySelector("#brand");
    x.textContent = drinks()[i].brand;

    var x = document.querySelector("#volume");
    x.textContent = drinks()[i].volume + "ml";

    var x = document.querySelector("#type");
    x.textContent = drinks()[i].type;

    var x = document.querySelector("#alcoholcontent");
    x.textContent = drinks()[i].alcoholcontent + "%";

    var x = document.querySelector("#ibu");
    x.textContent = drinks()[i].ibu;

    var x = document.querySelector("#energyvalue");
    x.textContent = drinks()[i].energyvalue + "kcal";

    var x = document.querySelector("#carbohydrates");
    x.textContent = drinks()[i].carbohydrates + "g";

    var x = document.querySelector("#allergens");
    x.textContent = drinks()[i].allergens;

    var x = document.querySelector("#ingredients");
    x.textContent = drinks()[i].ingredients;

    var x = document.querySelector("#harmonization");
    x.textContent = drinks()[i].harmonization;

    var x = document.querySelector(".user-comment");
    x.textContent = drinks()[i].comment;

    var x = document.querySelector(".beer-mug-comment-header");
    x.textContent = drinks()[i].rating;

}
