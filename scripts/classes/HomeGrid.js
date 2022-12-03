export class HomeGrid {
    constructor(step = 12, drinkList){
        this.step = step
        this.start = 0
        this.end = this.step - 1
        this.drinkList = drinkList
        this.page = document.querySelector("#products-list")
        this.orderStatus = 'rating_desc'

        this.orderStates = {
            /*relevance_desc(drinks)
            {
                return drinks.slice(0)
            },
            relevance_asc(drinks)
            {
                return drinks.slice(0).reverse()
            },*/
            rating_desc(drinks)
            {
                return drinks.slice(0).sort(function(a,b) {return b.rating - a.rating})
            },
            rating_asc(drinks)
            {
                return drinks.slice(0).sort(function(a,b) {return a.rating - b.rating})
            },
            volume_desc(drinks)
            {
                return drinks.slice(0).sort(function(a,b) {return b.volume - a.volume})
            },
            volume_asc(drinks)
            {
                return drinks.slice(0).sort(function(a,b) {return a.volume - b.volume})
            }, 
            price_desc(drinks)
            {
                return drinks.slice(0).sort(function(a,b) {return b.price - a.price})
            },
            price_asc(drinks)
            {
                return drinks.slice(0).sort(function(a,b) {return a.price - b.price})
            },
            alcool_desc(drinks)
            {
                return drinks.slice(0).sort(function(a,b) {return b.alcoholcontent - a.alcoholcontent})
            },
            alcool_asc(drinks)
            {
                return drinks.slice(0).sort(function(a,b) {return a.alcoholcontent - b.alcoholcontent})
            }
        }

        this.changeOrder(this.orderStatus)

    }

    orderGrid()
    {
        scroll(0, 0)
        this.page.innerHTML = ""
        if (this.end == -1)
        {
            this.page.innerHTML = '<p class="no-result">Sem resultados para sua busca, tente novamente com outros requisitos.</p>'
        }
        else
        {
            for (let i=this.start; i<=this.end; i++)
            {
                let name = this.drinkList[i].name+" "+this.drinkList[i].volume+"ml"
                if (name.length > 52){
                    name = (name).substring(0, 50) + '...'
                }
                this.page.innerHTML += '<a href="product.html?'+this.drinkList[i].id+'" hreflang="pt-br" rel="next" target="_self" class="product" '+this.drinkList[i].id+'" data-name="p-'+(i+1)+'">'+
                '<img src='+this.drinkList[i].img+' alt="Produto 1">'+
                '<h3>'+name+'</h3>'+ 
                '<p class="alcohol-number">Teor alcoólico: '+this.drinkList[i].alcoholcontent.toFixed(1)+'</p>'+
                '<div class="price-rating">'+
                '<span class="price">R$'+ this.drinkList[i].price.toFixed(2).replace(".", ",")+'</span>'+
                '<span class="rating">'+ this.drinkList[i].rating.toFixed(1)+'</span>'+ 
                '</div>'+
                '</a>'
            }
            defineGridFlow(this.start, this.end, this.step, this.drinkList)
        }
    }

    goNext()
    {
        if ((this.end+this.step) <= this.drinkList.length - 1){
            this.start += this.step
            this.end += this.step
            this.orderGrid()
        }
        else if (this.end+1 <= this.drinkList.length - 1){
            let endAux = (this.drinkList.length - 1) - this.end
            this.start += this.step
            this.end += endAux
            this.orderGrid()
        }
    }

    goPrev()
    {
        let diferrence = this.end - this.start
        if ((this.end-this.step) >= 0)
        {
            if (diferrence == this.step)
            {
                this.start -= this.step
                this.end -= this.step
                this.orderGrid()
            }
            else
            {
                this.start -= this.step
                this.end -= diferrence + 1
                this.orderGrid()
            }
        }
    }

    changeOrder(orderStatus = this.orderStatus, drinkList = this.drinkList)
    {
        this.orderStatus = orderStatus
        this.drinkList = drinkList
        this.drinkList = this.orderStates[this.orderStatus](this.drinkList)
        
        this.start = 0
        if (this.drinkList.length >= this.step)
        {
            this.end = this.step - 1
        }
        else 
        {
            this.end = this.drinkList.length - 1
        }

        this.orderGrid()
    }

    addListeners(){
        const orderOptions = document.querySelector("#orderBy")
        orderOptions.addEventListener("change", () => {this.changeOrder(orderOptions.value)})

        document.querySelector(".next").addEventListener("click", () => {this.goNext()})
        document.querySelector(".prev").addEventListener("click", () => {this.goPrev()})
    }

}

const prevPage = document.querySelector(".prev")
const nextPage = document.querySelector(".next")
const gridManager = document.querySelectorAll(".grid-manager")
const total = document.querySelector('#total-grid')
const actual = document.querySelector('#actual-grid')

function defineGridFlow(start, end, step, drinkList)
{
    total.textContent = Math.ceil(drinkList.length/step)
    actual.textContent = (start+step)/step
    if (end == -1){
        prevPage.style.display = 'none'
        nextPage.style.display = 'none'
        gridManager[0].style.display = 'none'
        gridManager[1].style.display = 'none'
        gridManager[2].style.display = 'none'
    }
    else{
        gridManager[0].style.display = 'inline'
        gridManager[1].style.display = 'inline'
        gridManager[2].style.display = 'inline'
        if (start == 0){
            prevPage.style.display = 'none'
        }
        else {
            prevPage.style.display = 'inline'
        }

        if (end == drinkList.length-1){
            nextPage.style.display = 'none'
        }
        else{
            nextPage.style.display = 'inline'
        }
    }
}