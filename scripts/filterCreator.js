import { getDrinks, getTypes, getBrands } from "./getters.js"
var higherPrice, lowerPrice, higherMl, lowerMl, higherTeor, lowerTeor
var drinkList = getDrinks()
var typeList = getTypes()
var brandList = getBrands()

export function specifyFilterCreator(){
    for (let cont = 0; cont < drinkList.length; cont++){
    
        if (cont==0){
            higherPrice = lowerPrice = drinkList[cont].price
        }
        else {
            if (drinkList[cont].price > higherPrice){
                higherPrice = drinkList[cont].price
            }
            if (drinkList[cont].price < lowerPrice){
                lowerPrice = drinkList[cont].price
            }
        }
    
        if (cont==0){
            higherMl = lowerMl = drinkList[cont].volume
        }
        else {
            if (drinkList[cont].volume > higherMl){
                higherMl = drinkList[cont].volume
            }
            if (drinkList[cont].volume < lowerMl){
                lowerMl = drinkList[cont].volume
            }
        }
        if (cont==0){
            higherTeor = lowerTeor = drinkList[cont].alcoholcontent
        }
        else {
            if (drinkList[cont].alcoholcontent > higherTeor){
                higherTeor = drinkList[cont].alcoholcontent
            }
            if (drinkList[cont].alcoholcontent < lowerTeor){
                lowerTeor = drinkList[cont].alcoholcontent
            }
        }
    }
    
    typeList.sort()
    brandList.sort()
    let maior = Math.max(typeList.length, brandList.length)
    let brands = document.querySelector("#brand-list")
    let types = document.querySelector("#type-list")
    
    for (let count = 0; count < maior; count++){
        if (count < typeList.length) {
            types.innerHTML += '<div class="check-item-box"><input class="filter-type" type="checkbox" name="'+typeList[count]+'" id="'+typeList[count]+'"><label for="'+typeList[count]+'">'+typeList[count]+'</label></div>'
        }
        if (count < brandList.length) {
            brands.innerHTML += '<div class="check-item-box"><input class="filter-brand" type="checkbox" name="'+brandList[count]+'" id="'+brandList[count]+'"><label for="'+brandList[count]+'">'+brandList[count]+'</label></div>'
        }
    }
    types.innerHTML += '<button class="filter-button" id="appType">Aplicar</button>'
    brands.innerHTML += '<button class="filter-button" id="appBrand">Aplicar</button>'
    
    var total = parseFloat(((higherPrice - lowerPrice)/4).toFixed(2))
    
    let price = Math.floor(lowerPrice) 
    let aumentoPrice = Math.ceil(total)  
    for (let c = 0; c < 4; c++)
    {
        let priceList = document.querySelector("#price-list")
        price += aumentoPrice
        if (c == 0)
        {
            priceList.innerHTML += '<p class="filter-item" id="00-'+price+'-price">Até R$ '+price.toLocaleString("pt-br", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2})+"</p>"
        }
        else
        {
            if (c != 3){
                priceList.innerHTML += '<p class="filter-item" id="'+(price-aumentoPrice)+'-'+price+'-price">R$ '+(price-aumentoPrice).toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2})+" a R$ "+price.toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2})+"</p>"
            }
            else {
                priceList.innerHTML += '<p class="filter-item" id="'+(price-aumentoPrice)+'-'+higherPrice+'-price">R$ '+(price-aumentoPrice).toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2})+" a R$ "+higherPrice.toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2})+"</p>"
            }
        }    
    }
    
    let aumentoMl = (higherMl-lowerMl)/4
    aumentoMl = (Math.ceil(aumentoMl))
    let ml = Math.floor(lowerMl)
    for (let c = 0; c < 4; c++)
    {
        let volumeList = document.querySelector("#volume-list")
        ml += aumentoMl
        console.log("Ml: "+ml+" Aumento: "+aumentoMl)
        if (c == 0)
        {
            volumeList.innerHTML += '<p class="filter-item" id="00-'+ml+'-ml">Até '+ml+'ML</p>'
        }
        else
        {
            if (c != 3){
                volumeList.innerHTML += '<p class="filter-item" id="'+(ml-aumentoMl)+'-'+ml+'-ml">'+(ml-aumentoMl)+'ML a '+ml+'ML</p>'
            }
            else {
                volumeList.innerHTML += '<p class="filter-item" id="'+(ml-aumentoMl)+'-'+higherMl+'-ml">'+(ml-aumentoMl)+'ML a '+higherMl+'ML</p>'
            }
            
        }    
    }
    
    let aumentoTeor = (higherTeor-lowerTeor)/4
    aumentoTeor = (Math.ceil(aumentoTeor))
    let teor = Math.floor(lowerTeor)
    for (let c = 0; c < 4; c++)
    {
        let alcoholList = document.querySelector("#alcohol-list")
        teor += aumentoTeor
        if (c == 0)
        {
            alcoholList.innerHTML += '<p class="filter-item" id="00-'+teor+'-teor">Até '+teor+'%</p>'
        }
        else
        {
            if (c != 3){
                alcoholList.innerHTML += '<p class="filter-item" id="'+(teor-aumentoTeor)+'-'+teor+'-teor">'+(teor-aumentoTeor)+'% a '+teor+'%</p>'
            }
            else {
                alcoholList.innerHTML += '<p class="filter-item" id="'+(teor-aumentoTeor)+'-'+higherTeor+'-teor">'+(teor-aumentoTeor)+'% a '+higherTeor+'%</p>'
            }
            
        }    
    }
}
