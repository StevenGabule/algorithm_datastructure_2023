// ** given we have a array of input and multiple every value and sort it by ascending order
// ** [ 1, 2, 3 ] -> [1, 4, 6]
// ** [ -4, -2, 0, 1, 2 ] -> [0, 1, 4, 4, 16]

// ** brute force method
const arrNum = [-4, -2, 0, 1, 2];
const filterArr = [];
for (n of arrNum) {
  filterArr.push(n * n);
}

console.log(filterArr.sort((a, b) => a - b));

// code solution by other dev
function sortedSquared(array) {
  const newArray = new Array(array.length).fill(0);
  for (let i = 0; i < array.length; i++) {
    newArray[i] = Math.pow(array[i], 2);
  }
  newArray.sort((a, b) => a - b);

  return newArray;
}

const a = [1, 3, 4, 5];
const b = [-7, -2, 3, 4, 9];
const c = [];

console.log(sortedSquared(a));
console.log(sortedSquared(b));
console.log(sortedSquared(c));

// ** code solution: method 2
function sortedSquaredArray(array) {
  const newArray = new Array(array.length).fill(0);
  let pointerLeft = 0;
  let pointerRight = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    const leftSquared = Math.pow(array[pointerLeft], 2);
    const rightSquared = Math.pow(array[pointerRight], 2);

    if (leftSquared > rightSquared) {
      newArray[i] = leftSquared;
      pointerLeft++;
    } else {
      newArray[i] = rightSquared;
      pointerRight--;
    }
  }

  return newArray;
}
console.log('----------------------------------------------');
console.log(sortedSquaredArray(a))
console.log(sortedSquaredArray(b))
console.log(sortedSquaredArray(c))
