import {orderProductGrid} from './dinamics.js'
import { specifyFilterChanger } from './filterChanger.js'

export function changeOrder(estado){
    let drinksList = specifyFilterChanger('noChange')
    let endWithFilter
    if (drinksList.length >= 12){endWithFilter = 11}
    else {endWithFilter = drinksList.length - 1}
    orderProductGrid(0, endWithFilter, actionsByChoose[estado](drinksList))
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



