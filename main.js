import {orderProductGrid} from './scripts/dinamics.js'
import {changeOrder} from './scripts/orderFilter.js'
import {filterDisplayChanger} from "./scripts/visualEffects.js"
import {auxFlowRun} from './scripts/dinamics.js' 
import {specifyFilterCreator} from './scripts/filterCreator.js'
import {specifyFilterChanger} from './scripts/filterChanger.js'


function addListeners(){
    orderOption.addEventListener("change", function(){changeOrder(undefined, orderOption.value)})

    document.querySelector(".next").addEventListener("click", function(){auxFlowRun("next")})
    document.querySelector(".prev").addEventListener("click", function(){auxFlowRun("prev")})

    selectType.addEventListener("change", function(){selectAllType()})
    selectBrand.addEventListener("change", function(){selectAllBrand()})

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

    for (let cont = 0; cont < checkButtons.length; cont++){
        checkButtons[cont].addEventListener("click", function(){checkHelper(checkButtons[cont].id)})
    }

    moneyButton.addEventListener("click", function(){
        let minimo = (document.querySelector("#minimum-price").value).replaceAll(" ", "")
        let maximo = (document.querySelector("#maximum-price").value).replaceAll(" ", "")
        minimo = minimo.replaceAll("R$", "")
        minimo = minimo.replaceAll(",", ".")
        maximo = maximo.replaceAll("R$", "")
        maximo = maximo.replaceAll(",", ".")
        minimo = parseFloat(minimo)
        maximo = parseFloat(maximo)
        if (isNaN(minimo)){minimo = -1}
        if (isNaN(maximo)){maximo = -1}

        
        if (minimo == -1 && maximo == -1){
            warningMoney.textContent = "Valores inválidos"
        }
        else if (minimo == -1){
            if (maximo > 0){
                //Roda do menor valor ao valor maximo definido
                warningMoney.textContent = ""
                addFilter("0-"+maximo+"-"+"price")
            }
            else {
                //Da um erro
                warningMoney.textContent = "Valores inválidos"
            }
        }
        else if (maximo == -1){
            if (minimo > 0){
                //Roda do valor minimo definido até o maior valor
                warningMoney.textContent = ""
                addFilter(minimo+"-9999"+"-"+"price")
            }
            else {
                //Da um erro
                warningMoney.textContent = "Valores inválidos"
            }
        }
        else if (minimo > maximo){
            warningMoney.textContent = "Valores inválidos"
        }
        else {
            warningMoney.textContent = ""
            addFilter(minimo+"-"+maximo+"-"+"price")
        }
        
    })
    for (let cont = 0; cont < moneyInput.length; cont++){
        moneyInput[cont].addEventListener("input", function(){
            let localInput = (moneyInput[cont].value)
            localInput = localInput.replaceAll(".", "invalid")
            localInput = localInput.replace(",", "")
            localInput = localInput.replaceAll("R$", "")
            if (isNaN(localInput)){
                moneyInput[cont].value = moneyInput[cont].value.slice(0, -1)
    
            }
            else {
                warningMoney.textContent = ""
                moneyInput[cont].value = "R$" + (moneyInput[cont].value).replaceAll("R$", "")
            }
        })
    }

}

specifyFilterCreator()
const selectType = document.querySelector("#select-all-type")
const selectBrand = document.querySelector("#select-all-brand")
selectType.checked = true
selectBrand.checked = true
const selectOption = document.querySelectorAll(".filter-item")
const selectAvaliation = document.querySelectorAll('.filter-stars')
const checkButtons = document.querySelectorAll(".filter-button")
const moneyInput = document.querySelectorAll(".input-money")
const moneyButton = document.querySelector(".button-money")
const warningMoney = document.querySelector(".warning-money")
const checkTypes = document.querySelectorAll(".filter-type")
const checkBrand = document.querySelectorAll(".filter-brand")

let imgPointer = document.querySelectorAll('.pointer-filter')
let imgThrash = document.querySelectorAll('.thrash-filter')

for (let cont = 0; cont < imgPointer.length; cont++){
    imgPointer[cont].style.display = 'none'
    imgThrash[cont].style.display = 'none'
}

let condType = false
let condBrand = false

function selectAllType(){
    if (condType){condType=false}
    else{condType=true}
    for (let cont  = 0; cont < checkTypes.length; cont++){
        checkTypes[cont].checked = condType
    }
}
function selectAllBrand(){
    if (condBrand){condBrand=false}
    else{condBrand=true}
    for (let cont  = 0; cont < checkBrand.length; cont++){
        checkBrand[cont].checked = condBrand
    }
}

selectAllBrand()
selectAllType()


const orderOption = document.querySelector("#orderBy")
const specifyFilterDisplay = document.querySelectorAll(".filter-options-list")
let cleanFilterBtn = document.querySelector('#button-clean-filter')
cleanFilterBtn.style.display = 'none'


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
    scroll(0, 0)
    let drinksWithFilter = specifyFilterChanger(option).slice(0)
    changeOrder(drinksWithFilter)
    colorSelected(option)
    cleanFilterBtn.style.display = 'block'
    
}




function colorSelected(id){
    if (!Array.isArray(id)){
        if (id.split("-")[2] == "price"){

            /*let box = document.querySelectorAll(".filter-box")
            for (let cont = 0; cont < box.length; cont++){
                if (box[cont].querySelector('.filter-options-list').id == 'price'){
                    box[cont].style.display = 'none'
                }
            }*/
            let priceList = document.querySelector("#price-list").querySelectorAll('.filter-item')
            let imgPointer = document.querySelectorAll('.pointer-filter')
            let imgThrash = document.querySelectorAll('.thrash-filter')
            for (let cont = 0; cont < priceList.length; cont++){
                if (priceList[cont].id == id){
                    imgPointer[cont].style.display = 'inline'
                    imgThrash[cont].style.display = 'inline'
                    priceList[cont].style.color = "var(--orange)"
                }
                else {
                    imgPointer[cont].style.display = 'none'
                    imgThrash[cont].style.display = 'none'
                    priceList[cont].style.color = "var(--black)"
                }

            }
        }
        if (id.split("-")[2] == "ml"){
            let volumeList = document.querySelector("#volume-list").querySelectorAll('.filter-item')
            let imgPointer = document.querySelector("#volume-list").querySelectorAll('.pointer-filter')
            let imgThrash = document.querySelector("#volume-list").querySelectorAll('.thrash-filter')
            for (let cont = 0; cont < volumeList.length; cont++){
                if (volumeList[cont].id == id){ 
                    imgPointer[cont].style.display = 'inline'
                    imgThrash[cont].style.display = 'inline'
                    volumeList[cont].style.color = "var(--orange)" 
                }
                else {
                    imgPointer[cont].style.display = 'none'
                    imgThrash[cont].style.display = 'none'
                    volumeList[cont].style.color = "var(--black)"
                }
            }
        }
        if (id.split("-")[2] == "teor"){
            let alcoholList = document.querySelector("#alcohol-list").querySelectorAll('.filter-item')
            let imgPointer = document.querySelector("#alcohol-list").querySelectorAll('.pointer-filter')
            let imgThrash = document.querySelector("#alcohol-list").querySelectorAll('.thrash-filter')
            for (let cont = 0; cont < alcoholList.length; cont++){
                if (alcoholList[cont].id == id){
                    imgPointer[cont].style.display = 'inline'
                    imgThrash[cont].style.display = 'inline'
                    alcoholList[cont].style.color = "var(--orange)"
                }
                else {
                    imgPointer[cont].style.display = 'none'
                    imgThrash[cont].style.display = 'none' 
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