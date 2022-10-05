function arquivos() //Cria a lista de bebidas
{
    let drink01 = {name: "Brahma Duplo Malte 600ML", price: 6.99, rating: 4.0, comment: "", img: "images/drinks/brahmaduplomalte600ml.png"}
    let drink02 = {name: "Eisen Bahn Strong Golden Ale 355ML", price: 4.99, rating: 4.3, comment: "", img: "images/drinks/eisenbahnstronggoldenale355ml.png"}
    let drink03 = {name: "Eisenbahn Weizenbock 355ML", price: 6.90, rating: 3.9, comment: "", img: "images/drinks/eisenbahweizenbock355ml.png"}
    let drink04 = {name: "Heineken 600ML", price: 9.60, rating: 4.6, comment: "", img: "images/drinks/heineken600ml.png"}
    let drink05 = {name: "Hoegaarden 330ML", price: 5.25, rating: 4.4, comment: "", img: "images/drinks/hoegaarden330ml.png"}
    let drink06 = {name: "Stella Artois Puro Malte Long Neck 330ML", price: 5.39, rating: 3.8, comment: "", img: "images/drinks/stellaartois330ml.png"}
    let valores = [drink01, drink02, drink03, drink04, drink05, drink06]   
    return valores 
}
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
function rodar(acrescimo)
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
var bebidas = arquivos()
var inicio=0, fim=3
arrowFlow(inicio, fim)
