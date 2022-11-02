import {drinks} from './drinks.js'

const drinkList = drinks()
const typeList = []
const brandList = []

for (let cont = 0; cont < drinkList.length; cont++){
    if (!typeList.includes(drinkList[cont].type)){
        typeList.push(drinkList[cont].type)
    }
    if (!brandList.includes(drinkList[cont].brand)){
        brandList.push(drinkList[cont].brand)
    }
}

export function getDrinks(){
    return drinkList
}

export function getTypes(){
    return typeList
}

export function getBrands(){
    return brandList
}