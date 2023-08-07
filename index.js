const minElement = document.querySelector('[data-min]')
const secElement = document.querySelector('[data-sec]')
const miliElement = document.querySelector('[data-mili]')


const oparations = document.querySelectorAll(`[data-oparation]`)


const date = new Date();

const resetTime = () => {
    date.setHours(0, 0, 0, 0);
};

resetTime();


const formatTime = (time = 0, length = 2) => {
    return time.toString().padStart(length, '0');
};

const getTimeString = (date) => {

    const milliseconds = date.getMilliseconds();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();

    return [formatTime(minutes), formatTime(seconds), formatTime(milliseconds, 3)];
};

const updateDisplay = () => {
    const [minute, second, milisecond] = getTimeString(date);

    minElement.textContent = minute;
    secElement.textContent = second;
    miliElement.textContent = milisecond;
};

const startInterval = () => {

    return setInterval(() => {
        const milisec = date.getMilliseconds();
        date.setMilliseconds(milisec + 1);

        updateDisplay();

    }, 1);
};

// Stopwatch Control Function
let intervalId = undefined;
function controlStopwatch(buttonName) {
    switch (buttonName) {
        case 'pause':
            clearInterval(intervalId);
            break;
        case 'reset':
            clearInterval(intervalId);
            resetTime();
            updateDisplay();
            break;
        case 'start':
            intervalId = startInterval();
            break;
    }
}



oparations.forEach(button => button.addEventListener('click', () => {
    controlStopwatch(button.textContent)
}))