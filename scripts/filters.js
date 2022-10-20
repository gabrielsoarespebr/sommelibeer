import {drinks} from './drinks.js'
var higherPrice, lowerPrice
var listaBebidas = drinks()

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


export function filterApplication(id)
{
    
    if (id=="price")
    {
        let priceList = document.querySelector("#price-list")
        if (priceList.innerHTML =="")
        {
            let price = Math.floor(lowerPrice) 
            let aumento = Math.ceil(total)  
            for (let c = 0; c < 4; c++)
            {
                price += aumento
                if (c == 0)
                {
                    priceList.innerHTML += '<p class="filter-item">Até R$ '+price.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2})+"</p>"
                }
                else
                {
                    priceList.innerHTML += '<p class="filter-item">R$ '+(price-aumento).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2})+" a R$ "+price.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2})+"</p>"
                }
                
                
            }
        }
        else
        {
        priceList.innerHTML = ""
        priceList.style.padding = '0px'
        }
    }
    if (id=="avaliation"){
        let avaliationList = document.querySelector("#avaliation-list")
        if (avaliationList.innerHTML==""){
            avaliationList.innerHTML += '<img class="filter-stars" src="images/star1.png" alt=""></img>'
            avaliationList.innerHTML += '<img class="filter-stars" src="images/star2.png" alt=""></img>'
            avaliationList.innerHTML += '<img class="filter-stars" src="images/star3.png" alt=""></img>'
            avaliationList.innerHTML += '<img class="filter-stars" src="images/star4.png" alt=""></img>'
        }
        else {
            avaliationList.innerHTML=""
        }
        

    }
    //if (){
//
    //}
    //if (){

    //}
    //if (){

    //}
}