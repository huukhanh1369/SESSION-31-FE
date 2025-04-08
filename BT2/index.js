let event1 = document.getElementById("switch");
let check = 1;

event1.addEventListener("click", () => {
    if (check === 1) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        check = 2;
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        check = 1;
    }
});
