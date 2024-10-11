const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// Filter an array to get the even numbers 

function getEvenNumbers () {
   const evenNumber = numbers.filter(num => num % 2 === 0)
    console.log(evenNumber);
}

// Filter an array to get the odd numbers 

function getOddNumbers () {
    const oddNumber = numbers.filter(num => num % 2 === 1)
     console.log(oddNumber);
 }

 // Find the maximum number from an array 

 function findMaz () {
   const maxNumber = Math.max(...numbers)
   console.log(maxNumber);
 }

 // Find the minimum number from an array 

 function findMin () {
    const minNumber = Math.min(...numbers)
    console.log(minNumber);
  }
 
  // Sort an array to Ascending 

  function sortDescending () {
    numbers.sort((a, b) => b - a)
    console.log(numbers);
  }

  export {getEvenNumbers, getOddNumbers, findMaz, findMin, sortDescending};

  