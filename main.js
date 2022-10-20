import {drinksFlow} from './scripts/dinamics.js'
import {drinks} from './scripts/drinks.js'

var listaBebidas = drinks()
var higherPrice, lowerPrice

for (let cont = 0; cont < listaBebidas.length; cont++){
    if (cont==0){
        higherPrice = lowerPrice = listaBebidas[cont].price
    }
    else {
        if (listaBebidas[cont].price > higherPrice){
            higherPrice = listaBebidas[cont].price
        }
        if (listaBebidas[cont].price < lowerPrice){
            lowerPrice = listaBebidas[cont].price
        }
    }
}

var total = parseFloat(((higherPrice - lowerPrice)/4).toFixed(2))
let priceList = document.querySelector("#price-list")
const ordering = document.querySelector("#orderBy")
const actionsByChoose = 
    {
        relevance_desc: listaBebidas.slice(0),
        relevance_asc: listaBebidas.slice(0).reverse(),
        rating_desc: listaBebidas.slice(0).sort(function(a,b) {return b.rating - a.rating}),
        rating_asc: listaBebidas.slice(0).sort(function(a,b) {return a.rating - b.rating}), 
        price_desc: listaBebidas.slice(0).sort(function(a,b) {return b.price - a.price}),
        price_asc: listaBebidas.slice(0).sort(function(a,b) {return a.price - b.price}),
        alcool_desc: listaBebidas.slice(0).sort(function(a,b) {return b.alcoholcontent - a.alcoholcontent}),
        alcool_asc: listaBebidas.slice(0).sort(function(a,b) {return a.alcoholcontent - b.alcoholcontent})
    }
function changeOrder(){
    let selectedOption = ordering.value
    drinksFlow(actionsByChoose[selectedOption])
    
}

function filterApplication(id)
{
    console.log(id)
    if (id=="price" && priceList.innerHTML =="")
    {    
        for (let c = 0; c < 5; c++)
        {
            priceList.style.padding = '5px'
            priceList.innerHTML += "<p>Até R$"+lowerPrice+"</p>"
        }
    }
    else
    {
        priceList.innerHTML = ""
        priceList.style.padding = '0px'
    }
}

drinksFlow(listaBebidas)
const filterOption = document.querySelectorAll(".filter-options-list")
for (let indice = 0; indice < filterOption.length; indice++)
{
    filterOption[indice].addEventListener("click", function(){filterApplication(filterOption[indice].id)})
}
//filterOption[0].addEventListener("click", function(){console.log(4)})
ordering.addEventListener("change", function(){changeOrder()})