// SELECT ELEMENTS
const closeX = document.querySelectorAll(".close-x");
const bellIcon = document.querySelector(".bell-icon svg");
const notifications = document.querySelector(".notifications");
const greenAlert = document.querySelector(".green-alert");
const trafficPeriods = document.querySelector(".traffic ul");

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
// Traffic perios event handlers
trafficPeriods.addEventListener("click", (e) => {
    // Loop through li elements and remove all 'selected' class
    const trafficPeriodsList = document.querySelectorAll(".traffic li");
    for (let i = 0; i < trafficPeriodsList.length; i++) {
        trafficPeriodsList[i].classList = "";
    }
    // Add 'selected' class to selected li element
    e.target.className = "selected";
    // Update chart data
    if (e.target.innerText == "Daily") {
        updateChart(myChart, dailyTraffic);
    } else if (e.target.innerText == "Weekly") {
        updateChart(myChart, weeklyTraffic);
    } else if (e.target.innerText == "Hourly") {
        updateChart(myChart, hourlyTraffic);
    } else if (e.target.innerText == "Monthly") {
        updateChart(myChart, monthlyTraffic);
    }
});

// CODE FOR USING CHART.JS
const ctx = document.getElementById("traffic-chart").getContext("2d");

const hourlyTraffic = {
    labels: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"],
    datasets: [
        {
            data: [25, 30, 15, 35, 20, 45, 20, 15, 35, 15, 20],
            label: "Hourly Traffic",
            fill: true,
            backgroundColor: "#c1c1db",
        },
    ],
};
const dailyTraffic = {
    labels: ["Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
        {
            data: [225, 350, 300, 150, 250, 450, 300, 250, 400, 350, 200],
            label: "Daily Traffic",
            fill: true,
            backgroundColor: "#c1c1db",
        },
    ],
};
const weeklyTraffic = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [
        {
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1750, 2250, 1500, 2500],
            label: "Weekly Traffic",
            fill: true,
            backgroundColor: "#c1c1db",
        },
    ],
};
const monthlyTraffic = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            data: [5000, 3250, 4500, 8800, 6500, 7150, 5300, 4550, 8050, 8700, 4200],
            label: "Monthly Traffic",
            fill: true,
            backgroundColor: "#c1c1db",
        },
    ],
};
const config = {
    type: "line",
    // data: weeklyTraffic,
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [
            {
                data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1750, 2250, 1500, 2500],
                label: "Weekly Traffic",
                fill: true,
                backgroundColor: "#c1c1db",
            },
        ],
    },
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

const updateChart = (chart, newData) => {
    chart.data.labels = newData.labels;
    chart.data.datasets[0].data = newData.datasets[0].data;
    chart.update();
};
