function sortAscending(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

function insertNumber(arr, number, index) {
    arr.push(number);
    
    for (var i = arr.length - 1; i > index; i--) {
        var temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
    }
}

var arr = [5, 2, 9, 1, 7];

sortAscending(arr);
console.log("Mảng sau khi sắp xếp:", arr);

insertNumber(arr, 4, 2); 
console.log(" Mảng sau khi chèn số:", arr);
