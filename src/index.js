//import Wishlist from "./Wishlist.js";
//import Car from "./Car";
//let wishlist = new Wishlist();
//let car = new Car("Ford", "Mustang", 2022);
//wishlist.add(car);
//console.log(wishlist);
//wishlist.remove(car);
//console.log(wishlist);




import Car from "./Car";
import Wishlist from "./Wishlist";

//Form selections
let form = document.querySelector("#submitForm");
let makeInput = document.querySelector("#makeInput");
let modelInput = document.querySelector("#modelInput");
let yearInput = document.querySelector("#yearInput");

//Display Selections
let wishlistUl = document.querySelector("#wishListContainer > ul");
let makeP = document.querySelector("#car-make");
let modelP = document.querySelector("#car-model");
let yearP = document.querySelector("#car-year");
let removeBtn = document.querySelector("#removeBtn");

//Script Values
let wishlist = new Wishlist();

//Event Listener

//Form is submitted
form.addEventListener("submit", (event) => {
    event.preventDefault();
//Will recieve make, model, year inputs
let make = makeInput.value;
let model = modelInput.value;
let year = yearInput.value;

//Will make new car from inputs
let car = new Car(make, model, year);

//Will add new car to wishlist
wishlist.add(car);

//Will update the DOM
let li = document.createElement("li");
li.classList.add("list-group-item");
li.textContent = car.model;


//Li is clicked
li.addEventListener("click", (event) => {
    //will diplay car details in vehicle card
    makeP.textContent = car.make;
    modelP.textContent = car.model;
    yearP.textContent = car.year;

    //enable remove button on vehicle card
    removeBtn.disabled = false;
    removeBtn.onclick = (event) => {
        //removes car from wishlist
        wishList.remove(car);

        //reset vehicle card display value
        makeP.textContent = "";
        modelP.textContent = "";
        yearP.textContent = "";

        //disabled remove button
        removeBtn.disabled = true;

        //remove li from DOM
        wishlistUl.removeChild(li);
    };
});

wishlistUl.appendChild(li);

//Clear form input
makeInput.value = "";
modelInput.value = "";
yearInput.value = "";
});

