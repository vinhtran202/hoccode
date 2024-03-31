function createCustomer(name, age, address) {
  return { name, age, address };
}

function createCustomers(customers) {
  var sortedCustomers = sortCustomers(customers);
  return sortedCustomers.map((customer) => {
    var shortName = getShortName(customer.name);
    return { ...customer, shortName };
  });
}

function sortCustomers(customers) {
  return customers.slice().sort((a, b) => a.age - b.age);
}

function getShortName(fullName) {
  var nameParts = fullName.split(" ");
  return "Nguyễn " + nameParts[nameParts.length - 1].charAt(0).toUpperCase();
}

var customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

var result = createCustomers(customers);
console.log(result);
