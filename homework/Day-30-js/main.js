var product_data = [
  {
    product_id: 1,
    product_name: "Sản phẩm 1",
    product_price: 1000,
  },
  {
    product_id: 2,
    product_name: "Sản phẩm 2",
    product_price: 2000,
  },
  {
    product_id: 3,
    product_name: "Sản phẩm 3",
    product_price: 3000,
  },
  {
    product_id: 4,
    product_name: "Sản phẩm 3",
    product_price: 4000,
  },
];

var count = 0;
product_data.forEach(function (item) {
  count++;
  var product_item = "<tr>";
  product_item += "<td>" + count + "</td>";
  product_item += "<td>" + item.product_name + "</td>";
  product_item += "<td>" + item.product_price + "</td>";
  product_item +=
    '<td><input type="number" id="quantity_' +
    item.product_id +
    '" value="1" style="width: 90%; display: block; margin: 0 auto;"><button type="button" style="width: 100%;" id="add_to_cart_' +
    item.product_id +
    '">Thêm vào giỏ</button></td>';
  product_item += "</tr>";
  document.querySelector("#product_table").innerHTML += product_item;
});

var add_to_cart = document.querySelectorAll("#product_table button");
if (add_to_cart.length > 0) {
  for (var i = 0; i < add_to_cart.length; i++) {
    add_to_cart[i].onclick = function () {
      var quantity_id = this.parentElement.querySelector("input").id;
      var product_id = quantity_id.replace("quantity_", "");

      product_id = parseInt(product_id);

      var quantity_value = document.querySelector("#" + quantity_id).value;
      if (quantity_value < 1) {
        quantity_value = 1;
      }

      var cart_data = sessionStorage.getItem("cart");
      cart_data = JSON.parse(cart_data);
      if (cart_data == null) {
        cart_data = [];
        var cart_object = {
          product_id: product_id,
          quantity: quantity_value,
        };

        cart_data.push(cart_object);
      } else {
        var check = false;
        cart_data.forEach(function (cart_item, cart_key) {
          if (product_id == cart_item.product_id) {
            var current_quantity = parseInt(cart_item.quantity);
            current_quantity += parseInt(quantity_value);
            cart_data[cart_key] = {
              product_id: product_id,
              quantity: current_quantity,
            };
            check = true;
          }
        });

        if (check == false) {
          var cart_object = {
            product_id: product_id,
            quantity: quantity_value,
          };
          cart_data.push(cart_object);
        }
      }

      var cart_json = JSON.stringify(cart_data);

      sessionStorage.setItem("cart", cart_json);

      renderCart();
    };
  }
}

function get_product(id) {
  var result;
  product_data.forEach(function (data) {
    if (data.product_id == id) {
      result = data;
    }
  });

  return result;
}

function renderCart() {
  var cart_data = sessionStorage.getItem("cart");
  cart_data = JSON.parse(cart_data);
  if (cart_data !== null && cart_data.length > 0) {
    var cart_table = `<table cellpadding="0" cellspacing="0" width="100%" border="1" id="cart_table">
  <thead>
      <tr>
          <th width="5%">STT</th>
          <th>Tên sản phẩm</th>
          <th width="20%">Giá</th>
          <th width="20%">Số lượng</th>
          <th width="20%">Thành tiền</th>
          <th width="5%">Xoá</th>
      </tr>
  </thead>
  <tbody>
      
  </tbody>
  </table><hr/>
  <button type="button" id="update_cart">Cập nhật giỏ hàng</button>
  <button type="button" id="delete_cart">Xoá giỏ hàng</button>
  `;

    document.querySelector("#cart_data").innerHTML = cart_table;
    var count = 0;
    var total_quantity = 0;
    var total_amount = 0;
    cart_data.forEach(function (cart_item) {
      count++;

      var detail = get_product(cart_item.product_id);

      var amout = parseInt(detail.product_price) * parseInt(cart_item.quantity);
      total_amount += parseInt(amout);
      total_quantity += parseInt(cart_item.quantity);
      var tr_html =
        `<tr>
              <td>` +
        count +
        `</td>
              <td>` +
        detail.product_name +
        `</td>
              <td>` +
        detail.product_price +
        `</td>
              <td><input type="number" class="quantity" data-id="` +
        cart_item.product_id +
        `" value="` +
        cart_item.quantity +
        `"></td>
              <td>` +
        amout +
        `</td>
              <td><button type="button" class="delete-item">Xoá</button></td>
          </tr>`;

      document.querySelector("#cart_table").innerHTML += tr_html;
    });

    if (count > 0) {
      var last_tr =
        `<tr>
              <td colspan="3">Tổng</td>
              <td>` +
        total_quantity +
        `</td>
              <td colspan="2">` +
        total_amount +
        `</td>
          </tr>`;

      document.querySelector("#cart_table").innerHTML += last_tr;
    }

    updateCart();

    deleteCart();

    deleteAll();
  } else {
    document.querySelector("#cart_data").innerHTML =
      "Giỏ hàng không có sản phẩm";
  }
}

function updateCart() {
  document.querySelector("#cart_data #update_cart").onclick = function () {
    var cart_arr = document.querySelectorAll("#cart_table tbody .quantity");
    if (cart_arr !== null && cart_arr.length > 0) {
      cart_arr.forEach(function (cart_item) {
        var quantity_value = parseInt(cart_item.value);
        var product_id = parseInt(cart_item.getAttribute("data-id"));

        var cart_data = sessionStorage.getItem("cart");
        cart_data = JSON.parse(cart_data);

        cart_data.forEach(function (value, key) {
          if (product_id == value.product_id) {
            if (quantity_value > 0) {
              cart_data[key] = {
                product_id: product_id,
                quantity: parseInt(quantity_value),
              };
            } else {
              cart_data.splice(key, 1);
            }
          }
        });

        var cart_json = JSON.stringify(cart_data);

        sessionStorage.setItem("cart", cart_json);
      });

      alert("Cập nhật giỏ hàng thành công");

      renderCart();
    }
  };
}

function deleteCart() {
  document.querySelectorAll(".delete-item").forEach(function (del_item) {
    del_item.onclick = function () {
      if (confirm("Are you sure?")) {
        var product_id = this.parentElement.parentElement
          .querySelector(".quantity")
          .getAttribute("data-id");
        product_id = parseInt(product_id);

        var cart_data = sessionStorage.getItem("cart");

        cart_data = JSON.parse(cart_data);

        cart_data.forEach(function (value, key) {
          if (product_id == value.product_id) {
            cart_data.splice(key, 1);
          }
        });

        var cart_json = JSON.stringify(cart_data);

        sessionStorage.setItem("cart", cart_json);
        alert("Xoá sản phẩm thành công");
        renderCart();
      }
    };
  });
}

function deleteAll() {
  document.querySelector("#delete_cart").onclick = function () {
    if (confirm("Are you sure?")) {
      sessionStorage.removeItem("cart");
      alert("Xoá giỏ hàng thành công");
      renderCart();
    }
  };
}

renderCart();
