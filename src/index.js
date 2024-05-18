// Self explanatory, got some parts from stackoverflow ans w3schools
function getCurrentTime(timezone) { 
    const date = new Date().toLocaleString("en-US", { timeZone: timezone });
    return new Date(date);
}

// Function to format time
function formatTime(date) {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    return date.toLocaleString('en-US', options);
}

const timePh = document.querySelector('#timePh');
const timeJp = document.querySelector('#timeJp');
const timeUs = document.querySelector('#timeUs');

setInterval(() => { // reference: https://www.w3schools.com/jsref/met_win_setinterval.asp 
    const currentTimePh = getCurrentTime('Asia/Manila');
    const currentTimeJp = getCurrentTime('Asia/Tokyo');
    const currentTimeUs = getCurrentTime('America/New_York');

    timePh.textContent = `Philippines: ${formatTime(currentTimePh)}`;
    timeJp.textContent = `Japan: ${formatTime(currentTimeJp)}`;
    timeUs.textContent = `US (New York): ${formatTime(currentTimeUs)}`;
}, 1000);