import {orderProductGrid} from './scripts/dinamics.js'
import {changeOrder} from './scripts/orderFilter.js'
import {filterDisplayChanger} from "./scripts/visualEffects.js"
import {auxFlowRun} from './scripts/dinamics.js' 
import {specifyFilterCreator} from './scripts/filters.js'


function addListeners(){
    orderOption.addEventListener("change", function(){changeOrder(orderOption.value)})

    document.querySelector(".arrow-right").addEventListener("click", function(){auxFlowRun("next")})
    document.querySelector(".arrow-left").addEventListener("click", function(){auxFlowRun("prev")})

    for (let indice = 0; indice < specifyFilterDisplay.length; indice++)
    {
        specifyFilterDisplay[indice].addEventListener("click", function(){filterDisplayChanger(specifyFilterDisplay[indice].id)})
    }
}

const orderOption = document.querySelector("#orderBy")
const specifyFilterDisplay = document.querySelectorAll(".filter-options-list")

//OnCreate
addListeners()
orderProductGrid()
specifyFilterCreator()
filterDisplayChanger('all')




/*
const selectOption = document.querySelectorAll(".filter-item")

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

}*/