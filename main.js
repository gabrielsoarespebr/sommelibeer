import { HomeGrid } from './scripts/classes/HomeGrid.js'
import { Filter } from "./scripts/classes/Filter.js"
import { drinks } from './scripts/drinks.js'

function addListeners(){
    selectType.addEventListener("change", function(){filter.selectAllType(checkTypes)})
    selectBrand.addEventListener("change", function(){filter.selectAllBrand(checkBrands)})
    
    cleanAllBtn.addEventListener('click', function(){addFilter('cleanAll')})

    for (let indice = 0; indice < specifyFilterDisplay.length; indice++)
    {
        specifyFilterDisplay[indice].addEventListener("click", function(){filter.showMenu(specifyFilterDisplay[indice])})
    }

    for (let cont = 0; cont < selectOption.length; cont++){
        selectOption[cont].addEventListener("click", function(){addFilter(selectOption[cont].id)})
    }
    for (let cont = 0; cont < selectAvaliation.length; cont++){
        selectAvaliation[cont].addEventListener("click", function(){addFilter(selectAvaliation[cont].id)})
    }

    for (let cont = 0; cont < cleanIndividual.length; cont++){
        cleanIndividual[cont].addEventListener('click', function(){addFilter(cleanIndividual[cont].id)})
    }

    for (let cont = 0; cont < cleanIndividualAvaliation.length; cont++){
        cleanIndividualAvaliation[cont].addEventListener('click', function(){addFilter(cleanIndividualAvaliation[cont].id)})
    }

    //refactor
    for (let cont = 0; cont < checkTypes.length; cont++){
        checkTypes[cont].addEventListener("change", function(){filter.checkAllTest("type")})
    }
    for (let cont = 0; cont < checkBrands.length; cont++){
        checkBrands[cont].addEventListener("change", function(){filter.checkAllTest("brand")})
    }
    for (let cont = 0; cont < checkButtons.length; cont++){
        checkButtons[cont].addEventListener("click", function(){checkHelper(checkButtons[cont].id)})
    }

    //refactor
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

var grid = new HomeGrid(16, drinks())
var filter = new Filter(grid)
filter.defineOptionsRange()

var grid = new HomeGrid(16, drinks())


grid.orderGrid()
grid.addListeners()
filter.showMenu('start')

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
const checkBrands = document.querySelectorAll(".filter-brand")
const specifyFilterDisplay = document.querySelectorAll(".filter-options-list")
const cleanAllBtn = document.querySelector('#button-clean-filter')
const cleanIndividual = document.querySelectorAll('.thrash-filter')
const cleanIndividualAvaliation = document.querySelectorAll('.thrash-filter-avaliation')

addListeners()



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
        for (let cont  = 0; cont < checkBrands.length; cont++){
            if (checkBrands[cont].checked){
                if(!drinkBrand.includes(checkBrands[cont].id)){
                    drinkBrand.push(checkBrands[cont].id)
                }
            }
        }
        addFilter([drinkBrand, "brand"])
    }
    
}
function addFilter(option){
    grid.drinkList = filter.specifyFilterChanger(option).slice(0)
    grid.changeOrder()
}