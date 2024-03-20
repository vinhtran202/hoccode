function findMinMax(arr) {
    var max = arr[0];
    var min = arr[0];
    var maxIndex = 0;
    var minIndex = 0;
    if(arr.length === 0){
        console.log("clear men !");
        return;
    }
    for (var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
            maxIndex = i;
        }
        if(arr[i] < min){
            min = arr[i];
            minIndex = i;
        }

    }

    console.log(`Số lớn nhất là ${max} ở tại vị trí ${maxIndex}`);
    console.log(`Số nhỏ nhất là ${min} ở tại vị trí ${minIndex}`);
}

var arr = [100, 200, 13, 8, 3, 9999, 4];
findMinMax(arr);