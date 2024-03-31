Viết 1 hàm trả về 1 đối tượng có 3 thuộc tính: name, password và email.

Tạo một hàm register nhận vào nhiều tham số để khởi tạo ra một mảng chứa các đối tượng có cấu trúc như trên.

Yêu cầu:

Kiểm tra tất cả thông tin có đầy đủ không, nếu không đủ, báo lỗi và dừng chương trình.

Nếu đăng ký thêm một lần nữa, phải trả về được thông tin 2 người.

Tự động thêm role là user cho mỗi đối tượng.

Tạo một hàm login nhận vào 2 tham số email và password.

Yêu cầu:

Nếu thông tin hợp lệ với một trong các đối tượng đã đăng ký, trả về thông tin của đối tượng đó.

Nếu không, báo cho người dùng rằng “Thông tin đăng nhập không hợp lệ”.

Input:

const data = [];
const dataRegister = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
const dataRegister = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);
const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
Output:

data = [
  {
    name: "Nguyen Van A",
    password: "123456",
    email: "nguyenvana@email.com",
    role: "user",
  },
  {
    name: "Nguyen Van B",
    password: "1234567",
    email: "nguyenvanb@email.com",
    role: "user",
  },
];
dataLogin = {
  name: "Nguyen Van B",
  password: "1234567",
  email: "nguyenvanb@email.com",
  role: "user",
};