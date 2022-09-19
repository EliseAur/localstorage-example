// import { getExistingFavs } from "./utils/favFunctions.js";
// import products from "./data/products.js";

// const productContainer = document.querySelector(".product-container");

// const favourites = getExistingFavs();

// //forEach loop
// products.forEach((product) => {
//     let cssClass = "far";

//     //Check through favs array
//     //does the product id exist in the favs array
//     const doesObjectExist = favourites.find(function (fav) {
//         console.log(fav);

//         return parseInt(fav.id) === product.id;
//     });

//     console.log(doesObjectExist);

//     //If id is in the array, change the style of the i element
//     if (doesObjectExist) {
//         cssClass = "fa";
//     }

//     productContainer.innerHTML += `<div class="product">
//                                     <h4>${product.name}<h4>
//                                     <i class="${cssClass} fa-heart" data-id="${product.id}" data-name=${product.name}"></i>
//                                     </div>`;
//     //data attributes in the i element to store data. A good way to store variables on html elements.
//     //Want to store the id and the name in local storage.
//     //data attributes: you can call them whatever you want.
// });

// //console.log(products);

// const favButtons = document.querySelectorAll(".product i");
// //console.log(favButtons);

// // for each of the i elements (hearts) we want to add a ClickEventListener. Loop through all of them.
// //Use a forEch loop again
// favButtons.forEach((button) => {
//     button.addEventListener("click", handleClick);
// });

// function handleClick() {
//     //console.log(event);
//     this.classList.toggle("fa"); //same as: event.target.classlist.toggle() - we are adding and removing classes.
//     this.classList.toggle("far"); //same as: event.target.classlist.toggle() - this means the object that the function belongs to (event.target)
//     const id = this.dataset.id; //I want to get the data attributes everytime I click on a heart
//     //dataset is how I get access to all the data attributes.
//     const name = this.dataset.name;
//     // console.log("name", name); //get the name of product in the console when you click on a heart.
//     // console.log("id", id);     //get the id of product in the console when you click on a heart.
//     const currentFavs = getExistingFavs(); // everytime I click on a heart, its gonna call this function (see function below),
//     // and get the key that is stored under favourites in local storage.
//     //console.log(currentFavs);
//     const productExists = currentFavs.find(function (fav) {
//         //Does this product really exist in the array? Run the find-method on currentFavs.
//         return fav.id === id; //Only if the id is actually in the favourites array, return it.
//     });

//     if (productExists === undefined) {
//         const product = { id: id, name: name }; //Create a new variable called product. It's an object with key of id and value of id. Same for name.
//         //My key and value are the same here.
//         currentFavs.push(product); //push the poduct as a new item to the array.
//         saveFavs(currentFavs); //save whatevere the current value for currentFavs is. And save that into local storage.
//     } else {
//         const newFavs = currentFavs.filter((fav) => fav.id !== id); //Filter - creating a new array and excluding all the objects that have the id that we just clicked on.
//     }
// }

// function saveFavs(favs) {
//     localStorage.setItem("favourites", JSON.stringify(favs)); //Key and value in local storage.
//     //I can only save strings in local storage, not arrays or objects. That is why favs needs to be stringified (JSON.tringify)
// }

// //this. = event.target

//FASIT;
import { getExistingFavs } from "./utils/favFunctions.js";
import products from "./data/products.js";

const productContainer = document.querySelector(".product-container");

const favourites = getExistingFavs();

products.forEach((product) => {
    let cssClass = "far";

    // check through favs array
    // does the product id exist in the favs array
    const doesObjectExist = favourites.find(function (fav) {
        console.log(fav);

        return parseInt(fav.id) === product.id;
    });

    console.log(doesObjectExist);

    // if is in the array, change the style of the i element
    if (doesObjectExist) {
        cssClass = "fa";
    }

    productContainer.innerHTML += `<div class="product">
                                    <h4>${product.name}</h4>
                                    <i class="${cssClass} fa-heart" data-id="${product.id}" data-name="${product.name}"></i>
                                </div>`;
});

const favButtons = document.querySelectorAll(".product i");

favButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
});

function handleClick() {
    this.classList.toggle("fa");
    this.classList.toggle("far");

    const id = this.dataset.id;
    const name = this.dataset.name;

    const currentFavs = getExistingFavs();

    const productExists = currentFavs.find(function (fav) {
        return fav.id === id;
    });

    if (productExists === undefined) {
        const product = { id: id, name: name };
        currentFavs.push(product);
        saveFavs(currentFavs);
    } else {
        const newFavs = currentFavs.filter((fav) => fav.id !== id);
        saveFavs(newFavs);
    }
}

function saveFavs(favs) {
    localStorage.setItem("favourites", JSON.stringify(favs));
}
