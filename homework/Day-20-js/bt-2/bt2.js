function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function averagePrime(array) {
    var sum = 0;
    var count = 0;

  for (var i = 0; i < array.length; i++) {
    if (isPrime(array[i])) {
      sum += array[i];
      count++;
    }
  }

  if (count === 0) {
    console.log("Không có số nguyên tố");
  } else {
    console.log("Trung bình các số nguyên tố:", sum / count);
  }
}

var numbers = [4, 5, 8, 11, 13, 15];

averagePrime(numbers);
