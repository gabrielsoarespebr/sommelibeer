//Criando Variaveis
var inicio, fim 
var bebidas
document.querySelector(".arrow-right").addEventListener("click", function(){auxFlowRun(1)})
document.querySelector(".arrow-left").addEventListener("click", function(){auxFlowRun(-1)})

export function drinksFlow(lista){
    inicio = 0
    fim = 11
    bebidas = lista.slice(0)
    arrowFlow(inicio, fim)
    
}

function arrowAnimation() //Deixa a seta cinza quando não puder rolar
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

function arrowFlow() //Cria lista de bebidas
{
    let pagina = document.querySelector("#products-list")
    pagina.innerHTML = ""
    for (var c=inicio; c<=fim; c++)
    {
        pagina.innerHTML += '<div class="product" data-name="p-'+(c+1)+'">'+
        '<img src='+bebidas[c].img+' alt="Produto 1">'+
        '<h3>'+ bebidas[c].name + '</h3>'+ 
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
    arrowAnimation()
}

function auxFlowRun(acrescimo) //Define e configura se é indo ou voltando
{
    inicio +=  acrescimo
    fim +=  acrescimo
    if (acrescimo == 1)
    {
        if (inicio + 11 < bebidas.length)
        {
            arrowFlow()
        }    
        else 
        {
            inicio -= 1
            fim -= 1
        }
    }
    else
    {
        if (fim-11 >= 0)
        {
            arrowFlow()

        }
        else
        {
            inicio += 1
            fim += 1
        }
    }  
}
