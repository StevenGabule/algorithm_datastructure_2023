// ** given we have an array of numbers: [3, 4, 5, 7]
function monotonic(arr) {
  let firstIndex = arr[0];
  let lastIndex = arr[arr.length - 1];

  let mono = true;

  // checking for non decreasing values
  // -1 -2
  if (firstIndex < lastIndex) {
    for (let index = 1; index < arr.length; index++) {
      if (firstIndex < arr[index]) {
        firstIndex = arr[index];
      } else {
        mono = false;
      }
    }
  }

  firstIndex = arr[0];
  lastIndex = arr[arr.length - 1];

  // checking for non increasing values
  if (firstIndex > lastIndex) {
    for (let index = 1; index < arr.length; index++) {
      if (firstIndex > arr[index]) {
        firstIndex = arr[index];
      } else {
        mono = false;
      }
    }
  }

  firstIndex = arr[0];
  lastIndex = arr[arr.length - 1];
  // ** check if all the values are the same entry
  if (firstIndex === lastIndex) {
    for (let index = 1; index < arr.length; index++) {
      if (firstIndex === arr[index]) {
        firstIndex = arr[index];
      } else {
        mono = false;
      }
    }
  }

  return mono;
}
const a = [1, 2, 3, 4, 5];
const b = [5, 4, 3, 2, 1, -1];
const c = [3,3,3,3];
const d = [-1, -1, -1, -1, -1, -2];
const e = [4,2,5,6,1];
const f = [4,4,2,4,4];
console.log(monotonic(a));
console.log(monotonic(b));
console.log(monotonic(c));
console.log(monotonic(d));

// ** 💡 other solution

function checkIfMonotonic(arr) {
  let firstIndex = arr[0];
  let lastIndex = arr[arr.length - 1];

  if (firstIndex === lastIndex) {
    for (let i = 0; i < arr.length - 1; i++) {
      if(arr[i+1] !== arr[i]) {
        return false;
      }
    }
  } else if(firstIndex < lastIndex) {
    for(let i = 0; i < arr.length - 1; i++) {
      if(arr[i+1] < arr[i]) {
        return false
      }
    }
  } else {
    for(let i = 0; i < arr.length - 1; i++) {
      if(arr[i+1] > arr[i]) {
        return false
      }
    }
  }

  return true;
}
console.log('-----------------------------------------------');
console.log(checkIfMonotonic(a));
console.log(checkIfMonotonic(b));
console.log(checkIfMonotonic(c));
console.log(checkIfMonotonic(d));
console.log(checkIfMonotonic(e));
console.log(checkIfMonotonic(f));