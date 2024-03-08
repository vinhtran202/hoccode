function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++)
        if (number % i === 0) return false;
    return true;
}

const n = 7;

if (isPrime(n)) console.log(n + " là số nguyên tố.");
else console.log(n + " không là số nguyên tố.");