const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];
const arr3 = arr1.concat(arr2);
console.log(arr3);

// ** Concatenating values to an array
// ** The following code concatenates three values to an array:
const letters = ['a', 'b', 'c'];
const alphaNumeric = letters.concat(1, [2, 3]);
console.log(alphaNumeric);

// ** Concatenating nested arrays
// ** The following code concatenates nested arrays and demonstrates retention of references:
const num1 = [[1]];
const num2 = [2, [3]];
const numbers = num1.concat(num2);
console.log(numbers); // results in [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4);

console.log(numbers);

// ** Concatenating array - like objects with Symbol.isConcatSpreadable
// ** concat does not treat all array - like objects as arrays by default — 
// ** only if Symbol.isConcatSpreadable is set to a truthy value(e.g.true).
const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
console.log([0].concat(obj1, obj2)); // [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]


