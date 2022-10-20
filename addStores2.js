var i;

//Pegando o nome da loja
var stores = document.querySelectorAll('.E5ocAb'); //Pega todos os elementos do Google Shopping com a classe "E5ocAb", transformando-os numa lista de objetos "stores"
for (i = 0; i < stores.length; i++) {
    console.log(stores[i].textContent); //textContent pega apenas o conteúdo dos elementos
}

//Pegando o preço do produto
var prices = document.querySelectorAll('b.translate-content'); //Pega todos os elementos do Google Shopping com tag "b" e a classe "translate-content", transformando-os numa lista de objetos "stores"
for (i = 0; i < prices.length; i++) {
    console.log(prices[i].textContent); //textContent pega apenas o conteúdo dos elementos
}