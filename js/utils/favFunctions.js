//These two values, id and name: I want to put them in a object and store them in an Array. And store that entire array in local storage.
// to do that: write a function that gets the current value of our favourites from local storage.
//If there is nothing in local storage for this key we wanna return an empty array.
//Create that function:

// export function getExistingFavs() {
//     const favs = localStorage.getItem("favourites"); //lets get whatever is stored under the key "Favourites" from local storage.
//     //I want to call this function everytime I click on a heart. So I put it in the handleClick function above.
//     //console.log(favs);
//     // I want this function to return an empty array if nothing is stored under the favourites key in local storage.
//     if (!favs) {
//         return [];
//     } // means if favourites does not exist (is equal to null or undefined), return an empty array from this function
//     else {
//         return JSON.parse(favs); //because we cant store arrays in local storage, it is saved as a string, and we need to convert it back to its originally datastructure. In this case an array of objects.
//     }
// }

//FASIT
export function getExistingFavs() {
    const favs = localStorage.getItem("favourites");

    if (favs === null) {
        return [];
    } else {
        return JSON.parse(favs);
    }
}
