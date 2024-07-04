document.addEventListener('DOMContentLoaded', () => {
    // Function to update current time and day
    const updateTime = () => {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4]; // Get UTC time in HH:MM:SS format
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const day = daysOfWeek[now.getUTCDay()];

        document.getElementById('currentTimeUTC').textContent = utcTime;
        document.getElementById('currentDay').textContent = day;
    };

    // Update time immediately and then every second
    updateTime();
    setInterval(updateTime, 1000);
});
