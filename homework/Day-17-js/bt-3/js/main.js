var n = 5;
var total = S(n);

function S(n) {
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total += i * (i + 1);
    }

    return total;
}

console.log("Giá trị của biểu thức S là: " + total);


