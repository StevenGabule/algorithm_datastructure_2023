const reverse = (nums, start, end) => {
  while(start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

const rotate = (nums, k) => {
  k = k % nums.length;               // ** k = 102, length = 5, rotations = 2
  reverse(nums, 0, nums.length - 1); // ** nums.reverse()
  reverse(nums, 0,k - 1);            // ** start = 0, end = k -1 
  reverse(nums, k, nums.length - 1); // ** start = k, end = length - 1
  return nums;
}

const a = [1,2,3,4,5];
console.log(rotate(a, 5));
console.log(rotate([], 5));