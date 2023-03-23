const months = ['March', 'Jan', 'Feb', 'Dec']
months.sort();
console.log(months); // Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1,30,4,21,10000];
array1.sort();
console.log(array1) // [ 1, 10000, 21, 30, 4 ]

const stringArray = ["Blue", "Humpback", "Beluga"];
const numberArray = [40, 1, 5, 200];
const numericStringArray = ["80", "9", "700"];
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a,b) {
  return a - b;
}

console.log(stringArray.join()); // Blue,Humpback,Beluga
console.log(stringArray.sort()); // [ 'Beluga', 'Blue', 'Humpback' ]

console.log(numberArray.join()); // 40,1,5,200
console.log(numberArray.sort()); // [ 1, 200, 40, 5 ]
console.log(numberArray.sort(compareNumbers)); // [ 1, 5, 40, 200 ]


// ** Sorting array of objects
// ** ..Arrays of objects can be sorted by comparing the value of one of their properties.
const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
]

// sort by value
items.sort((a, b) => a.value - b.value);

// sort by name
items.sort((a,b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  console.log('nameA, nameB', nameA, nameB);
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0; // names must be equal
})

console.log(items);

// ** Sorting non-ASCII characters
const itemsValue = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
console.log(itemsValue.sort((a, b) => a.localeCompare(b))); // ** items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']

// ** the array to be sorted
const data = ["delta", "alpha", "charlie", "bravo"];

// ** temporary array holds objects with position and sort-value
const mapped = data.map((v,i) => {
  return { i, value: v } // someSlowOperation(v)
})

mapped.sort((a,b) => {
  if (a.value > b.value) return 1;
  if (a.value < b.value) return -1;
  return 0;
})

const result = mapped.map(v => data[v.i]);

console.log(["a", "c", , "b"].sort()); // ['a', 'b', 'c', empty]
console.log([, undefined, "a", "b"].sort()); // ["a", "b", undefined, empty]








