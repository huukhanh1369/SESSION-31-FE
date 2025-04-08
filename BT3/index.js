let event1 = document.getElementById("green")
let event2 = document.getElementById("red")
let event3 = document.getElementById("purple")
event1.addEventListener("click",() => {
    document.body.style.backgroundColor = "green"
})
event2.addEventListener("click",() => {
    document.body.style.backgroundColor = "red"
})
event3.addEventListener("click",() => {
    document.body.style.backgroundColor = "magenta"
})