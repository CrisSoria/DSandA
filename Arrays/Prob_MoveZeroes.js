/*
* teniendo un array de numeros, mover los numeros cero al final 
* manteniendo el orden previo.

? ejemplo: [0,1,0,3,12] => [1,3,12,0,0]
*/

/*
moveZeroes(nums):
  current = 0;
  for i from 0 to len(nums)-1;
    if nums[i] != 0;
      nums[current] = nums[i];
      current ++;
  for i from current to len(nums)-1;
    nums[i] = 0
*/
//! TC:O[n]
//! SC: O[1]
function moveZeroes(nums) {
  let current = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[current] = nums[i];
      current++;
    }
  }

  for (let j = current; j < nums.length; j++) {
    nums[j] = 0;
  }
  return nums;
}

const ejemNums = [0, 1, 0, 3, 12];
console.log(moveZeroes(ejemNums));
