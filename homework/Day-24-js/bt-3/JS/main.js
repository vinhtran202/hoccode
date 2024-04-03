function convertToNestedArray(flatArray) {
  var map = {};
  var nestedArray = [];

  for (var i = 0; i < flatArray.length; i++) {
    var currentNode = flatArray[i];
    var node = { id: currentNode.id, name: currentNode.name };
    if (currentNode.parent === 0) {
      nestedArray.push(node);
    }
    map[currentNode.id] = node;
  }
  for (var i = 0; i < flatArray.length; i++) {
    var currentNode = flatArray[i];
    var parentNode = map[currentNode.parent];
    if (parentNode && currentNode.parent !== 0) {
      if (!parentNode.children) {
        parentNode.children = [];
      }
      parentNode.children.push(map[currentNode.id]);
    }
  }

  return nestedArray;
}

var flatArray = [
  { id: 1, name: "Chuyên mục 1", parent: 0 },
  { id: 2, name: "Chuyên mục 2", parent: 0 },
  { id: 3, name: "Chuyên mục 3", parent: 0 },
  { id: 4, name: "Chuyên mục 2.1", parent: 2 },
  { id: 5, name: "Chuyên mục 2.2", parent: 2 },
  { id: 6, name: "Chuyên mục 2.3", parent: 2 },
  { id: 7, name: "Chuyên mục 3.1", parent: 3 },
  { id: 8, name: "Chuyên mục 3.2", parent: 3 },
  { id: 9, name: "Chuyên mục 3.3", parent: 3 },
  { id: 10, name: "Chuyên mục 2.2.1", parent: 5 },
  { id: 11, name: "Chuyên mục 2.2.2", parent: 5 },
];

var nestedArray = convertToNestedArray(flatArray);
console.log(nestedArray);
