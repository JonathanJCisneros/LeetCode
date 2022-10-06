/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// My attempt

function twoSum(nums, target){
    let newList = []
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[i] + nums[j] === target && i !== j){
                newList.push(i);
                newList.push(j);
                return newList;
            }
        }
    }
    return null;
}

// Solution

function bestTwoSum(nums, target){
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] === target - nums[i]){
                return [j,i]
            }
        }
    }
    return null
}

console.log("My attempt")
console.log(twoSum([2,5,7,12,23], 25))
console.log(twoSum([2,3,4,5], 7))
console.log("LeetCode Solution")
console.log(bestTwoSum([2,5,7,12,23], 25))
console.log(bestTwoSum([2,3,4,5], 7))