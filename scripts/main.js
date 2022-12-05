import { HomeGrid } from './classes/HomeGrid.js'
import { Filter } from "./classes/Filter.js"
import { drinks } from './drinks.js'

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
            moneyWarning.textContent = "Valores inválidos"
        }
        else if (minimo == -1){
            if (maximo > 0){
                //Roda do menor valor ao valor maximo definido
                moneyWarning.textContent = ""
                addFilter("0-"+maximo+"-"+"price")
            }
            else {
                //Da um erro
                moneyWarning.textContent = "Valores inválidos"
            }
        }
        else if (maximo == -1){
            if (minimo > 0){
                //Roda do valor minimo definido até o maior valor
                moneyWarning.textContent = ""
                addFilter(minimo+"-9999"+"-"+"price")
            }
            else {
                //Da um erro
                moneyWarning.textContent = "Valores inválidos"
            }
        }
        else if (minimo > maximo){
            moneyWarning.textContent = "Valores inválidos"
        }
        else {
            moneyWarning.textContent = ""
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
                moneyWarning.textContent = ""
                moneyInput[cont].value = "R$" + (moneyInput[cont].value).replaceAll("R$", "")
            }
        })
    }

    volumeButton.addEventListener("click", function(){
        let minimo = (document.querySelector("#minimum-volume").value).replaceAll(" ", "")
        let maximo = (document.querySelector("#maximum-volume").value).replaceAll(" ", "")
        minimo = minimo.replaceAll(",", ".")
        maximo = maximo.replaceAll(",", ".")
        minimo = parseFloat(minimo)
        maximo = parseFloat(maximo)
        if (isNaN(minimo)){minimo = -1}
        if (isNaN(maximo)){maximo = -1}

        
        if (minimo == -1 && maximo == -1){
            volumeWarning.textContent = "Valores inválidos"
        }
        else if (minimo == -1){
            if (maximo > 0){
                //Roda do menor valor ao valor maximo definido
                moneyWarning.textContent = ""
                addFilter("0-"+maximo+"-"+"ml")
            }
            else {
                //Da um erro
                moneyWarning.textContent = "Valores inválidos"
            }
        }
        else if (maximo == -1){
            if (minimo > 0){
                //Roda do valor minimo definido até o maior valor
                volumeWarning.textContent = ""
                addFilter(minimo+"-9999"+"-"+"ml")
            }
            else {
                //Da um erro
                volumeWarning.textContent = "Valores inválidos"
            }
        }
        else if (minimo > maximo){
            volumeWarning.textContent = "Valores inválidos"
        }
        else {
            volumeWarning.textContent = ""
            addFilter(minimo+"-"+maximo+"-"+"ml")
        }
        
    })
    for (let cont = 0; cont < volumeInput.length; cont++){
        volumeInput[cont].addEventListener("input", function(){
            let localInput = (volumeInput[cont].value)
            localInput = localInput.replaceAll(".", "invalid")
            localInput = localInput.replace(",", "")
            if (isNaN(localInput)){
                volumeInput[cont].value = volumeInput[cont].value.slice(0, -1)
    
            }
            else {
                volumeWarning.textContent = ""
                volumeInput[cont].value = (volumeInput[cont].value)
            }
        })
    }
    searchInput.addEventListener("keypress", function(event){
        if (event.key === "Enter"){
            event.preventDefault();
            if (searchInput.value != "")
            {
                /*searchBox.style.display = 'none'
                addFilter("word-"+searchInput.value)  */
                searchBox.style.display = 'none'
                window.location.href = './index.html?search='+searchInput.value 
            }
            
        }
    })

    searchBox.addEventListener("mouseover", function(){
        condSearchBox = false
    })
    searchBox.addEventListener("mouseout", function(){
        condSearchBox = true
    })
    addEventListener('click', function(){
        if(condSearchBox)
        {
            searchBox.style.display = 'none'
        }})
    searchInput.addEventListener("input", function(){
        searchBox.innerHTML = ''
        let condEmpty = true
        let tamanho = searchInput.value.length - 1
        if (searchInput.value == ' '){
            searchInput.value = ''
            searchBox.style.display = 'none'
        }
        else if (searchInput.value[tamanho] == ' ' && searchInput.value[tamanho-1] == ' '){
            searchInput.value = (searchInput.value).substring(0, tamanho)
        }
        if (searchInput.value == ''){
            searchBox.style.display = 'none'
        }
        else {
            for (let i = 0; i < drinks().length; i++){
                let name = drinks()[i].name.toLowerCase()
                if (name.includes(searchInput.value.toLowerCase())){
                    searchBox.style.display = 'block'
                    searchBox.innerHTML += '<a href="product.html?'+drinks()[i].id+'" hreflang="pt-br" rel="next" target="_self"><div class="search-product">'+'<img class="search-product-img" src="'+drinks()[i].img+'"'+'alt="'+drinks()[i].name+'">'+'<span class="search-product-title">'+drinks()[i].name+'</span>'+'<span class="search-product-volume">'+drinks()[i].volume+'ML</span>'+'<span class="search-product-price">R$'+drinks()[i].price.toFixed(2).replace(".", ",")+'</span>'+'</div></a>'
                    condEmpty = false
                }
            }
            if (condEmpty){
                searchBox.style.display = 'none'
            }

        }
    })
}

var condSearchBox = true
var grid = new HomeGrid(16, drinks())
var filter = new Filter(grid)
filter.defineOptionsRange()

var grid = new HomeGrid(12, drinks())


grid.orderGrid()
grid.addListeners()
filter.showMenu('start')

const searchBox = document.querySelector("#search-box")
const selectType = document.querySelector("#select-all-type")
const selectBrand = document.querySelector("#select-all-brand")
selectType.checked = true
selectBrand.checked = true
const selectOption = document.querySelectorAll(".filter-item")
const selectAvaliation = document.querySelectorAll('.filter-stars')
const checkButtons = document.querySelectorAll(".filter-button")
const moneyInput = document.querySelectorAll(".input-money")
const moneyButton = document.querySelector(".button-money")
const moneyWarning = document.querySelector(".warning-money")
const volumeInput = document.querySelectorAll(".input-volume")
const volumeButton = document.querySelector(".button-volume")
const volumeWarning = document.querySelector(".warning-volume")
const checkTypes = document.querySelectorAll(".filter-type")
const checkBrands = document.querySelectorAll(".filter-brand")
const specifyFilterDisplay = document.querySelectorAll(".filter-options-list")
const cleanAllBtn = document.querySelector('#button-clean-filter')
const cleanIndividual = document.querySelectorAll('.thrash-filter')
const cleanIndividualAvaliation = document.querySelectorAll('.thrash-filter-avaliation')
const searchInput = document.querySelector('#search-bar')
addListeners()

let url = window.location.href
if (url.includes('search')){
    let index = url.indexOf('search') + 7
    addFilter("word-"+url.substring(index))
}

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