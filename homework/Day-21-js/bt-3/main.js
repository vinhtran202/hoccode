var arr = [["a", 1, true], ["b", 2, false]];
var sArr = [];
var nArr = [];
var bArr = [];
arr.forEach(function(inside){
    inside.forEach(function(element){
        if(typeof element === 'string') {
            sArr.push(element);
        } else if(typeof element === 'number') {
            nArr.push(element);
        } else if(typeof element === 'boolean') {
            bArr.push(element);
        }
    })
})
var resuil = [sArr, nArr, bArr];
console.log(resuil);