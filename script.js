// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


// // Add an element to an array 
// function addItemToArray () {
//     // const newItem = 21
//     numbers.push(21);
//     console.log(numbers);
// }

// addItemToArray();

// // Remove an item (last item) from an array

// function removeLastItem () {
//     numbers.pop();
//     console.log(numbers);
// }

// removeLastItem();

// //Remove an item (first Item) from an array 

// function removeFirstItem () {
//     numbers.shift();
//     console.log(numbers);
// }

// removeFirstItem();

// // Add an item to the beginning of an array

// function addItemToTheBeginning () {
//     numbers.unshift(100)
//     console.log(numbers);
// }

// addItemToTheBeginning();

// Filter an array to get the even numbers 

// function getEvenNumbers () {
//    const evenNumber = numbers.filter(num => num % 2 === 0)
//     console.log(evenNumber);
// }

// getEvenNumbers();

import {getEvenNumbers, getOddNumbers, findMaz, findMin, sortDescending} from './mod.js'

getEvenNumbers();
getOddNumbers();
findMaz();
findMin();
sortDescending();

