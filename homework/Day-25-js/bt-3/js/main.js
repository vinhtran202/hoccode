function push2(array) {
  var elements = Array.prototype.slice.call(arguments, 1);
  var initialLength = array.length;
  var newLength = initialLength + elements.length;

  if (newLength > Number.MAX_SAFE_INTEGER) {
    console.error("Error: Array is too large to push2");
    return initialLength;
  }

  for (var i = 0; i < elements.length; i++) {
    array[initialLength + i] = elements[i];
  }

  return newLength;
}
