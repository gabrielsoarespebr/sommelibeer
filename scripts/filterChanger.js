import { getDrinks, getTypes, getBrands } from "./getters.js"

let defaultDrinks = getDrinks()
let specifiedDrinks = []
let filterPrice = [0, 10000] 
let filterMl = [0, 10000]
let filterTeor = [0, 100]
let filterStar = [0, 5]
let filterTypes = getTypes()
let filterBrands = getBrands()
export function specifyFilterChanger(id){
    specifiedDrinks = []
    if (Array.isArray(id)){
        if (id[1] == "type"){
            filterTypes = id[0].slice(0)
        }
        else if (id[1] == "brand"){
            filterBrands = id[0].slice(0)
        }
    }
    else if (id.split("-")[2] == "price"){
        filterPrice = [parseFloat(id.split('-')[0]), parseFloat(id.split('-')[1])]
    }
    else if (id.split("-")[2] == "ml"){
        filterMl = [parseFloat(id.split('-')[0]), parseFloat(id.split('-')[1])]
    }
    else if (id.split("-")[2] == "teor"){
        filterTeor = [parseFloat(id.split('-')[0]), parseFloat(id.split('-')[1])]
    }
    else if (id.split("-")[2] == "star"){
        filterStar = [parseInt(id.split('-')[0]), parseInt(id.split('-')[1])]
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
    return specifiedDrinks
}