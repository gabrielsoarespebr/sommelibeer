import { drinks } from "./drinks.js";
function addListeners(){
    searchInput.addEventListener("keypress", function(event){
        if (event.key === "Enter"){
            event.preventDefault();
            if (searchInput.value != "")
            {
                searchBox.style.display = 'none'
                window.location.href = 'sommelibeer/index.html?search='+searchInput.value
                /*window.open('/index.html?search='+searchInput.value, '_self')*/
                addFilter("word-"+searchInput.value)  
            }
            
        }
    })

    searchBox.addEventListener("mouseover", function(){condSearchBox = false})
    searchBox.addEventListener("mouseout", function(){condSearchBox = true})
    addEventListener('click', function(){
        if(condSearchBox)
        {
            searchBox.style.display = 'none'
        }})

    searchInput.addEventListener("input", function(){
        searchBox.innerHTML = ''
        let tamanho = searchInput.value.length - 1
        if (searchInput.value == ' '){
            searchInput.value = ''
            searchBox.style.display = 'none'
        }
        else if (searchInput.value[tamanho] == ' ' && searchInput.value[tamanho-1] == ' '){
            searchInput.value = (searchInput.value).substring(0, tamanho)
        }
        if (searchInput.value == ''){
            searchBox.style.display = 'none'
        }
        else {
            for (let i = 0; i < drinks().length; i++){
                let name = drinks()[i].name.toLowerCase()
                if (name.includes(searchInput.value.toLowerCase())){
                    searchBox.style.display = 'block'
                    searchBox.innerHTML += '<a href="product.html?'+drinks()[i].id+'" hreflang="pt-br" rel="next" target="_self"><div class="search-product">'+'<img class="search-product-img" src="'+drinks()[i].img+'"'+'alt="'+drinks()[i].name+'">'+'<span class="search-product-title">'+drinks()[i].name+'</span>'+'<span class="search-product-volume">'+drinks()[i].volume+'ML</span>'+'<span class="search-product-price">R$'+drinks()[i].price.toFixed(2).replace(".", ",")+'</span>'+'</div></a>'
                }
            }

        }
    })
}

var condSearchBox = true
const searchBox = document.querySelector("#search-box")
const searchInput = document.querySelector('#search-bar')

addListeners()