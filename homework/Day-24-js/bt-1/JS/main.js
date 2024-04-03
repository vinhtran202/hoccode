function calculateTotal(...numbers) {
  var total = 0;
  var errorMessage = "Dữ liệu truyền vào không hợp lệ";

  for (var i = 0; i < numbers.length; i++) {
    var currentNumber = numbers[i];

    if (typeof currentNumber !== "number") {
      return errorMessage;
    }

    total += currentNumber;
  }

  return total;
}

console.log(calculateTotal(5, "abc", 10));
