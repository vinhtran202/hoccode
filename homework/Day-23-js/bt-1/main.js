var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};

function getError(field) {
  var keys = field.split(".");
  var currentErrors = errors[keys[0]];
  if (!currentErrors) {
    return "Vui lòng nhập " + keys[0];
  }

  for (var i = 1; i < keys.length; i++) {
    var key = keys[i];
    if (currentErrors[key]) {
      return currentErrors[key];
    }
  }

  return currentErrors.required || "Vui lòng nhập " + keys[0];
}

console.log(getError("name"));
