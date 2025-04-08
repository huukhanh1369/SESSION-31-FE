let event1 = document.getElementById("hide");
let event2 = document.getElementById("Show");
let event3 = document.getElementById("text");

event2.addEventListener("click",() => {
    event3.style.display = "block"
})
event1.addEventListener("click",() => {
    event3.style.display = "none"
})

