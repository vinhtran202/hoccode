function removeDuplicates(arr) {
    var uniqueArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

var array = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6];

var result = removeDuplicates(array);

console.log("Mảng sau khi loại bỏ các phần tử trùng nhau:", result);
