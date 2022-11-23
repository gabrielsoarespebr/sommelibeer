import {stores} from './stores.js' 
const store = document.querySelector('.stores-list');

let price = document.querySelector('#price');

price = price.textContent;

for (var i = 0; i < stores().length; i++) {
    store.innerHTML += '<div class="store"><a href="' + stores()[i].href + '" class="store-link" target="_blank">' +
        '<img src="' + stores()[i].img + '" alt="Logotipo da loja" class="store-logo">' +
        '<span class="store-name">' + stores()[i].name + '</span><span class="store-price">' + price + '</span></a></div>'
}