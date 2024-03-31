function createUser(name, password, email) {
  return { name, password, email, role: "user" };
}

function register(name, password, email) {
  if (!name || !password || !email) {
    console.log("Thông tin đăng ký không đầy đủ.");
    return;
  }

  var existEmail = data.some((user) => user.email === email);
  if (existEmail) {
    console.log("Email đã tồn tại.");
    return;
  }

  var newUser = createUser(name, password, email);
  data.push(newUser);
}

function login(email, password) {
  var user = data.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    return user;
  } else {
    console.log("Thông tin đăng nhập không hợp lệ.");
  }
}

var data = [];

register("Nguyen Van A", "123456", "nguyenvana@email.com");
register("Nguyen Van B", "1234567", "nguyenvanb@email.com");

var dataLogin = login("nguyenvanb@email.com", "1234567");
console.log(data);
console.log(dataLogin);
