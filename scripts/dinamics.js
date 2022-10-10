function arrowAnimation(inicio, fim) //Deixa a seta cinza quando não rolar
{
    if (inicio == 0){
        setaEsquerda.innerHTML = '<img class="arrow-left" src="images/arrow-left-gray.png" alt="" onclick="rodar(-1)"></img>'+'<img class="arrow-right" src="images/arrow-right.png" alt="" onclick="rodar(1)"></img>'
    }
    else if (inicio == 1){
        setaEsquerda.innerHTML = '<img class="arrow-left" src="images/arrow-left.png" alt="" onclick="rodar(-1)"></img>'+'<img class="arrow-right" src="images/arrow-right.png" alt="" onclick="rodar(1)"></img>'
    }
    else if (fim == bebidas.length-1){
        setaEsquerda.innerHTML = '<img class="arrow-left" src="images/arrow-left.png" alt="" onclick="rodar(-1)"></img>'+'<img class="arrow-right" src="images/arrow-right-gray.png" alt="" onclick="rodar(1)"></img>'
    }
}
function arrowFlow(inicio, fim) //Cria lista de bebidas
{
    let pagina = document.querySelector(".products-container")
    pagina.innerHTML = ""
    for (var c=inicio; c<=fim; c++)
    {
        pagina.innerHTML += '<div class="product" data-name="p-'+(c+1)+'">'+
        '<img src='+bebidas[c].img+' alt="Produto 1">'+
        '<h3>'+ bebidas[c].name+ '</h3>'+ 
        '<div class="price-rating">'+
        '<span class="price">R$'+ bebidas[c].price.toFixed(2).replace(".", ",")+'</span>'+
        '<span class="rating">'+ bebidas[c].rating.toFixed(1)+'</span>'+ 
        '</div>'+
        '<fieldset class="comment">'+
        '<legend>Avaliação em destaque</legend>'+
        '<p>'+ bebidas[c].comment+'</p>'+
        '</fieldset>'+
        '</div>'
    }
    arrowAnimation(inicio, fim)
}
export function rodar(acrescimo)
{
    inicio +=  acrescimo
    fim +=  acrescimo
    if (acrescimo == 1)
    {
        if (inicio + 3 < bebidas.length)
        {
            arrowFlow(inicio, fim)
        }    
        else 
        {
            inicio -= 1
            fim -= 1
        }
    }
    else
    {
        if (fim-3 >= 0)
        {
            arrowFlow(inicio, fim)

        }
        else
        {
            inicio += 1
            fim += 1
        }
    }    
}

var setaEsquerda = document.querySelector(".seta");

import {arquivos} from './data.js'
var bebidas = arquivos()
var inicio=0, fim=3
arrowFlow(inicio, fim)
