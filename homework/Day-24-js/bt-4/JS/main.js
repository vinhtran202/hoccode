Array.prototype.reduce2 = function (callback, initialValue) {
  if (this.length === 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  var accumulator;
  if (initialValue !== undefined) {
    accumulator = initialValue;
  } else {
    accumulator = this[0];
  }

  var startIndex;
  if (initialValue !== undefined) {
    startIndex = 0;
  } else {
    startIndex = 1;
  }

  for (var i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce2(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);
