let cart = [];

let products = [
  {
    id: 1,
    name: "men men",
    price: 20000,
    quantity: 20,
    category: "mon an dan toc Mong",
  },
  {
    id: 2,
    name: "mut",
    price: 80000,
    quantity: 21,
    category: "mon an dan toc Kinh",
  },
  {
    id: 3,
    name: "com lam",
    price: 40000,
    quantity: 15,
    category: "mon an dan toc Mong",
  },
  {
    id: 4,
    name: "banh dau xanh",
    price: 60000,
    quantity: 30,
    category: "mon an dan toc Kinh",
  },
];

let running = true;

function showProductByCategory(category) {
  if (!category.trim()) {
    console.log("Vui lòng nhập tên danh mục hợp lệ.");
    alert("Vui lòng nhập tên danh mục hợp lệ.");
    return;
  }

  console.log(`\nDanh mục: "${category}"`);
  let filtered = products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  if (filtered.length === 0) {
    console.log("Không có sản phẩm nào trong danh mục này.");
    alert("Không có sản phẩm nào trong danh mục này.");
  } else {
    let result = "Danh sách sản phẩm:\n";
    filtered.forEach((p) => {
      result += `${p.id}. ${p.name} - ${p.price} VND - SL: ${p.quantity}\n`;
    });
    console.log(result);
    alert(result);
  }
}

function buyProduct(id, quantity) {
  if (quantity <= 0) {
    console.log("Số lượng mua phải lớn hơn 0.");
    alert("Số lượng mua phải lớn hơn 0.");
    return;
  }

  let product = products.find((p) => p.id === id);
  if (!product) {
    console.log("Sản phẩm không tồn tại.");
    alert("Sản phẩm không tồn tại.");
    return;
  }

  if (product.quantity < quantity) {
    console.log("Không đủ số lượng sản phẩm trong kho.");
    alert("Không đủ số lượng sản phẩm trong kho.");
    return;
  }

  product.quantity -= quantity;

  let cartItem = cart.find((item) => item.id === id);
  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
    });
  }

  console.log("Đã thêm sản phẩm vào giỏ hàng.");
  alert("Đã thêm sản phẩm vào giỏ hàng.");
}

function sortProductByPrice(order) {
  let sorted = [...products];

  if (order === "asc") {
    sorted.sort((a, b) => a.price - b.price);
    console.log("Sản phẩm theo giá tăng dần:");
  } else if (order === "desc") {
    sorted.sort((a, b) => b.price - a.price);
    console.log("Sản phẩm theo giá giảm dần:");
  } else {
    console.log(
      "Thứ tự sắp xếp không hợp lệ. Vui lòng nhập 'asc' hoặc 'desc'."
    );
    alert("Thứ tự sắp xếp không hợp lệ. Vui lòng nhập 'asc' hoặc 'desc'.");
    return;
  }

  let result = "Danh sách sản phẩm:\n";
  sorted.forEach((p) => {
    result += `${p.id}. ${p.name} - ${p.price} VND - SL: ${p.quantity}\n`;
  });
  console.log(result);
  alert(result);
}

function calculateTotal() {
  if (cart.length === 0) {
    console.log("Giỏ hàng của bạn đang trống.");
    alert("Giỏ hàng của bạn đang trống.");
    return;
  }

  let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  console.log("Tổng tiền thanh toán:", total, "VND");
  alert("Tổng tiền thanh toán: " + total + " VND");
}

// === CHƯƠNG TRÌNH CHÍNH ===
while (running) {
  let choice = Number(
    prompt(
      `==== MENU ====
1. Hiển thị sản phẩm theo danh mục
2. Chọn sản phẩm để mua
3. Sắp xếp sản phẩm theo giá
4. Tính tiền thanh toán trong giỏ hàng
5. Thoát

Nhập lựa chọn (1-5):`
    )
  );

  switch (choice) {
    case 1:
      let cate = prompt("Nhập tên danh mục:").trim();
      showProductByCategory(cate);
      break;
    case 2:
      let id = Number(prompt("Nhập ID sản phẩm:"));
      let qty = Number(prompt("Nhập số lượng muốn mua:"));
      buyProduct(id, qty);
      break;
    case 3:
      let sortOrder = prompt("Nhập 'asc' để tăng, 'desc' để giảm:").trim();
      sortProductByPrice(sortOrder);
      break;
    case 4:
      calculateTotal();
      break;
    case 5:
      running = false;
      console.log("Đã thoát chương trình.");
      alert("Đã thoát chương trình.");
      break;
    default:
      console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");
      alert("Lựa chọn không hợp lệ. Vui lòng thử lại.");
  }
}
