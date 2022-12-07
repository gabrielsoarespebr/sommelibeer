import { getDrinks, getTypes, getBrands } from "../getters.js"

export class Filter {
    constructor(){
        this.checkTypes
        this.checkBrands
        this.selectType
        this.selectBrand
        this.cleanFilterBtn

        //refactor
        this.defaultDrinks = getDrinks()
        this.specifiedDrinks = []
        this.filterPrice = [0, 10000] 
        this.filterMl = [0, 10000]
        this.filterTeor = [0, 100]
        this.filterStar = [0, 5]
        this.filterTypes = getTypes()
        this.filterBrands = getBrands()
        this.filterWord = ''

        this.infoSelect = document.querySelectorAll('.info-select') 
        this.infoPrice = document.querySelector('#price-info')
        this.infoMl = document.querySelector('#ml-info')
        this.infoTeor = document.querySelector('#teor-info')
        this.infoStar = document.querySelector('#star-info')
        this.infoTypes = document.querySelector('#type-info')
        this.infoBrands = document.querySelector('#brand-info')

        this.higherPrice
        this.lowerPrice
        this.higherMl
        this.lowerMl
        this.higherTeor
        this.lowerTeor
        this.drinkList
        this.typeList
        this.brandList

        this.clearCond = false
        this.cleanIndividual
        this.result = document.querySelector('#result')

        this.menuStates = {
            start(){
                let itemsList = document.querySelectorAll(".filter-list")
                for (let indice = 0; indice < itemsList.length; indice++){
                    if (indice != 0){
                        itemsList[indice].style.display = "none"}
                    }
                
            },
            price(){
                let itemsList = document.querySelector("#price-list")
                if (itemsList.style.display=="none")
                {
                    itemsList.style.display = "block"
                    document.querySelector('#price').innerHTML = "&#10134; Preço"
                }
                else {
                    itemsList.style.display = "none"
                    document.querySelector('#price').innerHTML = "&#10133; Preço"
                }
            },
            avaliation(){
                let itemsList = document.querySelector("#avaliation-list")
                if (itemsList.style.display=="none")
                {
                    itemsList.style.display = "block"
                    document.querySelector('#avaliation').innerHTML = "&#10134; Avaliação"
                }
                else 
                {
                    itemsList.style.display = "none"
                    document.querySelector('#avaliation').innerHTML = "&#10133; Avaliação"
                }
            },
            volume(){
                let itemsList = document.querySelector("#volume-list")
                if (itemsList.style.display=="none")
                {
                    itemsList.style.display = "block"
                    document.querySelector('#volume').innerHTML = "&#10134; Volume"
                }
                else 
                {
                    itemsList.style.display = "none"
                    document.querySelector('#volume').innerHTML = "&#10133; Volume"
                }
            },
            type(){
                let itemsList = document.querySelector("#type-list")
                if (itemsList.style.display=="none")
                {
                    itemsList.style.display = "block"
                    document.querySelector('#type').innerHTML = "&#10134; Tipo"
                }
                else 
                {
                    itemsList.style.display = "none"
                    document.querySelector('#type').innerHTML = "&#10133; Tipo"
                }
            },
            brand(){
                let itemsList = document.querySelector("#brand-list")
                if (itemsList.style.display=="none")
                {
                    itemsList.style.display = "block"
                    document.querySelector('#brand').innerHTML = "&#10134; Marca"
                }
                else 
                {
                    itemsList.style.display = "none"
                    document.querySelector('#brand').innerHTML = "&#10133; Marca"
                }
            },
            alcohol(){
                let itemsList = document.querySelector("#alcohol-list")
                if (itemsList.style.display=="none")
                {
                    itemsList.style.display = "block"
                    document.querySelector('#alcohol').innerHTML = "&#10134; Teor"
                }
                else 
                {
                    itemsList.style.display = "none"
                    document.querySelector('#alcohol').innerHTML = "&#10133; Teor"
                }
            }
        }
    }

