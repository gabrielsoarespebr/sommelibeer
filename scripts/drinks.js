export function drinks() //Lista de bebidas
{
    let drink0000 = {id: '00', name: "Heineken 600ml", price: 10.63, rating: 4.6, comment: "Produto como sempre é de muito boa qualidade", img: "images/drinks/heineken600ml.png", brand: "Heineken", volume: 600, type: "Lager", alcoholcontent: 5, ibu: 19, energyvalue: 84, carbohydrates: 6.4, allergens: "Contém glúten. Pode conter cevada.", ingredients: "Água, malte e lúpulo.", harmonization: "Petiscos em geral.", 
    links: ["https://www.bompreco.com.br/cerveja-lager-heineken-600ml-0000078905498/p?idsku=2144&gclid=Cj0KCQjw166aBhDEARIsAMEyZh76UyiZanik9AvtgiLo4wjaUILGWnbsDpUnXKaiIqSV6croRh5vL2QaAiOiEALw_wcB",
"https://www.paodeacucar.com/produto/105770/cerveja-heineken-garrafa-600ml",
"https://www.americanas.com.br/produto/5732485437?pfm_carac=heineken-600ml&pfm_index=2&pfm_page=search&pfm_pos=grid&pfm_type=search_page&offerId=6304ecc9adbc5f39b9a87a78",
"https://www.extra.com.br/cerveja-heineken-600ml-pack-6-unidades-1508841442/p/1508841442?utm_medium=cpc&utm_source=GP_PLA&IdSku=1508841442&idLojista=12231&tipoLojista=3P&&utm_campaign=3P_ALLPRODUCTS_PMAX&gclid=Cj0KCQjw166aBhDEARIsAMEyZh5kxvvv8gTahXLantILJkliPSp-JGW7N1kzZR7-AiL3Ch79Lqt9YskaAnnEEALw_wcB&gclsrc=aw.ds",
"https://www.carrefour.com.br/cerveja-heineken-600ml---pack-6-unidades-mp912776129/p"]};

    let drink0001 = {id: '01', name: "Brahma Duplo Malte 600ml", price: 6.99, rating: 4.0, comment: "Produto de qualidade ilibada. Recomendo!", img: "images/drinks/brahmaduplomalte600ml.png", brand: "Brahma", volume: 600, type: "Lager", alcoholcontent: 4.7, ibu: 11, energyvalue: 80, carbohydrates: 6, allergens: "Contém cevada e glúten.", ingredients: "Água, malte e lúpulo.", harmonization: "Petiscos em geral.", 
    links: ["https://www.bompreco.com.br/cerveja-duplo-malte-brahma-lata-473ml-7891991298827/p",
"https://www.paodeacucar.com/produto/462219/cerveja-brahma-duplo-malte-puro-malte-350ml-lata",
"https://www.americanas.com.br/produto/2639478849?pfm_carac=brahma-duplo-malte&pfm_index=3&pfm_page=search&pfm_pos=grid&pfm_type=search_page&offerId=5fd7d8010c070442661d507b",
"https://www.extra.com.br/bebidas/cervejas/puro-malte/cerveja-brahma-duplo-malte-lata-350-ml-pack-12-latas-1543745031.html?idsku=1543745031",
"https://www.carrefour.com.br/cerveja-brahma-duplo-malte-lata-350ml-pack-12-unidades-mp928594510/p"]};

    let drink0002 = {id: '02', name: "Eisenbahn Strong Golden Ale 355ml", price: 4.99, rating: 4.3, comment: "Uma cerveja de excepcional qualidade, como manda a boa tradição alemã. Nela se sente os aromas de malte e lúpulo e oferece um equilíbrio excelente entre o amargor e o doce", img: "images/drinks/eisenbahnstronggoldenale355ml.png", brand: "Eisenbahn", volume: 355, type: "Strong Golden Ale", alcoholcontent: 8.0, ibu: 10, energyvalue: 172, carbohydrates: 20, allergens: "Contém derivados de cevada e glúten.", ingredients: "Água, malte e lúpulo.", harmonization: "Frutos do mar, massas, queijos, presunto parma, tender, torta de frango, queijo brie com mel, torresmo e comidas apimentadas.",
    links: ["https://cornershopapp.com/pt-br/products/s5tk-eisenbahn-cerveja-strong-golden-ale-puro-malte-355ml"]};

    let drink0003 = {id: '03', name: "Eisenbahn Weizenbock 355ml", price: 6.90, rating: 3.9, comment: "Uma cerveja que vale a pena experimentar", img: "images/drinks/eisenbahweizenbock355ml.png", brand: "Eisenbahn", volume: 355, type: "Weizenbock (Weissbier-Bock)", alcoholcontent: 8.0, ibu: 14, energyvalue: 172, carbohydrates: 20, allergens: "Contém derivados de cevada e glúten.", ingredients: "Água, malte de cevada e trigo, lúpulo e leveduras.", harmonization: "Salada ceasar, frango assado, lombo defumado, salsicha e linguiça de porco, arroz e feijão, comida mexicana e chinesa, camarão frito, caranguejo, atum, truta, peixe frito, lagosta, torta de limão.",
    links: ["https://www.oemporio.com.br/cerveja_eisenbahn_weizenbock_355ml_542.html"]};

    let drink0004 = {id: '04', name: "Hoegaarden 330ml", price: 5.25, rating: 4.4, comment: "Produto com ótimo preço e o sabor maravilhoso de sempre", img: "images/drinks/hoegaarden330ml.png", brand: "Hoegaarden", volume: 330, type: "Witbier", alcoholcontent: 4.9, ibu: 15, energyvalue: 94, carbohydrates: 10, allergens: "Contém cevada e glúten.", ingredients: "Água, malte de cevada, trigo, xarope de glicose, levedura, lúpulo, especiarias, sementes de coentro, casca de laranja natural, acidificante: ácido cítrico.", harmonization: "Peixes, frutos do mar, bolinho de bacalhau, frango grelhado, ceviche e feijoada.",
    links: ["https://www.paodeacucar.com/produto/148184/cerveja-de-trigo-hoegaarden-330-ml-long-neck",
"https://www.americanas.com.br/produto/38430094?pfm_carac=hoegaarden-330ml&pfm_index=3&pfm_page=search&pfm_pos=grid&pfm_type=search_page&offerId=6148c54c09c351890d89dbf7",
"https://www.extra.com.br/bebidas/cervejas/premium/cerveja-hoegaarden-witbier-long-neck-330ml-1510995279.html?idsku=1510995279"]};

    let drink0005 = {id: '05', name: "Stella Artois Puro Malte Long Neck 330ml", price: 5.39, rating: 3.8, comment: "Stella é uma das melhores cervejas que já consumi", img: "images/drinks/stellaartois330ml.png", brand: "Stella Artois", volume: 330, type: "Lager", alcoholcontent: 5, ibu: 24, energyvalue: 134, carbohydrates: 9.3, allergens: "Contém cevada.", ingredients: "Água, malte e lúpulo.", harmonization: "Carnes vermelhas e frutos do mar.",
    links: ["https://www.bompreco.com.br/cerveja-lager-premium-puro-malte-stella-artois-garrafa-330ml-7891991015462/p",
"https://www.paodeacucar.com/produto/452630/cerveja-stella-artois-puro-malte-330ml-long-neck",
"https://www.americanas.com.br/produto/5532810143?pfm_carac=stella-artois-puro-malte-long-neck-330ml&pfm_index=2&pfm_page=search&pfm_pos=grid&pfm_type=search_page&offerId=62e8c3daadbc5f39b9bdc7bb",
"https://www.extra.com.br/_error?n=404&url=https://npdp.extra.com.br/bebidas/cervejas/pilsen/cerveja-stella-artois-puro-malte-275ml-long-neck-1542589465.html?idsku=1542589465",
"https://www.carrefour.com.br/cerveja-stella-artois-garrafa-600ml-6594425/p"]};

    let drink0006 = {id: '06', name: "Devassa Puro Malte 600ml", price: 5.39, rating: 3.0, comment: "No custo-benefício das puro maltes de preços razoáveis leva disparado o prêmio. Justíssima. Desce muito bem.", img: "images/drinks/devassa600ml.png", brand: "Devassa", volume: 600, type: "Lager", alcoholcontent: 4.4, ibu: 10, energyvalue: 78, carbohydrates: 7, allergens: "Contém derivados de cevada e glúten.", ingredients: "Água, malte e lúpulo.", harmonization: "Petiscos em geral.",
    links: ["https://www.bompreco.com.br/cerveja-lager-puro-malte-tropical-devassa-lata-pack-18-unidades-473ml-cada-7898904771989/p?idsku=85698&gclid=Cj0KCQjw48OaBhDWARIsAMd966BB7eLnvZwhJvwEOg8v3U0tQyqjrpnqLEpdOKhBuKehNC9BVM3wiSMaAuJzEALw_wcB",
"https://www.paodeacucar.com/produto/341228/cerveja-devassa-puro-malte-lata-269ml?ef_id=Cj0KCQjwhsmaBhCvARIsAIbEbH4H9zr9h1BOSaSyUuxNPZOb13JYpWWR9MNzmLr67CAVvY-vGQ7-bCkaAmrTEALw_wcB:G:s&s_kwcid=AL!912!3!499159574842!!!g!!&utm_source=Google&utm_medium=cpc&utm_campaign=pda-dsa-paginas&utm_content=home-cpc-keyword-conversao&gclid=Cj0KCQjwhsmaBhCvARIsAIbEbH4H9zr9h1BOSaSyUuxNPZOb13JYpWWR9MNzmLr67CAVvY-vGQ7-bCkaAmrTEALw_wcB"]};

    let drink0007 = {id: '07', name: "Budweiser 600ml", price: 7.49, rating: 3.8, comment: "Cerveja leve apesar dos 5%, e a única Standard American Lager sem aditivos químicos que já tomei.", img: "images/drinks/budweiser600ml.png", brand: "Budweiser", volume: 600, type: "Lager", alcoholcontent: 5, ibu: 10, energyvalue: 81, carbohydrates: 5.4, allergens: "Contém cevada e glúten.", ingredients: "Água, malte, arroz e lúpulo.", harmonization: "Hambúrguer, presunto cozido e castanhas.",
    links: ["https://www.bompreco.com.br/cerveja-budweiser-american-lager-330ml-long-neck-7891991014762/p",
"https://www.paodeacucar.com/produto/424019/cerveja-budweiser-american-lager-330ml-long-neck",
"https://www.americanas.com.br/produto/1514618852?pfm_carac=cerveja-budweiser&pfm_index=1&pfm_page=search&pfm_pos=grid&pfm_type=search_page&offerId=62040decd9fd6edeec82054e",
"https://www.extra.com.br/bebidas/cervejas/premium/cerveja-budweiser-lata-410ml-com-12-unidades-1536640557.html?idsku=1536640557"]};

    let drink0008 = {id: '08', name: "Nossa 600ml", price: 5.49, rating: 4.2, comment: "Uma cerveja ótima pra quem é do Estado de PE. Aqui realmente é muito quente, então ela combina bastante por ser leve.", img: "images/drinks/nossa600ml.png", brand: "Nossa", volume: 600, type: "Lager", alcoholcontent: 4.4, ibu: 8, energyvalue: 75, carbohydrates: 5.8, allergens: "Contém cevada e glúten.", ingredients: "Água, malte, milho, mandioca e lúpulo.", harmonization: "Frutos do mar, peixes e amendoim.",
    links: ["https://www.atacadao.com.br/cerveja-nossa-de-pernambuco-lata-473ml/"]};

    let drink0009 = {id: '09', name: "Corona 355ml", price: 6.58, rating: 3.6, comment: "A Corona é uma cerveja espetacular, bem leve e gostosa! Ao tomar, corte uma meia lua de limão e coloque dentro pra dar um toque especial!", img: "images/drinks/corona355ml.png", brand: "Corona", volume: 355, type: "Pilsen", alcoholcontent: 4.6, ibu: 18, energyvalue: 144, carbohydrates: 14, allergens: "Contém cevada e glúten.", ingredients: "Água, malte, arroz e lúpulo.", harmonization: "Bolinho de bacalhau, ostra e camarão frito.",
    links: ["https://www.bompreco.com.br/cerveja-corona-extra-pilsen-330ml-long-neck-7891149108718/p",
"https://www.paodeacucar.com/produto/456783/cerveja-corona-extra-pilsen-330ml-long-neck-1-garrafa-de-plastico-sera-reciclada",
"https://www.americanas.com.br/produto/5966681588?pfm_carac=cerveja-corona&pfm_index=16&pfm_page=search&pfm_pos=grid&pfm_type=search_page&offerId=632c595b9064f2befb172f6e",
"https://www.extra.com.br/cerveja-corona-extra-long-neck-330ml-6-unidades-55048304/p/55048304",
"https://www.carrefour.com.br/cervejacoronalneck330mlc06-mp923250073/p"]};

    let drink0010 = {id: '10', name: "Antarctica Subzero 269ml", price: 2.39, rating: 3.8, comment: "Leve, refrescante e boa drinkability, eu gosto.", img: "images/drinks/antarcticasubzero269ml.png", brand: "Antarctica", volume: 269, type: "Pilsen", alcoholcontent: 4.5, ibu: 7.2, energyvalue: 108, carbohydrates: 9.1, allergens: "Contém cevada e glúten.", ingredients: "Água, malte, milho e lúpulo.", harmonization: "Amendoim, castanhas, aves e carne grelhada.",
    links: ["https://www.bompreco.com.br/cerveja-pilsen-antarctica-sub-zero-350ml-7891991010023/p",
"https://www.extra.com.br/cerveja-antarctica-subzero-269ml-pack-com-15-latas-1530506477/p/1530506477",
"https://www.carrefour.com.br/cerveja-antarctica-subzero-269ml-pack-com-15-latas-mp928782052/p"]};

    let drink0011 = {id: '11', name:"Amstel Puro Malte", price:3.39 , rating: 4.6, comment: "Ótimo custo benefício para quem gosta de cerveja puro malte", img:"images/drinks/amstel_lager.png" , brand: "Amstel", volume:350 ,type: "American Lager" ,alcoholcontent: 4.6, ibu: 11, energyvalue:72 , carbohydrates:8.3 , allergens: "Contém cevada", ingredients: "Água, malte e lúpulo.", harmonization: "Saladas, peixes e frutos do mar", 
    links:["https://www.bompreco.com.br/7896045504831-cerveja-lager-puro-malte-amstel-lata-350ml/p",
"https://www.paodeacucar.com/produto/324900?storeId=501&isGoogleShopping=true",
"https://www.americanas.com.br/produto/105014284",
"https://www.clubeextra.com.br/produto/370496/cerveja-amstel-puro-malte-latao-473ml",
"https://mercado.carrefour.com.br/cerveja-amstel-puro-malte-lata-350-ml-9750860/p",]};

    let drink0012 = {id: '12', name:"Itaipava 100% Malte", price:2.29 , rating: 2.7, comment: "A melhor cerveja do grupo Petrópolis. Tem um bom custo-benefício pelo preço comprado", img:"images/drinks/itaipava_puro_malte.png" , brand: "Itaipava", volume:269 , type: "American Larger", alcoholcontent: 4.8, ibu: 9.5, energyvalue: 101.15, carbohydrates: 9, allergens: "Contém cevada", ingredients:"água, lúpulo e maltes provenientes da cevada." , harmonization: " carnes vermelhas, aves, peixes, castanhas,  culinária japonesa e comida de boteco.",
    links: ["https://www.paodeacucar.com/produto/811049/cerveja-itaipava-puro-malte-lata-269ml",
"https://www.americanas.com.br/produto/4946646953?pfm_carac=Bebidas%20do%20Belly&pfm_page=seller&pfm_pos=grid&pfm_type=vit_product_grid&sellerId=23356004000102",
"https://www.clubeextra.com.br/produto/860283/cerveja-puro-malte-itaipava-lata-269ml"]};

    let drink0013 = {id: '13', name:"Antarctica Pilsen", price: 2.59 , rating: 3, comment: "É clara e tem baixa fermentação. Tem aroma, sabor e amargor suaves.", img:"images/drinks/antarctica_pilsen.png" , brand: "Antarctica", volume: 350, type: "Pilsen", alcoholcontent: 4.7, ibu: 9, energyvalue: 150.5, carbohydrates: 12.6, allergens: "Contém cevada e glúten.", ingredients: "água, malte, milho e lúpulo", harmonization: "petiscos, castanhas e amendoins, aves, carne bovina", 
    links:["https://www.bompreco.com.br/cerveja-pilsen-antarctica-350ml-7891991000796/p?idsku=1024&gclid=Cj0KCQjwteOaBhDuARIsADBqRehb4eegYcDIdJYz-mJXnJGELE4Vp-NgHcnNGwNvMXKHcPNcGlJV_5AaAq85EALw_wcB",
"https://www.paodeacucar.com/produto/173185/cerveja-antarctica-pilsen-lata-269ml",
"https://www.americanas.com.br/produto/105028094",
"https://www.extra.com.br/_error?n=404&url=https://npdp.extra.com.br/bebidas/cervejas/premium/cerveja-pilsen-antarctica-350-ml-pack-18-unidades-1516329128.html?idsku=1516329128&message=undefined",
"https://mercado.carrefour.com.br/cerveja-antarctica-pilsen-lata-350ml-155632/p?skuId=4048"]};

    let drink0014 = {id: '14', name:"Bohemia Puro Malte", price: 3.79, rating: 3.6, comment: "Produto de alta qualidade e bom custo benefício", img:"images/drinks/bohemia_350.png" , brand: "Bohemia", volume: 350, type: "Lager", alcoholcontent: 5, ibu: 9, energyvalue: 144, carbohydrates: 11.9, allergens: "Contém cevada e glúten", ingredients: "Água, malte e lúpulo.", harmonization: "Aromas florais do lúpulo de Bohemia ajudam a condimentar pratos como embutidos e saladas", 
    links:["https://www.bompreco.com.br/cerveja-bohemia-puro-malte-473ml-lata-7891991014236/p?idsku=1028&gclid=CjwKCAjwh4ObBhAzEiwAHzZYU_m6itOeaTZBikbKcu9ooRcjRky8FXzF1Yn-Q0i6UrmbPfpuR3dLDxoCjhgQAvD_BwE",
"https://www.paodeacucar.com/produto/93607/cerveja-bohemia-puro-malte-269ml-lata",
"https://www.americanas.com.br/produto/1678516676?pfm_carac=voc%C3%AA%20tamb%C3%A9m%20pode%20gostar%20disso&pfm_index=5&pfm_page=product&pfm_pos=item_page.rr1&pfm_type=vit_recommendation&DCSext.recom=RR_item_page.rr1-mars_ClickCP%3AP%3A94%3A%3Aads%3Dtrue%3AorderAdsTest%3Dmotor_high_ads&nm_origem=rec_item_page.rr1-mars_ClickCP%3AP%3A94%3A%3Aads%3Dtrue%3AorderAdsTest%3Dmotor_high_ads&nm_ranking_rec=5&offerId=5fc2b5c1762ff367194ff938",
"https://www.extra.com.br/bebidas/cervejas/premium/cerveja-bohemia-puro-malte-lata-350-ml-pack-12-unidades-1529691348.html?idsku=1529691348"]};

    let drink0015 = {id: '15', name:"Petra Origem Puro Malte", price: 3.49, rating: 4.2, comment: "Muito boa, atendeu as minhas expectativas, eu recomendo!", img:"images/drinks/petra_origem.png" , brand: "Petra", volume: 350, type: "Lager", alcoholcontent: 4.8, ibu: 10, energyvalue: 154, carbohydrates: 38, allergens: "Contém glúten e cevada", ingredients: "Água, malte de cevada e lúpulo.", harmonization: "carnes, caldos e sopas, aperitivos e queijos.", 
    links:["https://www.paodeacucar.com/produto/429530/cerveja-puro-malte-petra-origem-lata-350ml",
"https://www.americanas.com.br/produto/6061710639?opn=YSMESP&offerId=633de1d19064f2befbd97d80&srsltid=AR5OiO2tkpNilIZVAhLeVtedgwEDHhe_1qwJThCR3T4fxnoWK3nOGHELjlQ",
"https://www.extra.com.br/cerveja-petra-origem-puro-malte-350ml-1519133201/p/1519133201",
"https://www.carrefour.com.br/cerveja-petra-origem-puro-malte-350ml-mp920174983/p"]};

    let drink0016 = {id: '16', name:"Cacildis Puro Malte", price: 3.99, rating: 3, comment: "Aroma de malte. Sabor maltado, leve dulçor, sem amargor. Leve.", img:"images/drinks/cacildis.png" , brand: "Cacildis", volume: 350, type: "Lager", alcoholcontent: 5, ibu: 13, energyvalue: 153, carbohydrates: 25, allergens: "Contém malte e cevada", ingredients: "Água, malte de cevada, lúpulo, levedura", harmonization: " Comida de boteco, carnes e massas", 
    links:["https://www.paodeacucar.com/produto/434225/cerveja-amber-lager-puro-malte-cacildis-lata-350ml",
"https://www.americanas.com.br/produto/2438547457?pfm_index=1&pfm_page=brand&pfm_pos=grid&pfm_type=brand_page",
"https://www.extra.com.br/cerveja-cacildis-350ml-1519133183/p/1519133183"]};

    let drink0017 = {id: '17', name:"Império Puro Malte", price: 4.55, rating: 2.9, comment: "Sabor bem equilibrado, bom custo benefício entre preço e qualidade", img:"images/drinks/imperio_puromalte.png" , brand: "Império", volume: 350, type: "Pilsen", alcoholcontent: 4.5, ibu: 15, energyvalue: 144, carbohydrates: 122.4, allergens: "Contém cevada e glúten", ingredients: "2 puros maltes importados, água de qualidade e lúpulo de Hallertau", harmonization: "carnes", 
    links:["https://www.paodeacucar.com/produto/789427/cerv-imperio-pm350ml",
"https://www.americanas.com.br/produto/5739643573?epar=bp_pl_00_go_geral_pmax&opn=YSMESP&WT.srch=1&offerId=63079f149064f2befbce26da&gclsrc=aw.ds&gclid=Cj0KCQjwqoibBhDUARIsAH2OpWg07436A2AFcjNTKz-9ZG3JyXJbAzcqL-24Q3Tml_DD8PCkAaJddT4aAm1aEALw_wcB",
"https://www.extra.com.br/beleza-saude/saude/acessoriosparasaude/cerveja-imperio-lata-350ml-pack-com-12-unidades-1508846790.html?idsku=1508846790",
"https://mercado.carrefour.com.br/cerveja-imperio-puro-malte-pilsen-350ml-5195276/p"]};

    let drink0018 = {id: '18', name:"Skol Puro Malte", price: 4.47, rating: 3, comment: "Ela melhorou e essa versão puro malte é deliciosamente boa. Além de ter um preço mais acessível que as outras puro malte.", img: "images/drinks/skol_puromalte.png", brand: "Skol", volume: 269, type: "American Lager", alcoholcontent: 4.4, ibu: 11, energyvalue: 84, carbohydrates: 6.4, allergens: "Contém cevada e glúten.", ingredients: "água, malte e lúpulo", harmonization: "aves grelhadas, salada de polvo e mix de castanhas.", 
    links:["https://www.bompreco.com.br/cerveja-american-lager-premium-puro-malte-skol-lata-sleek-350ml-7891149109746/p",
"https://www.paodeacucar.com/produto/437924/cerveja-skol-puro-malte-lata-269ml",
"https://www.americanas.com.br/produto/6354790311?pfm_carac=skol&pfm_index=24&pfm_page=search&pfm_pos=grid&pfm_type=search_page&offerId=635dc245b1efc389fc9e3877",
"https://www.extra.com.br/bebidas/cervejas/puro-malte/cerveja-skol-puro-malte-lata-269ml-pack-15-unidades-55017377.html?idsku=55017377",
"https://www.carrefour.com.br/cerveja-skol-puro-malte-lata-269ml-pack-15-unidades-mp929443744/p"]};

    let drinks = [drink0000,drink0001,drink0002,drink0003,drink0004,drink0005,drink0006,drink0007,drink0008,drink0009,drink0010,drink0011,drink0012,drink0013,drink0014,drink0015,drink0016,drink0017,drink0018 ];
    return drinks;
}