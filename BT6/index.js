const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "huanrose@gmail.com" && password === "123456") {
        console.log("Đăng nhập thành công");
    } else {
        console.log("Đăng nhập thất bại");
    }
});