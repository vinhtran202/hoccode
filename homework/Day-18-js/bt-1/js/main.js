function fibonacciRecursive(n, a = 0, b = 1, result = []) {
    if (n > 0) {
      result.push(a);
      fibonacciRecursive(n - 1, b, a + b, result);
    }
    return result;
  }
  
  var nFibonacci = 20;
  var fibonacciSeries = fibonacciRecursive(nFibonacci);
  
  console.log(`Dãy Fibonacci gồm ${nFibonacci} số: ${fibonacciSeries.join(', ')}`);
  