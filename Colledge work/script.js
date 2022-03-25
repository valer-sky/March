"use strict";

let UI = {
    time: document.querySelector('.time'),
    second: document.querySelector('.hand--second'),
    minute: document.querySelector('.hand--minute'),
    hour: document.querySelector('.hand--hour'),
};

function updateClock(){
    // GETTING TIME
    let now = new Date();
    let seconds = (now.getSeconds() + now.getMilliseconds() / 1000) / 60 * 360;
    let minutes = (now.getMinutes() + now.getSeconds() / 60) / 60 * 360;
    let hours = (now.getHours(0) + now.getMinutes() / 60) / 12 * 360;
    let time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    // UI Update
    UI.time.textContent = time;
    UI.second.style.transform = `rotate(${seconds}deg)`;
    UI.minute.style.transform = `rotate(${minutes}deg)`;
    UI.hour.style.transform = `rotate(${hours}deg)`;
    requestAnimationFrame(updateClock);
}
    requestAnimationFrame(updateClock);
