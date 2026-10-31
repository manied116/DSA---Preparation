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

console.log(maxProfit([7,5,1,3,6,4]))