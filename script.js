// Tab Switching
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
}

// Chart Data
document.addEventListener("DOMContentLoaded", function () {
    const ctx1 = document.getElementById('heartRateChart').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ["10 AM", "11 AM", "12 PM", "1 PM"],
            datasets: [{
                label: "Heart Rate",
                data: [70, 75, 72, 80],
                borderColor: "red",
                fill: false
            }]
        }
    });

    const ctx2 = document.getElementById('alcoholChart').getContext('2d');
    new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ["Safe", "Warning", "Danger"],
            datasets: [{
                data: [80, 15, 5],
                backgroundColor: ["green", "yellow", "red"]
            }]
        }
    });

    // Fetch Daily Tips
    fetchDailyTip();
});

// Dummy Daily Tips
function fetchDailyTip() {
    const tips = [
        "Always check your mirrors before switching lanes.",
        "Maintain a safe following distance from other vehicles.",
        "Avoid distractions like mobile phones while driving."
    ];
    document.getElementById('dailyTip').innerText = tips[Math.floor(Math.random() * tips.length)];
}
