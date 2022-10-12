import {drinksFlow} from './scripts/dinamics.js'
drinksFlow()
function changeOrder(){
    var selectedOption = ordering.value//ordering.options[ordering.selectedIndex].value
    //relevance_desc
    //relevance_asc
    //rating_desc
    //rating_asc
    //price_desc
    //price_asc
    //alcool_desc
    //alcool_asc
    console.log(dados.sort)
}
//var optionsActions = {
    //nome: function() {}
//}

var dados = [1, 5, 7, 2, 3]
var ordering = document.querySelector("#orderBy")
ordering.addEventListener("change", function(){changeOrder()})