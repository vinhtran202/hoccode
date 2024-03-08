var distance = 130;
var fee = totalCash(distance);

function totalCash(distance) {
    var fee = 0;
    for (let i = 1; i <= distance; i++) {
        if (i <= 1) {
            fee += 15000;
        } else if (i > 1 && i <= 5) {
            fee += 13500;
        } else {
            fee += 11000;
        }
    }
    if (distance > 120) {
        fee *= 0.9;
    }
    return fee;
}


console.log("Tổng tiền cước taxi là: " + fee + "đ");