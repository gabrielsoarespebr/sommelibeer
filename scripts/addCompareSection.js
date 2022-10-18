drinks();

var i = 1;
var count = i + 4;

while (i < count) {

    var x = document.querySelector(`.compare-product-image.compare-product${i}`);
    x.setAttribute("src", drinks()[i].img);

    var x = document.querySelector(`.compare-product-name.compare-product${i}`);
    x.textContent = drinks()[i].name;

    var x = document.querySelector(`.compare-product-price.compare-product${i}`);
    x.textContent = "R$" + drinks()[i].price.toFixed(2);

    var x = document.querySelector(`.compare-product-rating.compare-product${i}`);
    x.textContent = drinks()[i].rating.toFixed(1);

    i++;
}