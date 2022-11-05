import { arrowAnimation } from "./visualEffects.js"
import { drinks } from "./drinks.js"
//Criando Variaveis
var start = 0
var end = 11
var drinkList = drinks().slice(0)

export function orderProductGrid(startFlow = start, endFlow=end, list = drinkList) //Cria lista de drinkList
{
    drinkList = list.slice(0)
    let pagina = document.querySelector("#products-list")
    pagina.innerHTML = ""
    if (endFlow == -1){
        pagina.innerHTML = "<p>Sem resultados para sua busca, tente novamente com outros requisitos.</p>"
    }
    else{
        for (let c=startFlow; c<=endFlow; c++)
            {
                pagina.innerHTML += '<div class="product" data-name="p-'+(c+1)+'">'+
                '<img src='+drinkList[c].img+' alt="Produto 1">'+
                '<h3>'+ drinkList[c].name + '</h3>'+ 
                '<p class="alcohol-number">Teor alcoólico: '+drinkList[c].alcoholcontent.toFixed(1)+'</p>'+
                '<div class="price-rating">'+
                '<span class="price">R$'+ drinkList[c].price.toFixed(2).replace(".", ",")+'</span>'+
                '<span class="rating">'+ drinkList[c].rating.toFixed(1)+'</span>'+ 
                '</div>'+
                '<fieldset class="comment">'+
                '<legend>Avaliação em destaque</legend>'+
                '<p>'+ drinkList[c].comment+'</p>'+
                '</fieldset>'+
                '</div>'
            }
    }
    //scroll(0, 98)
    arrowAnimation(startFlow, endFlow, drinkList)
}

export function auxFlowRun(flow) //Define e configura se esta avançando ou retrocedendo
{
    if (flow == "next"){
        if ((end+12) <= drinkList.length - 1){
            start += 12
            end += 12
            orderProductGrid(start, end)
            scroll(0, 98)
        }
        else if (end+1 <= drinkList.length - 1){
            let endAux = (drinkList.length - 1) - end
            start += 12
            end += endAux
            orderProductGrid(start, end)
            scroll(0, 98)
        }
        
    }
    else if(flow == "prev"){
        let auxDifference = end - start
        if ((end-12) >= 0){
            if (auxDifference == 12){
                start -= 12
                end -= 12
                orderProductGrid(start, end)
                scroll(0, 100)
            }
            else{
                start -= 12
                end -= auxDifference + 1
                orderProductGrid(start, end)
                scroll(0, 98)
            }
        }
    }
}
