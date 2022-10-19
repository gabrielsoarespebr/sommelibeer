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
//let priceList = document.querySelector("#price-list")
//for (let c = 0; c < 4; c++){
//    priceList.innerHTML += "<p>"+c+"</p>"
//}
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

drinksFlow(listaBebidas)
ordering.addEventListener("change", function(){changeOrder()})