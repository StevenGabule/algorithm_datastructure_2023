class Counter {
  constructor() {
    this.sum = 0;
    this.count = 0;
  }

  add(array) {
    // ** Only function expressions will have its own this binding
    array.forEach(function countEntry(entry) {
      this.sum += entry;
      ++this.count;
    }, this)
  }
}

const obj = new Counter();
obj.add([2,5,9])
console.log(obj.count); // 3
console.log(obj.sum);   // 16

// ** An object copy function
// ** The following code creates a copy of a given object.

// ** There are different ways to create a copy of an object. The following is just one way and is presented
// ** to explain how Array.prototype.forEach() works by using Object.* utility functions.
const copy = (obj) => {
  const copy = Object.create(Object.getPrototypeOf(obj))
  const propNames = Object.getOwnPropertyNames(obj)
  propNames.forEach((name) => {
    const desc = Object.getOwnPropertyDescriptor(obj, name)
    Object.defineProperty(copy, name, desc)
  });
  return copy;
}

const obj1 = { a: 1, b: 2 };
const obj2 = copy(obj1);
console.log(obj1);
console.log(obj2);

// ** Modifying the array during iteration
// ** forEach() does not make a copy of the array before iterating.
const words = ['one','two', 'three', 'four']
words.forEach((word) => {
  if (word == 'two') {
    words.shift()
  }
})
console.log(words); // ['two', 'three', 'four']

// ** Flatten an array
// ** The following example is only here for learning purpose. If you want to flatten an
// ** array using built-in methods you can use Array.prototype.flat().
const flatten = (arr) => {
  const result = [];
  arr.forEach((item) => {
    if(Array.isArray(item)) {
      result.push(...flatten(item))
    } else {
      result.push(item)
    }
  })
  return result;
}
// Usage
const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

const arrayLike = { length: 3, 0: 2, 1: 3, 2: 4};
const arrNum = [];
Array.prototype.forEach.call(arrayLike, (x) => arrNum.push(x));
console.log(arrNum);











