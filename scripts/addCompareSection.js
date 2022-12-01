import { drinks } from './drinks.js'
let drinkList = drinks()
let id = window.location.href.split("?")[1]

for (let i = 0; i < drinkList.length; i++){
    if (drinkList[i].id == id){
        drinkList.splice(i, 1)
    }
}

function openCloseCompare(){
    const compareList = document.querySelector(".compare-list");
    let status = compareList.getAttribute("class");

    status.includes("hidden") ? compareList.classList.remove("hidden") : compareList.classList.add("hidden");
}

document.querySelector('#compare-text').addEventListener('click', function(){openCloseCompare()})

// FILTRO EM TEMPO REAL - USUÁRIO ESCREVEU NA PESQUISA
const searchInput = document.querySelector("#compare-search-bar");

searchInput.addEventListener("input", typing => {
    document.querySelector("#compare-product-cards").innerHTML = ''
    let text = typing.target.value.toLowerCase();
    if (text == ''){
        let compareCards = document.querySelector("#compare-product-cards");
        for (let i = 0; i < 4; i++) {
            compareCards.innerHTML += '<a href="compare.html?'+id+'-'+drinkList[i].id+'" hreflang="pt-br" rel="next" target="_self" class="compare-product-card" id="product-'+drinkList[i].id+'">' +
                '<img class="compare-product-image" src="' + drinkList[i].img + '" alt="Produto">' +
                '<h3 class="compare-product-name">' + drinkList[i].name + '</h3>' +
                '<span class="compare-product-price">' + 'R$' + drinkList[i].price.toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2}) + '</span>' +
                '<span class="compare-product-rating">' + drinkList[i].rating.toFixed(1) + '</span>' +
                '</a>'
        }
    }
    else
    {
        let drinksObject = drinkList;
        let drinksFilter = drinksObject.filter(e => e.name.toLowerCase().includes(text));
        let compareCards = document.querySelector("#compare-product-cards");
        if (drinksFilter.length > 0)
        {
            document.querySelectorAll(".compare-product-card").forEach(e => e.remove());
            for (let i = 0; i < drinksFilter.length; i++) 
            {
                compareCards.innerHTML += '<a href="compare.html?'+id+'-'+drinksFilter[i].id+'" hreflang="pt-br" rel="next" target="_self" class="compare-product-card" id="product-'+drinksFilter[i].id+'">'+
                '<img class="compare-product-image" src="' + drinksFilter[i].img + '" alt="Produto">' +
                '<h3 class="compare-product-name">' + drinksFilter[i].name + '</h3>' +
                '<span class="compare-product-price">' + 'R$' + drinksFilter[i].price.toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2}) + '</span>' +'<span class="compare-product-rating">' + drinksFilter[i].rating.toFixed(1) + '</span>' +'</a>'
            }   
        }
        else
        {
            compareCards.innerHTML = '<p class="no-result-compare">Sem resultados</p>'
        }
    }
});


let compareCards = document.querySelector("#compare-product-cards");
// INÍCIO - TODOS OS PRODUTOS EXPOSTOS - USUÁRIO NÃO ESCREVEU NADA NA PESQUISA
for (let i = 0; i < 4; i++) {
    compareCards.innerHTML += '<a href="compare.html?'+id+'-'+drinkList[i].id+'" hreflang="pt-br" rel="next" target="_self" class="compare-product-card" id="product-'+drinkList[i].id+'">' +
        '<img class="compare-product-image" src="' + drinkList[i].img + '" alt="Produto">' +
        '<h3 class="compare-product-name">' + drinkList[i].name + '</h3>' +
        '<span class="compare-product-price">' + 'R$' + drinkList[i].price.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2}) + '</span>' +
        '<span class="compare-product-rating">' + drinkList[i].rating.toFixed(1) + '</span>' +
        '</a>'
}