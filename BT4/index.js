const openBtn = document.querySelector("#openModalBtn");
const closeBtn = document.querySelector("#closeModalBtn");
const overlay = document.querySelector("#modalOverlay");

openBtn.addEventListener("click", () => {
    overlay.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
});