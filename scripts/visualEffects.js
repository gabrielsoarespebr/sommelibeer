export function filterDisplayChanger(id)
{
    displayByChoose[id]()
}
const displayByChoose = {
    start(){
        let itemsList = document.querySelectorAll(".filter-list")
        for (let indice = 0; indice < itemsList.length; indice++){
            if (indice != 0){
                itemsList[indice].style.display = "none"}
            }
        
    },
    price(){
        let itemsList = document.querySelector("#price-list")
        if (itemsList.style.display=="none"){itemsList.style.display = "block"}
        else {itemsList.style.display = "none"}
    },
    avaliation(){
        let itemsList = document.querySelector("#avaliation-list")
        if (itemsList.style.display=="none"){itemsList.style.display = "block"}
        else {itemsList.style.display = "none"}
    },
    volume(){
        let itemsList = document.querySelector("#volume-list")
        if (itemsList.style.display=="none"){itemsList.style.display = "block"}
        else {itemsList.style.display = "none"}
    },
    type(){
        let itemsList = document.querySelector("#type-list")
        if (itemsList.style.display=="none"){itemsList.style.display = "block"}
        else {itemsList.style.display = "none"}
    },
    brand(){
        let itemsList = document.querySelector("#brand-list")
        if (itemsList.style.display=="none"){itemsList.style.display = "block"}
        else {itemsList.style.display = "none"}
    },
    alcohol(){
        let itemsList = document.querySelector("#alcohol-list")
        if (itemsList.style.display=="none"){itemsList.style.display = "block"}
        else {itemsList.style.display = "none"}
    }
}

var prevPage = document.querySelector(".prev")
var nextPage = document.querySelector(".next")
var gridManager = document.querySelectorAll(".grid-manager")
var total = document.querySelector('#total-grid')
var actual = document.querySelector('#actual-grid')

export function arrowAnimation(start, end, drinksList) //Deixa a seta cinza quando não puder rolar
{
    
    total.textContent = Math.ceil(drinksList.length/12)
    actual.textContent = (start+12)/12
    if (end == -1){
        prevPage.style.display = 'none'
        nextPage.style.display = 'none'
        gridManager[0].style.display = 'none'
        gridManager[1].style.display = 'none'
        gridManager[2].style.display = 'none'
    }
    else{
        gridManager[0].style.display = 'inline'
        gridManager[1].style.display = 'inline'
        gridManager[2].style.display = 'inline'
        if (start == 0){
            prevPage.style.display = 'none'
        }
        else {
            prevPage.style.display = 'inline'
        }

        if (end == drinksList.length-1){
            nextPage.style.display = 'none'
        }
        else{
            nextPage.style.display = 'inline'
        }
    }
}