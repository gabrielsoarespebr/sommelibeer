import {drinksFlow} from './scripts/dinamics.js'
import {drinks} from './scripts/drinks.js'
import {filterApplication} from "./scripts/filters.js"

var listaBebidas = drinks()
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
const selectOption = document.querySelectorAll(".filter-item")
let itemsList = document.querySelectorAll(".filter-list")
for (let indice = 0; indice < filterOption.length; indice++)
{
    filterOption[indice].addEventListener("click", function(){filterApplication(filterOption[indice].id)})
}
for (let indice = 0; indice < itemsList.length; indice++){
    itemsList[indice].style.display = "none"
}

const ordering = document.querySelector("#orderBy")
ordering.addEventListener("change", function(){changeOrder()})

for (let cont = 0; cont < selectOption.length; cont++){
    selectOption[cont].addEventListener("click", function(){addFilter(selectOption[cont])})
}

function addFilter(option){
    //option.style.color = "var(--orange)"
    colorSelected(option.id)
}

function colorSelected(id){
    if (id.split("-")[2] == "price"){
        let priceList = document.querySelector("#price-list").querySelectorAll('.filter-item')
        for (let cont = 0; cont < priceList.length; cont++){
            if (priceList[cont].id == id){
                priceList[cont].style.color = "var(--orange)"
                priceList[cont].style.fontWeight = "bold"
            }
            else {
                priceList[cont].style.color = "var(--black)"
                priceList[cont].style.fontWeight = "normal"
            }

        }
    }
    if (id.split("-")[2] == "ml"){
        let volumeList = document.querySelector("#volume-list").querySelectorAll('.filter-item')
        for (let cont = 0; cont < volumeList.length; cont++){
            if (volumeList[cont].id == id){
                volumeList[cont].style.color = "var(--orange)"
                volumeList[cont].style.fontWeight = "bold"
            }
            else {
                volumeList[cont].style.color = "var(--black)"
                volumeList[cont].style.fontWeight = "normal"
            }
        }
    }
    if (id.split("-")[2] == "teor"){
        let alcoholList = document.querySelector("#alcohol-list").querySelectorAll('.filter-item')
        for (let cont = 0; cont < alcoholList.length; cont++){
            if (alcoholList[cont].id == id){
                alcoholList[cont].style.color = "var(--orange)"
                alcoholList[cont].style.fontWeight = "bold"
            }
            else {
                alcoholList[cont].style.color = "var(--black)"
                alcoholList[cont].style.fontWeight = "normal"
            }
        }
    }

}