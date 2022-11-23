import { drinks } from './drinks.js'

function openCloseCompare(){
    const compareList = document.querySelector(".compare-list");
    let status = compareList.getAttribute("class");

    status.includes("hidden") ? compareList.classList.remove("hidden") : compareList.classList.add("hidden");
}

document.querySelector('#compare-text').addEventListener('click', function(){openCloseCompare()})

// FILTRO EM TEMPO REAL - USUÁRIO ESCREVEU NA PESQUISA
const searchInput = document.querySelector("#compare-search-bar");

searchInput.addEventListener("input", typing => {
    let text = typing.target.value.toLowerCase();
    let drinksObject = Object.values(drinks());
    let drinksFilter = drinksObject.filter(e => e.name.toLowerCase().includes(text));
    let compareCards = document.querySelector("#compare-product-cards");

    document.querySelectorAll(".compare-product-card").forEach(e => e.remove());
    for (let i = 0; i < drinksFilter.length; i++) {
        compareCards.innerHTML += '<div class="compare-product-card" id="product-'+drinksFilter[i].id+'">' +
            '<img class="compare-product-image" src="' + drinksFilter[i].img + '" alt="Produto">' +
            '<h3 class="compare-product-name">' + drinksFilter[i].name + '</h3>' +
            '<span class="compare-product-price">' + 'R$' + drinksFilter[i].price.toFixed(2) + '</span>' +
            '<span class="compare-product-rating">' + drinksFilter[i].rating.toFixed(1) + '</span>' +
            '</div>'
    }


    console.log(drinksFilter);
});

// INÍCIO - TODOS OS PRODUTOS EXPOSTOS - USUÁRIO NÃO ESCREVEU NADA NA PESQUISA
let compareCards = document.querySelector("#compare-product-cards");

for (let i = 0; i < drinks().length; i++) {
    compareCards.innerHTML += '<div class="compare-product-card" id="product-'+drinks()[i].id+'">' +
        '<img class="compare-product-image" src="' + drinks()[i].img + '" alt="Produto">' +
        '<h3 class="compare-product-name">' + drinks()[i].name + '</h3>' +
        '<span class="compare-product-price">' + 'R$' + drinks()[i].price.toFixed(2) + '</span>' +
        '<span class="compare-product-rating">' + drinks()[i].rating.toFixed(1) + '</span>' +
        '</div>'
}

let bebidas = document.querySelectorAll(".compare-product-card")
for (let i = 0; i < bebidas.length; i++){
    console.log(bebidas[i].id)
    bebidas[i].addEventListener('click', function(){window.open("../compare.html?"+[i].id)})
}