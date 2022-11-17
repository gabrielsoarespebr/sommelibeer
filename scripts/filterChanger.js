import { getDrinks, getTypes, getBrands } from "./getters.js"
import { changeCheckHelper } from '../main.js'

let defaultDrinks = getDrinks()
let specifiedDrinks = []
let filterPrice = [0, 10000] 
let filterMl = [0, 10000]
let filterTeor = [0, 100]
let filterStar = [0, 5]
let filterTypes = getTypes()
let filterBrands = getBrands()
let infoPrice = document.querySelector('#price-info')
let infoMl = document.querySelector('#ml-info')
let infoTeor = document.querySelector('#teor-info')
let infoStar = document.querySelector('#star-info')
let infoTypes = document.querySelector('#type-info')
let infoBrands = document.querySelector('#brand-info')
export function specifyFilterChanger(id){
    specifiedDrinks = []
    if (Array.isArray(id)){
        if (id[1] == "type"){
            filterTypes = id[0].slice(0)
            if (id[0].length == 0){infoTypes.innerText = `Nenhum tipo`}
            else if (id[0].length == 1){infoTypes.innerText = `${id[0].length} tipo`}
            else {infoTypes.innerText = `${id[0].length} tipos`}
            infoTypes.style.display = 'inline-block'
        }
        else if (id[1] == "brand"){
            filterBrands = id[0].slice(0)
            if (id[0].length == 0){infoBrands.innerText = `Nenhuma marca`}
            else if (id[0].length == 1){infoBrands.innerText = `${id[0].length} marca`}
            else {infoBrands.innerText = `${id[0].length} marcas`}
            infoBrands.style.display = 'inline-block'
        }
    }
    else if (id.split("-")[2] == "price"){
        filterPrice = [parseFloat(id.split('-')[0]), parseFloat(id.split('-')[1])]
        if (filterPrice[0] > 0){infoPrice.innerText = `R$${filterPrice[0].toFixed(2).replace('.', ',')} - R$${filterPrice[1].toFixed(2).replace('.', ',')}`}
        else {infoPrice.innerText = `R$${filterPrice[1].toFixed(2).replace('.', ',')}`}
        infoPrice.style.display = 'inline-block'
    }
    else if (id.split("-")[2] == "ml"){
        filterMl = [parseFloat(id.split('-')[0]), parseFloat(id.split('-')[1])]
        if (filterMl[0] > 0){infoMl.innerText = `${filterMl[0]}ml - ${filterMl[1]}ml`}
        else {infoMl.innerText = `${filterMl[1]}ml`}
        infoMl.style.display = 'inline-block'
    }
    else if (id.split("-")[2] == "teor"){
        filterTeor = [parseFloat(id.split('-')[0]), parseFloat(id.split('-')[1])]
        if (filterTeor[0] > 0){infoTeor.innerText = `Teor: ${filterTeor[0]}% - ${filterTeor[1]}%`}
        else {infoTeor.innerText = `Teor: ${filterTeor[1]}%`}
        infoTeor.style.display = 'inline-block'
    }
    else if (id.split("-")[2] == "star"){
        filterStar = [parseInt(id.split('-')[0]), parseInt(id.split('-')[1])]
        if (filterStar[0] > 1){infoStar.innerText = `${filterStar[0]} estrelas`}
        else {infoStar.innerText = `${filterStar[0]} estrela`}
        infoStar.style.display = 'inline-block'
    }

    for (let cont=0; cont < defaultDrinks.length; cont++){
        if (defaultDrinks[cont].price >= filterPrice[0] && defaultDrinks[cont].price <= filterPrice[1])
        {
            if(defaultDrinks[cont].volume >= filterMl[0] && defaultDrinks[cont].volume <= filterMl[1])
            {
                if (defaultDrinks[cont].alcoholcontent >= filterTeor[0] && defaultDrinks[cont].alcoholcontent <= filterTeor[1])
                {
                    if (defaultDrinks[cont].rating >= filterStar[0] && defaultDrinks[cont].rating <= filterTeor[1]){
                        if (filterTypes.includes(defaultDrinks[cont].type)){
                            if (filterBrands.includes(defaultDrinks[cont].brand)){
                                specifiedDrinks.push(defaultDrinks[cont])
                            }
                        }
                    }
                }
            }
        }
    }
    const checkTypes = document.querySelectorAll(".filter-type")
    for (let cont = 0; cont < checkTypes.length; cont ++){
        if (filterTypes.includes(checkTypes[cont].id)){
            checkTypes[cont].checked = 'true'
        }
    }

    const checkBrand = document.querySelectorAll(".filter-brand")
    for (let cont = 0; cont < checkBrand.length; cont ++){
        if (filterBrands.includes(checkBrand[cont].id)){
            checkBrand[cont].checked = 'true'
        }
    }
    changeCheckHelper('type')
    changeCheckHelper('brand')
    return specifiedDrinks
}