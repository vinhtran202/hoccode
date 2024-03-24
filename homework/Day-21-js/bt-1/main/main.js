var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
var result = [];

for(var i = 0; i <= arrA.length; i++){
    if ( arrB.includes(arrA[i])) {
        result.push(arrA[i])
    }
}

console.log(`Kết quả giao giữa 2 mảng là ${result}`);