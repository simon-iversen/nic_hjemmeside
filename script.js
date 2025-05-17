const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");
const closeModal = document.getElementById("closeModal");

contactBtn.addEventListener("click", () => {
    contactModal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
    contactModal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
    if (e.target === contactModal) {
        contactModal.classList.add("hidden");
    }
});