"use strict";

let UI = {
    time: document.querySelector('.time'),
    second: document.querySelector('.hand--second'),
    minute: document.querySelector('.hand--minute'),
    hour: document.querySelector('.hand--hour'),
};
function getZero(num) {  // Функия на добовления нуля в электронные часы
    if(num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}
function updateClock(){
    // GETTING TIME
    let now = new Date();
    let seconds = (now.getSeconds() + now.getMilliseconds() / 1000) / 60 * 360;
    let minutes = (now.getMinutes() + now.getSeconds() / 60) / 60 * 360;
    let hours = (now.getHours(0) + now.getMinutes() / 60) / 12 * 360;
    let time = `${getZero(now.getHours())}:${getZero(now.getMinutes())}:${getZero(now.getSeconds())}`;
    // UI Update
    UI.time.textContent = time;
    UI.second.style.transform = `rotate(${seconds}deg)`;
    UI.minute.style.transform = `rotate(${minutes}deg)`;
    UI.hour.style.transform = `rotate(${hours}deg)`;
    requestAnimationFrame(updateClock);
}
    requestAnimationFrame(updateClock);
