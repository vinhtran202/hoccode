var a = 5;
var b = 9; 
var c = 100; 

var findMax = [a, b, c];
findMax.sort(function(a, b) {
  return b - a;
});

console.log("max= ",findMax[0]);