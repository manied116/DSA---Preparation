/*Two Sum II - Input Array Is Sorted */
//question
/*
Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length-1;
    while(left < right){
        let sum = numbers[left] + numbers[right]
        if(sum === target){
            return [left+1,right+1]
        }else if(sum > target){
            right--
        }else{
            left++
        }
    }
}
console.log(twoSum([2,7,11,15],9))
console.log(twoSum([2,3,4],6))
console.log(twoSum([-1,0],-1))

// 3some
//Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

var threeSum = function(nums) {
    let res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let total = nums[i] + nums[j] + nums[k];

            if (total > 0) {
                k--;
            } else if (total < 0) {
                j++;
            } else {
                res.push([nums[i], nums[j], nums[k]]);
                j++;

                while (nums[j] === nums[j-1] && j < k) {
                    j++;
                }
            }
        }
    }
    return res;   
};

console.log(threeSum([-1,0,1,2,-1,-4]))

//sort colors
/*
You are given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]

Output: [0,0,1,1,2,2]
*/
