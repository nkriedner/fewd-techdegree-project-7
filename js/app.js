// SELECT ELEMENTS
const closeX = document.querySelectorAll(".close-x");

// EVENT LISTENERS
// Delete parent element of close-x on click
for (let i = 0; i < closeX.length; i++) {
    closeX[i].addEventListener("click", () => {
        closeX[i].parentNode.style.display = "none";
    });
}
