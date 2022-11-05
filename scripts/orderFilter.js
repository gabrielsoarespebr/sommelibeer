import {orderProductGrid} from './dinamics.js'
import { drinks } from './drinks.js'

var drinkList = drinks()
var estado = 'relevance_desc'
var end

export function changeOrder(newDrinkList = drinkList, newEstado = estado){
    drinkList = newDrinkList
    estado = newEstado
    if (drinkList.length >= 12){end = 11}
    else {end = drinkList.length - 1}
    orderProductGrid(0, end, actionsByChoose[estado](drinkList))
}

const actionsByChoose = {
        relevance_desc(drinks)
        {
            return drinks.slice(0)
        },
        relevance_asc(drinks)
        {
            return drinks.slice(0).reverse()
        },
        rating_desc(drinks)
        {
            return drinks.slice(0).sort(function(a,b) {return b.rating - a.rating})
        },
        rating_asc(drinks)
        {
            return drinks.slice(0).sort(function(a,b) {return a.rating - b.rating})
        }, 
        price_desc(drinks)
        {
            return drinks.slice(0).sort(function(a,b) {return b.price - a.price})
        },
        price_asc(drinks)
        {
            return drinks.slice(0).sort(function(a,b) {return a.price - b.price})
        },
        alcool_desc(drinks)
        {
            return drinks.slice(0).sort(function(a,b) {return b.alcoholcontent - a.alcoholcontent})
        },
        alcool_asc(drinks)
        {
            return drinks.slice(0).sort(function(a,b) {return a.alcoholcontent - b.alcoholcontent})
        }
    }



