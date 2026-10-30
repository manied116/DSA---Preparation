//palindrome - brute force method
// reverse method used
function isPalindrome(str){
  const reverseStr = str.split("").reverse().join("")
  return str === reverseStr
}

console.log(isPalindrome("mom"))
console.log(isPalindrome("momi"))

//not reverse method
function isPalindromeNotReverseMethod(str){
    const reverseStr = str.split("")
    let storeStr = "";
    for( let i = 0; i < reverseStr.length; i++ ){
        storeStr = reverseStr[i] + storeStr;
    }
        return str === storeStr
}


console.log(isPalindromeNotReverseMethod("mom"))
console.log(isPalindromeNotReverseMethod("momi"))


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

console.log(isPalindromeNumber(121));  // true
console.log(isPalindromeNumber(546));  // false


//========================================
//fibonacci
var fib = function(n) {
    let arr = [0,1]

    for(let i = 2; i <= n; i++){
        arr.push(arr[i-1] + arr[i-2])
    }
    return arr[n]
};

console.log(fib(10))

var fib1 = function(n) {
    if (n <= 1) return n
    return fib1(n-1) + fib1(n-2)
}

console.log(fib1(5))