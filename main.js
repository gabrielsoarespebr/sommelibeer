import {orderProductGrid} from './scripts/dinamics.js'
import {changeOrder} from './scripts/orderFilter.js'
import {filterDisplayChanger} from "./scripts/visualEffects.js"
import {auxFlowRun} from './scripts/dinamics.js' 
import {specifyFilterCreator} from './scripts/filterCreator.js'
import {specifyFilterChanger} from './scripts/filterChanger.js'


function addListeners(){
    orderOption.addEventListener("change", function(){changeOrder(orderOption.value)})

    document.querySelector(".arrow-right").addEventListener("click", function(){auxFlowRun("next")})
    document.querySelector(".arrow-left").addEventListener("click", function(){auxFlowRun("prev")})

    for (let indice = 0; indice < specifyFilterDisplay.length; indice++)
    {
        specifyFilterDisplay[indice].addEventListener("click", function(){filterDisplayChanger(specifyFilterDisplay[indice].id)})
    }

    for (let cont = 0; cont < selectOption.length; cont++){
        selectOption[cont].addEventListener("click", function(){addFilter(selectOption[cont].id)})
    }
    
    for (let cont = 0; cont < selectAvaliation.length; cont++){
        selectAvaliation[cont].addEventListener("click", function(){addFilter(selectAvaliation[cont].id)})

    }
    for (let cont = 0; cont < selectAvaliation.length; cont++){
        selectAvaliation[cont].addEventListener("click", function(){addFilter(selectAvaliation[cont].id)})

    }

    for (let cont = 0; cont < checkButtons.length; cont++){
        checkButtons[cont].addEventListener("click", function(){checkHelper(checkButtons[cont].id)})
    }
}

specifyFilterCreator()
const selectOption = document.querySelectorAll(".filter-item")
const selectAvaliation = document.querySelectorAll('.filter-stars')
const checkButtons = document.querySelectorAll(".filter-button")

const checkTypes = document.querySelectorAll(".filter-type")
for (let cont  = 0; cont < checkTypes.length; cont++){
    checkTypes[cont].checked = "true"
}

const checkBrand = document.querySelectorAll(".filter-brand")
for (let cont  = 0; cont < checkBrand.length; cont++){
    checkBrand[cont].checked = "true"
}
const orderOption = document.querySelector("#orderBy")
const specifyFilterDisplay = document.querySelectorAll(".filter-options-list")

//OnCreate
addListeners()
orderProductGrid()

filterDisplayChanger('start')

function checkHelper(id){
    if (id == 'appType'){
        let drinkType = []
        for (let cont  = 0; cont < checkTypes.length; cont++){
            if (checkTypes[cont].checked){
                if(!drinkType.includes(checkTypes[cont].id)){
                    drinkType.push(checkTypes[cont].id)
                }
            }
        }
        addFilter([drinkType, "type"])
    }
    if (id == 'appBrand'){
        let drinkBrand = []
        for (let cont  = 0; cont < checkBrand.length; cont++){
            if (checkBrand[cont].checked){
                if(!drinkBrand.includes(checkBrand[cont].id)){
                    drinkBrand.push(checkBrand[cont].id)
                }
            }
        }
        addFilter([drinkBrand, "brand"])
    }
    
}






function addFilter(option){
    let drinksWithFilter = specifyFilterChanger(option)
    let endWithFilter
    if (drinksWithFilter.length >= 12){endWithFilter = 11}
    else {endWithFilter = drinksWithFilter.length - 1}
    orderProductGrid(0, endWithFilter, drinksWithFilter)
    colorSelected(option)
    if (window.scrollY>= 300){
        scroll(0, 100)

    }
}




function colorSelected(id){
    if (!Array.isArray(id)){
        if (id.split("-")[2] == "price"){
            let priceList = document.querySelector("#price-list").querySelectorAll('.filter-item')
            for (let cont = 0; cont < priceList.length; cont++){
                if (priceList[cont].id == id){
                    priceList[cont].style.color = "var(--orange)"
                }
                else {
                    priceList[cont].style.color = "var(--black)"
                }

            }
        }
        if (id.split("-")[2] == "ml"){
            let volumeList = document.querySelector("#volume-list").querySelectorAll('.filter-item')
            for (let cont = 0; cont < volumeList.length; cont++){
                if (volumeList[cont].id == id){
                    volumeList[cont].style.color = "var(--orange)" 
                }
                else {
                    volumeList[cont].style.color = "var(--black)"
                }
            }
        }
        if (id.split("-")[2] == "teor"){
            let alcoholList = document.querySelector("#alcohol-list").querySelectorAll('.filter-item')
            for (let cont = 0; cont < alcoholList.length; cont++){
                if (alcoholList[cont].id == id){
                    alcoholList[cont].style.color = "var(--orange)"
                }
                else {
                    alcoholList[cont].style.color = "var(--black)"
                }
            }
        }
        if (id.split("-")[2] == "star"){
            let avaliationList = document.querySelectorAll('.filter-stars')
            for (let cont = 0; cont < avaliationList.length; cont++){
                if (avaliationList[cont].id == id){
                    avaliationList[cont].src = './images/star'+(cont+1)+'Selected.png'

                    avaliationList[cont].style.width = '65%'
                }
                else {
                    avaliationList[cont].src = './images/star'+(cont+1)+'.png'
                    avaliationList[cont].style.width = '60%'
                }
            }
        }
    }
}

function checkedVerify(){

}