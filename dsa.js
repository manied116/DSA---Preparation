//palindrome - brute force method
// reverse method used
function isPalindrome(str){
  const reverseStr = str.split("").reverse().join("")
  return str === reverseStr
}

// console.log(isPalindrome("mom"))
// console.log(isPalindrome("momi"))

//not reverse method
function isPalindromeNotReverseMethod(str){
    const reverseStr = str.split("")
    let storeStr = "";
    for( let i = 0; i < reverseStr.length; i++ ){
        storeStr = reverseStr[i] + storeStr;
    }
        return str === storeStr
}


// console.log(isPalindromeNotReverseMethod("mom"))
// console.log(isPalindromeNotReverseMethod("momi"))


// without reverse 
function isPalindromeNumber(num) {
    if (num < 0) return false;

    let originalNum = num;
    let reverseNum = 0;

    while (num > 0) {
        let digit = num % 10;
        reverseNum = reverseNum * 10 + digit;
        num = Math.floor(num / 10);
    }

    return originalNum === reverseNum;
}

// console.log(isPalindromeNumber(121));  // true
// console.log(isPalindromeNumber(546));  // false
/* important to remembar
let digit = num % 10;
reverseNum = reverseNum * 10 + digit;
num = Math.floor(num / 10);
*/

//========================================
//fibonacci
var fib = function(n) {
    let arr = [0,1]

    for(let i = 2; i <= n; i++){
        arr.push(arr[i-1] + arr[i-2])
    }
    return arr[n]
};

// console.log(fib(10))

var fib1 = function(n) {
    if (n <= 1) return n
    return fib1(n-1) + fib1(n-2)
}

// console.log(fib1(5))

//valid anagram

function isAnagaram (a,b){
    if(a.length !== b.length) return false;

    let rslt1 = {};
    let rslt2 = {};

    for(let i=0; i < a.length; i++){
        rslt1[a[i]] = (rslt1[a[i]] || 0) + 1
        rslt2[b[i]] = (rslt2[b[i]] || 0) + 1
    }

    for(let key in rslt1){
        if(rslt1[key] !== rslt2[key]) return false
    }
    return true
}

//create first obj then again create 2nd obj the compare both obj

// console.log(isAnagaram("anagaram","nagarama"))
// console.log(isAnagaram("car","rat"))

//two sum
// method 1
var twoSum = function(nums, target) {
    for(let a = 0; a< nums.length; a++){
        for(let b=a+1; b<nums.length; b++){
            if(nums[a] + nums[b] === target) return [a,b];
        }
    }
    return []
};

//optimized method2

var twosumOpti = function(nums, target) {
    var obj = {};
    for(let a = 0; a< nums.length; a++){
        var n = nums[a];
        if(obj[target - 1] >=0){
            return [obj[target - n], i];
        } else {
            obj[n] = i
        }
    }
}
// best time to buy sell stocks

function maxProfit(prices) {
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {

            let profitValue = prices[j] - prices[i];

            if (profitValue > maxProfit) {
                maxProfit = profitValue;
            }
        }
    }

    return maxProfit;
}

// console.log(maxProfit([7, 1, 5, 3, 6, 4])); 
//optimized
function maxProfit (prices) {
    let minValIndex = 0;
    let maxProfitVal = 0;

    for(let i = 0; i < prices.length; i++) {
        if(prices[minValIndex] > prices[i]){
            minValIndex = i
        }
        if(maxProfitVal < prices[i] - prices[minValIndex]){
            maxProfitVal = prices[i] - prices[minValIndex]
        }
    }
    return maxProfitVal
};

// console.log(maxProfit([7,5,1,3,6,4]))
//array
// optimized
function secondLargest(arr){
    let firstLargeNum = 0;
    let secondLargeNum = 0;
    
    for(let i = 0; i <arr.length; i++){
        if(firstLargeNum < arr[i]){
            firstLargeNum = arr[i]
        }else
        if(firstLargeNum > arr[i] && secondLargeNum < arr[i]){
            secondLargeNum = arr[i]
        }
    }
    return secondLargeNum
} 

// console.log(secondLargest([12,35,1,10,34,1]))
//sc-o(1) tc - (o (n))

// rotate array by k
 //ip-[1,2,3,4,5,6,7] - op - [5,6,7,1,2,3,4]
//  use reverse function


//remove duplicate from sorted array
//optimized
function removeDuplicate(arr){
    let rsltIndex = 0

    for(let i=rsltIndex+1; i<arr.length; i++){
        if(arr[rsltIndex] !== arr[i]){
            arr[rsltIndex+1] = arr[i]
            rsltIndex++
        }
    }
    return rsltIndex+1
}

// console.log(removeDuplicate([0,0,1,1,1,2,2,3,3,4,4]))

//kadans algo
//optimized
/*
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
*/

function maxSumArray(nums){
    let max = nums[0]
    let currSum = nums[0];
    for (let i=1;i<nums.length;i++){
        let sum1 = currSum + nums[i];
        let sum2 = nums[i]

        currSum = Math.max(sum1, sum2);
        max = Math.max(max, currSum);
    }
    return max
}

// console.log(maxSumArray([-2,1,-3,4,-1,2,1,-5,4]))
// console.log(maxSumArray([5,4,-1,7,8]))
// console.log(maxSumArray([1]))


//recursion
 //range of numbers

 function rangeOfNumers(start,end){
    if(end < start){
        return [];
    }else {
        let result = rangeOfNumers(start,end-1)
        result.push(end)
        return result
    }
 }
 console.log(rangeOfNumers(0,5))

// reverse a string

function revereString(str){
    if(str.length === 0){
        return ""
    }else{
        let reverserslt =  str[str.length-1];
        return reverserslt + revereString(str.slice(0,str.length-1))
    }
}

console.log(revereString("hello"))

//stack - LIFO

//the sky is blue

function reverseWords (s) {
    let newStr = s.split(" ")
    let stack = []

    for( let key of newStr){
        stack.push(key)
    }

    let finalStr = ""
    while(stack.length){
        let current = stack.pop();

        if(current)[
            finalStr += " " + current
        ]
    }
    return finalStr.trim()
};

console.log(reverseWords("the sky is blue"))

// bracket related
function isValidBrackets(str) {
    const stack = [];
    const bracketMap = {
        '}': '{',
        ']': '[',
        ')': '(',
    };

    for (let char of str) {
        // console.log(char)
        if (['{', '[', '('].includes(char)) {
            // If it's an opening bracket, push it onto the stack
            stack.push(char);
        } else if (['}', ']', ')'].includes(char)) {
            // If it's a closing bracket, check the top of the stack
            // console.log(stack)
            // console.log(bracketMap[char])
            if (stack.pop() !== bracketMap[char]) {
                return false; // Invalid if it doesn't match
            }
        }
        // console.log(stack)
    }
    // If the stack is empty, all brackets were matched
    return stack.length === 0;
}

// Example Usage
const input = "([])";
console.log(isValidBrackets(input))