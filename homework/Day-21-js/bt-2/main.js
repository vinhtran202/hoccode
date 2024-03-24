var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var result = [] ;
for( var i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
        result.push(...arr[i]);
    } else {
        result.push(arr[i]);
    }
}
console.log(` Mảng sau khi được làm phẳng ${result}`);