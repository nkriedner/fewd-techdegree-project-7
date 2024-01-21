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
        updateChart(trafficChart, trafficDaily);
    } else if (e.target.innerText == "Weekly") {
        updateChart(trafficChart, trafficWeekly);
    } else if (e.target.innerText == "Hourly") {
        updateChart(trafficChart, trafficHourly);
    } else if (e.target.innerText == "Monthly") {
        updateChart(trafficChart, trafficMonthly);
    }
});

// CODE FOR USING CHART.JS
const trafficCtx = document.getElementById("traffic-chart").getContext("2d");
const dailyTrafficCtx = document.getElementById("daily-traffic-chart").getContext("2d");
const mobileUsersCtx = document.getElementById("mobile-users-chart").getContext("2d");

const trafficHourly = {
    labels: ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"],
    datasets: [
        {
            data: [25, 30, 15, 35, 20, 45, 20, 15, 35, 15, 20],
            label: "Traffic (Hourly)",
            fill: true,
            backgroundColor: "#c1c1db",
        },
    ],
};
const trafficDaily = {
    labels: ["Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
        {
            data: [225, 350, 300, 150, 250, 450, 300, 250, 400, 350, 200],
            label: "Traffic (Daily)",
            fill: true,
            backgroundColor: "#c1c1db",
        },
    ],
};
const trafficWeekly = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [
        {
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1750, 2250, 1500, 2500],
            label: "Traffic (Weekly)",
            fill: true,
            backgroundColor: "#c1c1db",
        },
    ],
};
const trafficMonthly = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            data: [5000, 3250, 4500, 8800, 6500, 7150, 5300, 4550, 8050, 8700, 4200],
            label: "Traffic (Monthly)",
            fill: true,
            backgroundColor: "#c1c1db",
        },
    ],
};
const dailyTraffic = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
        {
            data: [75, 115, 175, 125, 225, 200, 100],
            label: "Daily Traffic",
            fill: true,
            backgroundColor: "#c1c1db",
        },
    ],
};
const trafficConfig = {
    type: "line",
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [
            {
                data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1750, 2250, 1500, 2500],
                label: "Traffic (Weekly)",
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
const dailyTrafficConfig = {
    type: "bar",
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [
            {
                data: [75, 115, 175, 125, 225, 200, 100],
                label: "Daily Traffic",
                fill: true,
                backgroundColor: "#7979de",
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
const mobileUsersConfig = {
    type: "doughnut",
    data: {
        labels: ["Desktop", "Tablet", "Phones"],
        datasets: [
            {
                data: [60, 20, 20],
                label: "# of Users",
                // label: "Mobile Users",
                borderWidth: 0,
                fill: true,
                backgroundColor: ["#7979de", "#71b971", "#00bcd4"],
            },
        ],
    },
    options: {
        tension: 0.4, // creates curvy lines
        responsive: true,
        plugins: {
            legend: {
                display: true, // shows chart label
                position: "right",
            },
        },
    },
};

const trafficChart = new Chart(trafficCtx, trafficConfig);
const dailyTrafficChart = new Chart(dailyTrafficCtx, dailyTrafficConfig);
const mobileUsersChart = new Chart(mobileUsersCtx, mobileUsersConfig);

const updateChart = (chart, newData) => {
    chart.data.labels = newData.labels;
    chart.data.datasets[0].data = newData.datasets[0].data;
    chart.update();
};
