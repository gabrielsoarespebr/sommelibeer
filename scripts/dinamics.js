//Criando Variaveis
var inicio = 0
var fim = 3
var bebidas

export function drinksFlow(lista){
    bebidas = lista.slice(0)
    arrowFlow(inicio, fim, bebidas)
    document.querySelector(".arrow-right").addEventListener("click", function(){auxFlowRun(1)})
    document.querySelector(".arrow-left").addEventListener("click", function(){auxFlowRun(-1)})
}

function arrowAnimation(inicio, fim) //Deixa a seta cinza quando não puder rolar
{
    if (inicio == 0){
        document.querySelector(".arrow-left").src = 'images/arrow-left-gray.png'
        document.querySelector(".arrow-right").src = 'images/arrow-right.png'
    }
    else if (inicio == 1){
        document.querySelector(".arrow-left").src = 'images/arrow-left.png'
        document.querySelector(".arrow-right").src = 'images/arrow-right.png'
    }
    else if (fim == bebidas.length-1){
        document.querySelector(".arrow-left").src = 'images/arrow-left.png'
        document.querySelector(".arrow-right").src = 'images/arrow-right-gray.png'
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

function auxFlowRun(acrescimo) //Define e configura se é indo ou voltando
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
