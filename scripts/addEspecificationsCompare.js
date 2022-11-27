import { drinks } from './drinks.js'
var bebidas = drinks()
let id = window.location.href.split('?')[1].split('-')
let bebida1
let bebida2

for (let i = 0; i < bebidas.length; i++){
    if (bebidas[i].id == id[0]){
        bebida1 = bebidas[i] 
    }
    else if (bebidas[i].id == id[1]){
        bebida2 = bebidas[1]
    }
}

let drinkList = [bebida1, bebida2]

for (let i = 0; i < drinkList.length; i++) {


    var x = document.querySelectorAll(".product-image");
    x[i].setAttribute("src", drinkList[i].img);

    var x = document.querySelectorAll("#price");
    x[i].textContent = "R$" + drinkList[i].price.toFixed(2);

    var x = document.querySelectorAll(".product-name");
    x[i].textContent = drinkList[i].name;

    var x = document.querySelectorAll(".rating");
    x[i].textContent = drinkList[i].rating.toFixed(1);

    var x = document.querySelectorAll("#brand");
    x[i].textContent = drinkList[i].brand;

    var x = document.querySelectorAll("#volume");
    x[i].textContent = drinkList[i].volume + "ml";

    var x = document.querySelectorAll("#type");
    x[i].textContent = drinkList[i].type;

    var x = document.querySelectorAll("#alcoholcontent");
    x[i].textContent = drinkList[i].alcoholcontent + "%";

    var x = document.querySelectorAll("#ibu");
    x[i].textContent = drinkList[i].ibu;

    var x = document.querySelectorAll("#energyvalue");
    x[i].textContent = drinkList[i].energyvalue + "kcal";

    var x = document.querySelectorAll("#carbohydrates");
    x[i].textContent = drinkList[i].carbohydrates + "g";

    var x = document.querySelectorAll("#allergens");
    x[i].textContent = drinkList[i].allergens;

    var x = document.querySelectorAll("#ingredients");
    x[i].textContent = drinkList[i].ingredients;

    var x = document.querySelectorAll("#harmonization");
    x[i].textContent = drinkList[i].harmonization;


}
