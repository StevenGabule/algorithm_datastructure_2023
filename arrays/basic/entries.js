// ** The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
const array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries();
// console.log(iterator1.next().value);
// console.log(iterator1.next().value);

for (const [, element] of array1.entries()) {
  console.log(element);
}