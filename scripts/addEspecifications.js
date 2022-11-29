import { drinks } from './drinks.js'
let drinkList = drinks()
let id = window.location.href.split("?")[1]
let bebida
for (let i = 0; i < drinkList.length; i++){
    if (drinkList[i].id == id){
        bebida = drinkList[i]
    }
}

document.title = bebida.name

var i = 5;

var x = document.querySelector(".product-image");
x.setAttribute("src",
bebida.img);

var x = document.querySelector("#price");
x.textContent = "R$" + 
bebida.price.toFixed(2).replace(".", ",");

var x = document.querySelector(".product-name");
x.textContent = 
bebida.name;

var x = document.querySelector(".rating");
x.textContent = 
bebida.rating.toFixed(1);

var x = document.querySelector("#brand");
x.textContent = 
bebida.brand;

var x = document.querySelector("#volume");
x.textContent = 
bebida.volume + "ml";

var x = document.querySelector("#type");
x.textContent = 
bebida.type;

var x = document.querySelector("#alcoholcontent");
x.textContent = 
bebida.alcoholcontent + "%";

var x = document.querySelector("#ibu");
x.textContent = 
bebida.ibu;

var x = document.querySelector("#energyvalue");
x.textContent = 
bebida.energyvalue + "kcal";

var x = document.querySelector("#carbohydrates");
x.textContent = 
bebida.carbohydrates + "g";

var x = document.querySelector("#allergens");
x.textContent = 
bebida.allergens;

var x = document.querySelector("#ingredients");
x.textContent = 
bebida.ingredients;

var x = document.querySelector("#harmonization");
x.textContent = 
bebida.harmonization;

var x = document.querySelector(".user-comment");
x.textContent = 
bebida.comment;
