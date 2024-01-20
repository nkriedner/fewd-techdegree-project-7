// SELECT ELEMENTS
const closeX = document.querySelectorAll(".close-x");
const bellIcon = document.querySelector(".bell-icon svg");
const notifications = document.querySelector(".notifications");
const greenAlert = document.querySelector(".green-alert");

// EVENT LISTENERS
bellIcon.addEventListener("click", () => {
    notifications.style.display = "block";
    greenAlert.classList.remove("green-alert");
});
// Close-x button (deletes parent element on click)
for (let i = 0; i < closeX.length; i++) {
    closeX[i].addEventListener("click", () => {
        closeX[i].parentNode.style.display = "none";
    });
}
