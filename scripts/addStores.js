stores();

for (var i = 0; i < 5; i++) {

    var x = document.querySelector(`#store-link${i}`);
    x.setAttribute("href", stores()[i].href);

    var x = document.querySelector(`#store-logo${i}`);
    x.setAttribute("src", stores()[i].img);

    var x = document.querySelector(`#store-name${i}`);
    x.textContent = stores()[i].name;

    var x = document.querySelector(`#store-price${i}`);
    x.textContent = "R$" + stores()[i].price.toFixed(2);
}