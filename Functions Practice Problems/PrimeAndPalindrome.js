function isPrime(n) {
    
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }

    return true;
}

function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

let num = parseInt(process.argv[2]);

if (isPrime(num)) {
    let palindromeNum = getPalindrome (num);
    console.log (`${num} is Prime`);
    console.log (`Palindrome of ${num} is ${palindromeNum}`);
    console.log (`${palindromeNum} is Prime:`, isPrime(palindromeNum));
} 

else {
    console.log(`${num} is NOT a Prime Number`);
}