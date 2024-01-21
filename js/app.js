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

// CODE FOR USING CHART.JS
const ctx = document.getElementById("traffic-chart").getContext("2d");

const labels = ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"];

const data = {
    labels,
    datasets: [
        {
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1750, 2250, 1500, 2500],
            label: "Traffic",
            fill: true,
            backgroundColor: "#c1c1db",
        },
    ],
};

const config = {
    type: "line",
    data: data,
    options: {
        tension: 0.4, // creates curvy lines
        responsive: true,
        plugins: {
            legend: {
                display: false, // removes chart label
            },
        },
    },
};

const myChart = new Chart(ctx, config);
