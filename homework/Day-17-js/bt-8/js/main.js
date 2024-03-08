function S(N) {
    if (N === 1) {
        return 1;
    } else {
        return 1/N + S(N - 1);
    }
}

const result = S(200);
console.log("Giá trị của biểu thức S là: " + result);