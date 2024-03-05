var a = 100 ; 
var b = 2000 ; 
var c = 7 ; 

var total = [a, b, c] ; 
total.sort(function(a,b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});
console.log(total);