// SELECT ELEMENTS
const closeX = document.querySelector(".close-x");
const alertMessage = document.querySelector(".alert-message");

// EVENT LISTENERS
closeX.addEventListener("click", () => {
    alertMessage.style.display = "none";
});
