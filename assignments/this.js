/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding, window or console.
* 2. Implicit binding, using the dot notion. The object before the . is this.
* 3. New binding.Its a constructor function in this constructor function an objected is created. Also the keyword new is used.
* 4. Explicit binding, uses, .call, .apply and binding, goes with a function or object.
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
function helloWorld(world) {
    console.log(this, 'this');
    return world;
}
console.log("earth");


// Principle 2

// code example for Implicit Binding
const timObj = {
    saying: "say my name",
    saySaying: function(name){
        console.log(`${this.saying}, its ${name}.`);
       
    }
};
console.log(timObj.saying)

// Principle 3

// code example for New Binding



function VideoGames(games) {
    this.title = games;
    this.play = function() {
        return `I play  ${this.title}.`
    }
}

const tim = new VideoGames("Madden");
const kim = new VideoGames("CookingCraze");
console.log(tim.play());
console.log(kim.play());

// Principle 4

// code example for Explicit Binding

function Item (product, weight){
    this.product = product;
    this.weight = weight;
}

function Product(product, weight){
    Item.call(this, product, weight);
    this.type = "product";
    console.log(`${this.product} weighs ${this.weight} pounds`);
}
console.log(new Product("Ham", 5).product);
console.log(new Product("Meat", 10).weight)