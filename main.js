import {drinksFlow} from './scripts/dinamics.js'
import {drinks} from './scripts/drinks.js'
import {filterApplication} from "./scripts/filters.js"

var listaBebidas = drinks()



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
const filterOption = document.querySelectorAll(".filter-options-list")
let itemsList = document.querySelectorAll(".filter-list")
for (let indice = 0; indice < filterOption.length; indice++)
{
    filterOption[indice].addEventListener("click", function(){filterApplication(filterOption[indice].id)})
}
for (let indice = 0; indice < itemsList.length; indice++){
    itemsList[indice].style.display = "none"
}
ordering.addEventListener("change", function(){changeOrder()})
