function filter2(array, callback) {
  var filteredArray = [];
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
}
