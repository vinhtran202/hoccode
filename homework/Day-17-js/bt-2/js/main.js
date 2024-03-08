var quantity = 256  ;
var fee=totalkwh(quantity);
function totalkwh(quantity) {
    var fee = 0;
    if (quantity <= 50) {
        fee = quantity * 1.678;
    }
    else if (quantity <= 100) {
        fee = quantity * 1.678 + (quantity - 50 ) * 1734;
    }
    else if (quantity <= 200) {
        fee = quantity * 1678 + 50 * 1734 + (quantity - 100)*2014;
    }
    else if (quantity <= 300) {
        fee = quantity * 1678 + 50 * 1734 + 100*2014 + (quantity-200)*2536;
    }
    else if (quantity <= 400) {
        fee = quantity * 1678 + 50 * 1734 + 100*2014 + 100*2536 + (quantity-300)*2834;
    }
    else if (quantity <= 500) {
        fee = quantity * 1678 + 50 * 1734 + 100*2014 + 100*2536 + 100*2834 + (quantity-400)*2927;
    }
    return fee
}

console.log(`Tổng số tiền điện phải đóng cho ${quantity} kWh là: ${fee} VND`);


