function arquivos()
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
function arrowFlow(andamento, fim)
{
    let bebidas = arquivos()
    let pagina = document.querySelector(".products-container")
    pagina.innerHTML = ""
    for (var c=andamento; c<=fim; c++)
    {
        pagina.innerHTML += '<div class="product" data-name="p-'+(c+1)+'">'+
        '<img src='+bebidas[c].img+' alt="Produto 1">'+
        '<h3>'+ bebidas[c].name+ '</h3>'+ 
        '<span class="price">R$'+ bebidas[c].price+'</span>'+
        '<span class="rating">'+ bebidas[c].rating+'</span>'+ 
        '<fieldset class="comment">'+
        '<legend>Avaliação em destaque</legend>'+
        '<p>'+ bebidas[c].comment+'</p>'+
        '</fieldset>'+
        '</div>'
    }
}
function rodar(acrescimo)
{
    andamento =  acrescimo
    fim +=  acrescimo
    arrowFlow(andamento, fim)
}

var andamento =0, fim=3
arrowFlow(andamento, fim)
