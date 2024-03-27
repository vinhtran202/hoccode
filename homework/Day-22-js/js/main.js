function isPrime(n) {
    if (n <= 1) {
        return false
    } ;
    if (n <= 3){
        return true
    } ;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (var i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function isPalindrome(n) {
    const arr = n.toString();
    const len = arr.length;
    for (var i = 0; i < len / 2; i++) {
        if (arr[i] !== arr[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function nextPalindromePrime(x) {
    let n = x + 1;
    while (true) {
        if (isPrime(n) && isPalindrome(n)) {
            return n;
        }
        n++;
    }
}

const n = 11;
console.log(nextPalindromePrime(n));

