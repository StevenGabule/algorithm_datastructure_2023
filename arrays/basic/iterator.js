function logIterable(it) {
  if (typeof it[Symbol.iterator] !== 'function') {
    console.log(it, 'is not iterable.');
    return;
  }
  for (const letter of it) {
    console.log(letter);
  }
}

console.log(logIterable(["a", "b", "c"]));
console.log(logIterable(["abc"]));
console.log(logIterable(123));
