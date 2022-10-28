export function filterDisplayChanger(id)
{
    displayByChoose[id]()
}
const displayByChoose = {
    all(){
        let itemsList = document.querySelectorAll(".filter-list")
        for (let indice = 0; indice < itemsList.length; indice++){
        itemsList[indice].style.display = "none"}
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


export function arrowAnimation(start, end, drinksList) //Deixa a seta cinza quando não puder rolar
{
    if (start == 0){
        document.querySelector(".arrow-left").src = 'images/arrow-left-gray.png'
        document.querySelector(".arrow-right").src = 'images/arrow-right.png'
    }
    else if (end != drinksList.length-1){
        document.querySelector(".arrow-left").src = 'images/arrow-left.png'
        document.querySelector(".arrow-right").src = 'images/arrow-right.png'
    }
    else if (end == drinksList.length-1){
        document.querySelector(".arrow-left").src = 'images/arrow-left.png'
        document.querySelector(".arrow-right").src = 'images/arrow-right-gray.png'
    }
}