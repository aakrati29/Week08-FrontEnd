function isPalindrome(num) {
    let original = num.toString();
    let reversed = original.split('').reverse().join('');
    return original === reversed;
}

let num1 = parseInt (process.argv[2]);
let num2 = parseInt (process.argv[3]);

console.log (`${num1} is Palindrome:`, isPalindrome(num1));
console.log (`${num2} is Palindrome:`, isPalindrome(num2));