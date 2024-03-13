function reverseNumber(number) {
    let reversed = 0;
  
    while (number > 0) {
      reversed = reversed * 10 + (number % 10);
      number = Math.floor(number / 10);
    }
  
    return reversed;
  }
  
  const numToReverse = 12345;
  const reversedResult = reverseNumber(numToReverse);
  
  console.log(`Sau khi đảo ngược số ${numToReverse}, kết quả là: ${reversedResult}`);
  