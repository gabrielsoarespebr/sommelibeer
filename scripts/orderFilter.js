import {drinks} from './drinks.js'
import {orderProductGrid} from './dinamics.js'
var listaBebidas = drinks().slice(0)

const actionsByChoose = {
        relevance_desc: listaBebidas.slice(0),
        relevance_asc: listaBebidas.slice(0).reverse(),
        rating_desc: listaBebidas.slice(0).sort(function(a,b) {return b.rating - a.rating}),
        rating_asc: listaBebidas.slice(0).sort(function(a,b) {return a.rating - b.rating}), 
        price_desc: listaBebidas.slice(0).sort(function(a,b) {return b.price - a.price}),
        price_asc: listaBebidas.slice(0).sort(function(a,b) {return a.price - b.price}),
        alcool_desc: listaBebidas.slice(0).sort(function(a,b) {return b.alcoholcontent - a.alcoholcontent}),
        alcool_asc: listaBebidas.slice(0).sort(function(a,b) {return a.alcoholcontent - b.alcoholcontent})
    }

export function changeOrder(estado){
    orderProductGrid(0, 11, actionsByChoose[estado])  
}