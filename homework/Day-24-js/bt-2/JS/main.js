Number.prototype.getCurrency = function (currencyUnit) {
  var value = this.valueOf();
  if (isNaN(value)) {
    return "Không phải số";
  }

  var formattedValue = value.toLocaleString();

  return formattedValue + " " + currencyUnit;
};

var price1 = 12000;
console.log(price1.getCurrency("đ"));
var price2 = 12000000;
console.log(price2.getCurrency("đ"));