    defineOptionsRange()
    {
        for (let i = 0; i < this.infoSelect.length; i++){
            this.infoSelect[i].style.display = 'none'
        }

        this.cleanFilterBtn = document.querySelector('#button-clean-filter')
        this.cleanFilterBtn.style.display = 'none'

        this.higherPrice, this.lowerPrice, this.higherMl, this.lowerMl, this.higherTeor, this.lowerTeor
        let drinkList = getDrinks()
        this.typeList = getTypes()
        this.brandList = getBrands()
        
        for (let cont = 0; cont < drinkList.length; cont++){
        
            if (cont==0){this.higherPrice = this.lowerPrice = drinkList[cont].price}
            else {
                if (drinkList[cont].price > this.higherPrice){
                    this.higherPrice = drinkList[cont].price
                }
                if (drinkList[cont].price < this.lowerPrice){
                    this.lowerPrice = drinkList[cont].price
                }
            }
        
            if (cont==0){this.higherMl = this.lowerMl = drinkList[cont].volume}
            else {
                if (drinkList[cont].volume > this.higherMl){
                    this.higherMl = drinkList[cont].volume
                }
                if (drinkList[cont].volume < this.lowerMl){
                    this.lowerMl = drinkList[cont].volume
                }
            }
            if (cont==0){this.higherTeor = this.lowerTeor = drinkList[cont].alcoholcontent}
            else {
                if (drinkList[cont].alcoholcontent > this.higherTeor){
                    this.higherTeor = drinkList[cont].alcoholcontent
                }
                if (drinkList[cont].alcoholcontent < this.lowerTeor){
                    this.lowerTeor = drinkList[cont].alcoholcontent
                }
            }
        }
        
        this.typeList.sort()
        this.brandList.sort()
        let maior = Math.max(this.typeList.length, this.brandList.length)
        let brands = document.querySelector("#brand-list")
        let types = document.querySelector("#type-list")
        
        
        types.innerHTML = '<div class="select-all-div"><input type="checkbox" name="select-all-type" id="select-all-type"><label class="select-all-none" for="select-all-type">Nenhum</label></div>'
        brands.innerHTML = '<div class="select-all-div"><input type="checkbox" name="select-all-brand" id="select-all-brand"><label class="select-all-none" for="select-all-brand">Nenhum</label></div>'
        for (let count = 0; count < maior; count++){
            if (count < this.typeList.length) {
                types.innerHTML += '<div class="check-item-box"><input class="filter-type" type="checkbox" name="'+this.typeList[count]+'" id="'+this.typeList[count]+'"><label class="check" for="'+this.typeList[count]+'">'+this.typeList[count]+'</label></div>'
            }
            if (count < this.brandList.length) {
                brands.innerHTML += '<div class="check-item-box"><input class="filter-brand" type="checkbox" name="'+this.brandList[count]+'" id="'+this.brandList[count]+'"><label class="check" for="'+this.brandList[count]+'">'+this.brandList[count]+'</label></div>'
            }
        }
        types.innerHTML += '<div class"select-number"><button class="filter-button" id="appType">Aplicar</button></div>'
        brands.innerHTML += '<button class="filter-button" id="appBrand">Aplicar</button>'
        
        let total = parseFloat(((this.higherPrice - this.lowerPrice)/4).toFixed(2))
        
        let price = Math.floor(this.lowerPrice) 
        let aumentoPrice = Math.floor(total)  
        for (let c = 0; c < 4; c++)
        {
            let priceList = document.querySelector("#price-list")
            price += aumentoPrice
            if (c == 0)
            {
                priceList.innerHTML += '<div><img class="pointer-filter" src="images/arrow-blue.png" alt="Indicado de Seleção"><p class="filter-item" id="00-'+price+'-price">Até R$ '+price.toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2})+'</p><img class="thrash-filter" id="thrash-price-'+c+'" src="images/thrash-small.png" alt="Remover Seleção"></div>'
            }
            else
            {
                if (c != 3){
                    priceList.innerHTML += '<div><img class="pointer-filter" src="images/arrow-blue.png" alt="Indicado de Seleção"><p class="filter-item" id="'+(price-aumentoPrice)+'-'+price+'-price">R$ '+(price-aumentoPrice).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2})+" a R$ "+price.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2})+'</p><img class="thrash-filter" id="thrash-price-'+c+'" src="images/thrash-small.png" alt="Remover Seleção"></div>'
                }
                else {
                    priceList.innerHTML += '<div><img class="pointer-filter" src="images/arrow-blue.png" alt="Indicado de Seleção"><p class="filter-item" id="'+(price-aumentoPrice)+'-'+this.higherPrice+'-price">R$ '+(price-aumentoPrice).toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2})+" a R$ "+this.higherPrice.toLocaleString("pt-br", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2})+'</p><img class="thrash-filter" id="thrash-price-'+c+'" src="images/thrash-small.png" alt="Remover Seleção"></div>'
                }
            }    
        }
        
        let aumentoMl = (this.higherMl-this.lowerMl)/4
        aumentoMl = (Math.ceil(aumentoMl))
        let ml = Math.floor(this.lowerMl)
        for (let c = 0; c < 4; c++)
        {
            let volumeList = document.querySelector("#volume-list")
            ml += aumentoMl
            if (c == 0)
            {
                volumeList.innerHTML += '<div><img class="pointer-filter" src="images/arrow-blue.png" alt="Indicado de Seleção"><p class="filter-item" id="00-'+ml+'-ml">Até '+ml+'ML</p><img class="thrash-filter" id="thrash-ml-'+c+'" src="images/thrash-small.png" alt="Remover Seleção"></div>'
            }
            else
            {
                if (c != 3){
                    volumeList.innerHTML += '<div><img class="pointer-filter" src="images/arrow-blue.png" alt="Indicado de Seleção"><p class="filter-item" id="'+(ml-aumentoMl)+'-'+ml+'-ml">'+(ml-aumentoMl)+'ML a '+ml+'ML</p><img class="thrash-filter" id="thrash-ml-'+c+'" src="images/thrash-small.png" alt="Remover Seleção"></div>'
                }
                else {
                    volumeList.innerHTML += '<div><img class="pointer-filter" src="images/arrow-blue.png" alt="Indicado de Seleção"><p class="filter-item" id="'+(ml-aumentoMl)+'-'+this.higherMl+'-ml">'+(ml-aumentoMl)+'ML a '+this.higherMl+'ML</p><img class="thrash-filter" id="thrash-ml-'+c+'" src="images/thrash-small.png" alt="Remover Seleção"></div>'
                }
                
            }    
        }
        
        let aumentoTeor = (this.higherTeor-this.lowerTeor)/4
        aumentoTeor = (Math.ceil(aumentoTeor))
        let teor = Math.floor(this.lowerTeor)
        for (let c = 0; c < 4; c++)
        {
            let alcoholList = document.querySelector("#alcohol-list")
            teor += aumentoTeor
            if (c == 0)
            {
                alcoholList.innerHTML += '<div><img class="pointer-filter" src="images/arrow-blue.png" alt="Indicado de Seleção"><p class="filter-item" id="00-'+teor+'-teor">Até '+teor+'%</p><img class="thrash-filter" id="thrash-teor-'+c+'" src="images/thrash-small.png" alt="Remover Seleção"></div>'
            }
            else
            {
                if (c != 3){
                    alcoholList.innerHTML += '<div><img class="pointer-filter" src="images/arrow-blue.png" alt="Indicado de Seleção"><p class="filter-item" id="'+(teor-aumentoTeor)+'-'+teor+'-teor">'+(teor-aumentoTeor)+'% a '+teor+'%</p><img class="thrash-filter" id="thrash-teor-'+c+'" src="images/thrash-small.png" alt="Remover Seleção"></div>'
                }
                else {
                    alcoholList.innerHTML += '<div><img class="pointer-filter" src="images/arrow-blue.png" alt="Indicado de Seleção"><p class="filter-item" id="'+(teor-aumentoTeor)+'-'+this.higherTeor+'-teor">'+(teor-aumentoTeor)+'% a '+this.higherTeor+'%</p><img class="thrash-filter" id="thrash-teor-'+c+'" src="images/thrash-small.png" alt="Remover Seleção"></div>'
                }
                
            }    
        }

        this.checkTypes = document.querySelectorAll(".filter-type")
        this.checkBrands = document.querySelectorAll(".filter-brand")

        for (let cont  = 0; cont < this.checkTypes.length; cont++)
        {
            this.checkTypes[cont].checked = true
        }
        for (let cont  = 0; cont < this.checkBrands.length; cont++)
        {
            this.checkBrands[cont].checked = true
        }

        this.selectType = document.querySelector("#select-all-type")
        this.selectBrand = document.querySelector("#select-all-brand")
    }
    showMenu(category)
    {
        if (category == 'start'){
            this.menuStates[category]()
        }
        else {
            this.menuStates[category.id]()
        }
    }

    specifyFilterChanger(id){
        this.cleanFilterBtn.style.display = 'block'
        this.specifiedDrinks = []
        

        

        if (id == "cleanAll"){
            this.cleanAllFilters()
        }
        else if (Array.isArray(id)){
            if (id[1] == "type"){
                this.filterTypes = id[0].slice(0)
                if (this.filterTypes.length != this.typeList.length){
                    if (id[0].length == 0){this.infoTypes.innerText = `Nenhum tipo`}
                    else if (id[0].length == 1){this.infoTypes.innerText = `${id[0].length} tipo`}
                    else {this.infoTypes.innerText = `${id[0].length} tipos`}
                    this.infoTypes.style.display = 'inline-block'
                }
                else {
                    this.infoTypes.style.display = 'none'
                }
                
            }
            else if (id[1] == "brand"){
                this.filterBrands = id[0].slice(0)
                if (this.filterBrands.length != this.brandList.length){
                    if (id[0].length == 0){this.infoBrands.innerText = `Nenhuma marca`}
                    else if (id[0].length == 1){this.infoBrands.innerText = `${id[0].length} marca`}
                    else {this.infoBrands.innerText = `${id[0].length} marcas`}
                    this.infoBrands.style.display = 'inline-block'
                }
                else {
                    this.infoBrands.style.display = 'none'
                }
            }
        }
        else if (id.split('-')[0] == 'word'){
            this.cleanAllFilters()
            this.filterWord = id.split('-')[1]
        }
        else if (id.split('-')[0] == "thrash"){
            if (id.split('-')[1] == "price"){
                this.filterPrice = [0, 10000]
                this.infoPrice.style.display = 'none'   
                 
                /*this.infoTypes.style.display = 'none' 
                this.infoBrands.style.display = 'none' */
            }
            else if (id.split('-')[1] == "ml"){
                this.filterMl = [0, 10000]
                this.infoMl.style.display = 'none'

            }
            else if (id.split('-')[1] == "teor"){
                this.filterTeor = [0, 100]
                this.infoTeor.style.display = 'none'
            }
            else if (id.split('-')[1] == "star"){
                this.filterStar = [0, 5]
                this.infoStar.style.display = 'none'
            }
        }
        else if (id.split("-")[2] == "price"){
            this.filterPrice = [parseFloat(id.split('-')[0]), parseFloat(id.split('-')[1])]
            if (this.filterPrice[0] > 0){this.infoPrice.innerText = `R$${this.filterPrice[0].toFixed(2).replace('.', ',')} - R$${this.filterPrice[1].toFixed(2).replace('.', ',')}`}
            else {this.infoPrice.innerText = `R$${this.filterPrice[1].toFixed(2).replace('.', ',')}`}
            this.infoPrice.style.display = 'inline-block'
        }
        else if (id.split("-")[2] == "ml"){
            this.filterMl = [parseFloat(id.split('-')[0]), parseFloat(id.split('-')[1])]
            if (this.filterMl[0] > 0){this.infoMl.innerText = `${this.filterMl[0]}ml - ${this.filterMl[1]}ml`}
            else {this.infoMl.innerText = `${this.filterMl[1]}ml`}
            this.infoMl.style.display = 'inline-block'
        }
        else if (id.split("-")[2] == "teor"){
            this.filterTeor = [parseFloat(id.split('-')[0]), parseFloat(id.split('-')[1])]
            if (this.filterTeor[0] > 0){this.infoTeor.innerText = `Teor: ${this.filterTeor[0]}% - ${this.filterTeor[1]}%`}
            else {this.infoTeor.innerText = `Teor: ${this.filterTeor[1]}%`}
            this.infoTeor.style.display = 'inline-block'
        }
        else if (id.split("-")[2] == "star"){
            this.filterStar = [parseInt(id.split('-')[0]), parseInt(id.split('-')[1])]
            if (this.filterStar[0] > 1){this.infoStar.innerText = `${this.filterStar[0]} estrelas`}
            else {this.infoStar.innerText = `${this.filterStar[0]} estrela`}
            this.infoStar.style.display = 'inline-block'
        }

        this.clearCond = true
        for (let i = 0; i < this.infoSelect.length; i++){
            if (this.infoSelect[i].style.display == 'inline-block'){
                this.clearCond = false
            }
        }

        for (let cont=0; cont < this.defaultDrinks.length; cont++){
            if (this.defaultDrinks[cont].price >= this.filterPrice[0] && this.defaultDrinks[cont].price <= this.filterPrice[1])
            {
                if(this.defaultDrinks[cont].volume >= this.filterMl[0] && this.defaultDrinks[cont].volume <= this.filterMl[1])
                {
                    if (this.defaultDrinks[cont].alcoholcontent >= this.filterTeor[0] && this.defaultDrinks[cont].alcoholcontent <= this.filterTeor[1])
                    {
                        if (this.defaultDrinks[cont].rating >= this.filterStar[0] && this.defaultDrinks[cont].rating <= this.filterTeor[1]){
                            if (this.filterTypes.includes(this.defaultDrinks[cont].type)){
                                if (this.filterBrands.includes(this.defaultDrinks[cont].brand)){
                                    if ((this.defaultDrinks[cont].name.toLowerCase()).includes(this.filterWord.toLowerCase())){
                                        this.specifiedDrinks.push(this.defaultDrinks[cont])
                                    }
                                    
                                }
                            }
                        }
                    }
                }
            }
        }
        
        for (let cont = 0; cont < this.checkTypes.length; cont ++){
            if (this.filterTypes.includes(this.checkTypes[cont].id)){
                this.checkTypes[cont].checked = true
            }
            else {
                this.checkTypes[cont].checked = false
            }
        }

        for (let cont = 0; cont < this.checkBrands.length; cont ++){
            if (this.filterBrands.includes(this.checkBrands[cont].id)){
                this.checkBrands[cont].checked = true
            }
            else {
                this.checkBrands[cont].checked = false
            }
        }
        this.checkAllTest('type')
        this.checkAllTest('brand')
        this.colorSelected(id)
        return this.specifiedDrinks
    }

    colorSelected(id){
        const moneyInput = document.querySelectorAll(".input-money")
        moneyInput[0].value = ''
        moneyInput[1].value = ''
        if (id.includes('word')){
            let resultado = document.querySelector(".search-info")
            resultado.style.display = 'block'
            resultado.innerText = this.filterWord
        }
        if (id == 'cleanAll'){
            this.cleanFilterBtn.style.display = 'none'
        }
        else if (this.clearCond){
            this.cleanFilterBtn.style.display = 'none'   
            this.result.style.display = 'none'         
        }
        else {
            this.result.style.display = 'block'
            if(this.specifiedDrinks.length == 0){
                this.result.style.display = 'none'
            }
            else {
                if (this.specifiedDrinks.length > 1) {
                    this.result.innerHTML = '<p>'+this.specifiedDrinks.length+' resultados encontrados</p>'
                }
                else {
                    this.result.innerHTML = '<p>'+this.specifiedDrinks.length+' resultado encontrado</p>'
                }
            }
        }
        if (!Array.isArray(id)){
            if (id.split("-")[2] == "price" || id == 'cleanAll' || (id.split("-")[0]+id.split("-")[1]) == "thrashprice"){
                let priceList = document.querySelector("#price-list").querySelectorAll('.filter-item')
                let imgPointer = document.querySelectorAll('.pointer-filter')
                let imgThrash = document.querySelectorAll('.thrash-filter')
                for (let cont = 0; cont < priceList.length; cont++){
                    if (priceList[cont].id == id){
                        imgPointer[cont].style.display = 'inline'
                        imgThrash[cont].style.display = 'inline'
                        priceList[cont].style.color = "var(--orange)"
                    }
                    else {
                        imgPointer[cont].style.display = 'none'
                        imgThrash[cont].style.display = 'none'
                        priceList[cont].style.color = "var(--black)"
                    }
    
                }
            }
            if (id.split("-")[2] == "ml" || id == 'cleanAll' || (id.split("-")[0]+id.split("-")[1]) == "thrashml"){
                let volumeList = document.querySelector("#volume-list").querySelectorAll('.filter-item')
                let imgPointer = document.querySelector("#volume-list").querySelectorAll('.pointer-filter')
                let imgThrash = document.querySelector("#volume-list").querySelectorAll('.thrash-filter')
                for (let cont = 0; cont < volumeList.length; cont++){
                    if (volumeList[cont].id == id){ 
                        imgPointer[cont].style.display = 'inline'
                        imgThrash[cont].style.display = 'inline'
                        volumeList[cont].style.color = "var(--orange)" 
                    }
                    else {
                        imgPointer[cont].style.display = 'none'
                        imgThrash[cont].style.display = 'none'
                        volumeList[cont].style.color = "var(--black)"
                    }
                }
            }
            if (id.split("-")[2] == "teor" || id == 'cleanAll' || (id.split("-")[0]+id.split("-")[1]) == "thrashteor"){
                let alcoholList = document.querySelector("#alcohol-list").querySelectorAll('.filter-item')
                let imgPointer = document.querySelector("#alcohol-list").querySelectorAll('.pointer-filter')
                let imgThrash = document.querySelector("#alcohol-list").querySelectorAll('.thrash-filter')
                for (let cont = 0; cont < alcoholList.length; cont++){
                    if (alcoholList[cont].id == id){
                        imgPointer[cont].style.display = 'inline'
                        imgThrash[cont].style.display = 'inline'
                        alcoholList[cont].style.color = "var(--orange)"
                    }
                    else {
                        imgPointer[cont].style.display = 'none'
                        imgThrash[cont].style.display = 'none' 
                        alcoholList[cont].style.color = "var(--black)"
                    }
                }
            }
            if (id.split("-")[2] == "star" || id == 'cleanAll' || (id.split("-")[0]+id.split("-")[1]) == "thrashstar"){
                let avaliationList = document.querySelectorAll('.filter-stars')
                let imgThrash = document.querySelectorAll('.thrash-filter-avaliation')
                for (let cont = 0; cont < avaliationList.length; cont++){
                    if (avaliationList[cont].id == id){
                        avaliationList[cont].src = './images/star'+(cont+1)+'Selected.png'
                        avaliationList[cont].style.width = '55%'
                        imgThrash[cont].style.display = 'inline'
                    }
                    else {
                        avaliationList[cont].src = './images/star'+(cont+1)+'.png'
                        avaliationList[cont].style.width = '50%'
                        imgThrash[cont].style.display = 'none'
                    }
                }
            }
        }
    }

    selectAllType(){
        let cond = true
        for (let cont  = 0; cont < this.checkTypes.length; cont++){
            if(this.checkTypes[cont].checked == false){
                cond = false
            }
        }
        for (let cont  = 0; cont < this.checkTypes.length; cont++){
            this.checkTypes[cont].checked = !cond
        }
        if (cond){
            document.querySelectorAll('.select-all-none')[0].innerText = 'Todos'
        }
        else {
            document.querySelectorAll('.select-all-none')[0].innerText = 'Nenhum'
        }
    }
    selectAllBrand(){
        let cond = true
        for (let cont  = 0; cont < this.checkBrands.length; cont++){
            if(this.checkBrands[cont].checked == false){
                cond = false
            }
        }
        for (let cont  = 0; cont < this.checkBrands.length; cont++){
            this.checkBrands[cont].checked = !cond
        }
        if (cond){
            document.querySelectorAll('.select-all-none')[1].innerText = 'Todos'
        }
        else {
            document.querySelectorAll('.select-all-none')[1].innerText = 'Nenhum'
        }
    }

    checkAllTest(id) {
        if (id == 'type'){
            let cond = true
            for (let cont  = 0; cont < this.checkTypes.length; cont++){
                if (this.checkTypes[cont].checked == false){
                    cond = false
                }
            }
            this.selectType.checked = cond
            if (cond){
                document.querySelectorAll('.select-all-none')[0].innerText = "Nenhum"
            }
            else {
                document.querySelectorAll('.select-all-none')[0].innerText = "Todos"
            }
        }
        if (id == 'brand'){
            let cond = true
            for (let cont  = 0; cont < this.checkBrands.length; cont++){
                if (this.checkBrands[cont].checked == false){
                    cond = false
                }
            }
            this.selectBrand.checked = cond
            if (cond){
                document.querySelectorAll('.select-all-none')[1].innerText = "Nenhum"
            }
            else {
                document.querySelectorAll('.select-all-none')[1].innerText = "Todos"
            }
        }
    }

    cleanAllFilters() {
        this.defaultDrinks = getDrinks()
        this.specifiedDrinks = []
        this.filterPrice = [0, 10000] 
        this.filterMl = [0, 10000]
        this.filterTeor = [0, 100]
        this.filterStar = [0, 5]
        this.filterTypes = getTypes()
        this.filterBrands = getBrands()

        this.result.style.display = 'none'
        this.infoPrice.style.display = 'none' 
        this.infoMl.style.display = 'none' 
        this.infoTeor.style.display = 'none' 
        this.infoStar.style.display = 'none' 
        this.infoTypes.style.display = 'none' 
        this.infoBrands.style.display = 'none' 
    }
}