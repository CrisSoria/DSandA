/*
REMOVE DUPLICATES FROM SORTED ARRAY
* given a sorted array nums, remove the duplicates inplace
* such that each element appears only once and returns the 
* new length.
*/
//?  ejemplo num = [1,1,2,3,3,4,5,5] => 5

/*
removeDupicates(nums):
  if(nums.lenth == 0):
    return 0;
  int i = 0;
  for(int j=1; j<nums.lenth; j++):
    if( nums[i] != nums[j]):
      i++;
      nums[i] = nums[j]
  return i+1;
*/
//! TC: O[n]
//! SC: O[1]

const removeDupicates = (nums) => {
  if (nums.lenth === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] != nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

let ejemNums = [1, 1, 1, 2, 3, 12];
const result = removeDupicates(ejemNums);

console.log(result);
