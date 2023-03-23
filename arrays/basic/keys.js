// ** The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
const array1 = ['a', 'b', 'c']
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

console.log('------------------------------------------------');
const arrayLike = { length: 3}
for (const entry of Array.prototype.keys.call(arrayLike)) {
  console.log(entry);
}

console.log('------------------------------------------------');
// ** Using keys() on sparse arrays
const arr = ['a', , 'c']
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys);
console.log(denseKeys);