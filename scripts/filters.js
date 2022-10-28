import {drinks} from './drinks.js'
var higherPrice, lowerPrice, higherMl, lowerMl, higherTeor, lowerTeor
var listaBebidas = drinks()
var listaTypes = []
var listaBrands = []

export function specifyFilterCreator(){
    for (let cont = 0; cont < listaBebidas.length; cont++){
    
        if (!listaTypes.includes(listaBebidas[cont].type)){
            listaTypes.push(listaBebidas[cont].type)
        }
        if (!listaBrands.includes(listaBebidas[cont].brand)){
            listaBrands.push(listaBebidas[cont].brand)
        }
    
    
    
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
    
        if (cont==0){
            higherMl = lowerMl = listaBebidas[cont].volume
        }
        else {
            if (listaBebidas[cont].volume > higherMl){
                higherMl = listaBebidas[cont].volume
            }
            if (listaBebidas[cont].volume < lowerMl){
                lowerMl = listaBebidas[cont].volume
            }
        }
        if (cont==0){
            higherTeor = lowerTeor = listaBebidas[cont].alcoholcontent
        }
        else {
            if (listaBebidas[cont].alcoholcontent > higherTeor){
                higherTeor = listaBebidas[cont].alcoholcontent
            }
            if (listaBebidas[cont].alcoholcontent < lowerTeor){
                lowerTeor = listaBebidas[cont].alcoholcontent
            }
        }
    }
    
    listaTypes.sort()
    listaBrands.sort()
    let maior = Math.max(listaTypes.length, listaBrands.length)
    let brands = document.querySelector("#brand-list")
    let types = document.querySelector("#type-list")
    
    for (let count = 0; count < maior; count++){
        if (count < listaTypes.length) {
            types.innerHTML += '<div class="check-item-box"><input type="checkbox" name="'+listaTypes[count]+'" id="'+listaTypes[count]+'"><label for="'+listaTypes[count]+'">'+listaTypes[count]+'</label></div>'
        }
        if (count < listaBrands.length) {
            brands.innerHTML += '<div class="check-item-box"><input type="checkbox" name="'+listaBrands[count]+'" id="'+listaBrands[count]+'"><label for="'+listaBrands[count]+'">'+listaBrands[count]+'</label></div>'
        }
    }
    
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
        let volumeList = document.querySelector("#alcohol-list")
        teor += aumentoTeor
        if (c == 0)
        {
            volumeList.innerHTML += '<p class="filter-item" id="00-'+teor+'-teor">Até '+teor+' ABV</p>'
        }
        else
        {
            if (c != 3){
                volumeList.innerHTML += '<p class="filter-item" id="'+(teor-aumentoTeor)+'-'+teor+'-teor">'+(teor-aumentoTeor)+' ABV a '+teor+' ABV</p>'
            }
            else {
                volumeList.innerHTML += '<p class="filter-item" id="'+(teor-aumentoTeor)+'-'+higherTeor+'-teor">'+(teor-aumentoTeor)+' ABV a '+higherTeor+' ABV</p>'
            }
            
        }    
    }
}
