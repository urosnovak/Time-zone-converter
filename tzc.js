function updateTime() {
    const localTimeElement = document.getElementById("localTime");
    const parisTimeElement = document.getElementById("parisTime");
    const selectedTimezone = document.getElementById("timezoneSelect").value;

    let timezone = selectedTimezone;
    if (timezone === "local") {
        timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    }

    const optionsLocal = { timeZone: timezone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const localTime = new Intl.DateTimeFormat('en-US', optionsLocal).format(new Date());
    localTimeElement.innerHTML = localTime;

    const optionsParis = { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const parisTime = new Intl.DateTimeFormat('en-US', optionsParis).format(new Date());
    parisTimeElement.innerHTML = parisTime;
}

updateTime();

setInterval(updateTime, 1000);

document.getElementById("timezoneSelect").addEventListener("change", updateTime);