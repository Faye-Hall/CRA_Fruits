//import React from "react";
import fruits from "./fruits";
import { choice, remove } from "./helpers";

console.log(fruits);
let fruitChoice = choice(fruits);
console.log(`I'd like one ${fruitChoice}, please!`);
console.log(`Here you go: ${fruitChoice}`);
console.log(`Delicious! Can I have another!`);

let removedFruit = remove(fruits, fruitChoice);
//console.log(`Sorry, we're all out of ${fruitChoice}`);

console.log(`Sorry we're all out of ${removedFruit}s.`);
