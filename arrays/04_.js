const maxAreaBruteForce = (array) => {
  let area = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      const height = Math.min(array[i], array[j]);
      const width = (j - i);
      area = Math.max(area, height * width);
    }
  }
  return area;
}

//console.log(maxAreaBruteForce([3, 7, 5, 6, 8, 4]))
//console.log(maxAreaBruteForce([9, 1, 2, 3, 10]))

const maxArea = (array) => {
  let area = 0;
  let i = 0;
  let j = array.length - 1;

  while( i < j) {
    let height = Math.min(array[i], array[j])
    let newArea = height * (j - i)
    area = Math.max(area, newArea)
    if(array[i] < array[j]) i++;
    else j--;
  }
  return area;
}

console.log(maxArea([3, 7, 5, 6, 8, 4]))
console.log(maxArea([9, 1, 2, 3, 10]))
