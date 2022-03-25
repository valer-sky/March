"use strict";
var SVGElem = document.getElementById("SSS");
SVGElem.classList.add('clockface');


var Circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
Circle.setAttribute("cx", 0);
Circle.setAttribute("cy", 0);
Circle.setAttribute("r", 155);
Circle.setAttribute("fill", "#fcca66");
Circle.setAttribute("stroke", "transparent");
Circle.setAttribute("stroke-width", 5);
Circle.setAttribute("pathlength", 60);
// Circle.setAttribute("stroke-dasharray", .1, .9);
Circle.setAttribute("stroke-dashoffset", .0,5);
SVGElem.appendChild(Circle);

// Create hand minute
var minute = document.createElementNS("http://www.w3.org/2000/svg", 'line');
minute.classList.add('hand__hand--minute');
minute.setAttribute("x1", 0);
minute.setAttribute("y1", 2);
minute.setAttribute("x2", 0);
minute.setAttribute("y2", -120);
minute.setAttribute("stroke", "black");
minute.setAttribute("stroke-linecap", "round");
minute.setAttribute("stroke-width", "5");
SVGElem.appendChild(minute);

 // Create hand hour
var hours = document.createElementNS("http://www.w3.org/2000/svg", 'line');
hours.classList.add('hand__hand--hour');
hours.setAttribute("x1", 0);
hours.setAttribute("y1", 2);
hours.setAttribute("x2", 0);
hours.setAttribute("y2", -60);
hours.setAttribute("stroke", "black");
hours.setAttribute("stroke-linecap", "round");
hours.setAttribute("stroke-width", "10");
// hours.setAttribute("z-index", -1);
SVGElem.appendChild(hours);

// Create hand second
var second = document.createElementNS("http://www.w3.org/2000/svg", 'line');
second.classList.add('hand__hand--second');
second.setAttribute("x1", 0);
second.setAttribute("y1", 25);
second.setAttribute("x2", 0);
second.setAttribute("y2", -150);
second.setAttribute("stroke", "black");
second.setAttribute("stroke-linecap", "round");
second.setAttribute("stroke-width", "2");
// second.setAttribute("z-index", -2);
SVGElem.appendChild(second);

// Create centre dot 
var centreDot = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
centreDot.classList.add('ring__ring--center');
centreDot.setAttribute("cx", 0);
centreDot.setAttribute("cy", 0);
centreDot.setAttribute("r", 3);
centreDot.setAttribute("fill", "transparent");
centreDot.setAttribute("stroke", "black");
centreDot.setAttribute("stroke-width", 10);
SVGElem.appendChild(centreDot);

// Create el.clock
var elClock = document.createElementNS("http://www.w3.org/2000/svg", 'text');
elClock.setAttribute("x", -60);
elClock.setAttribute("y", -66);
elClock.setAttribute("font-size", 35);
elClock.setAttribute("stroke-width", 15);
elClock.setAttribute("x", -60);
elClock.textContent = '00:00:00';
SVGElem.appendChild(elClock);

var num = 12;
var wrap = -19; // Размер часов для расположения картинок //19
var radius = 131; //133
var RadiusOfHour = "39"; //39
var ColorOfHour = "#48b382";
var TextLenHour = "15"; // 15
for (var i = num; i > 0; i--){

    var hour = document.createElementNS("http://www.w3.org/2000/svg",'circle');
    var text=document.createElementNS("http://www.w3.org/2000/svg",'text');


    text.appendChild(document.createTextNode(i));

    var f = 2 / num * i * Math.PI;
    var left = wrap + radius * Math.sin(f);
    var top = wrap - radius * Math.cos(f);
    hour.style.top=top;
    hour.style.left=left;

    hour.setAttribute( "cx", left + RadiusOfHour/2);
    hour.setAttribute( "cy", top + RadiusOfHour/2 );
    hour.setAttribute( "r", RadiusOfHour/2 );
    hour.setAttribute( "stroke", ColorOfHour );
    hour.setAttribute( "fill", ColorOfHour );
    text.setAttribute("textLength",TextLenHour);
    text.setAttribute("lengthAdjust","spacing");
    if (i>9){ //костыль на варавнивание текста :)

        text.setAttribute("x",left + RadiusOfHour/2-TextLenHour/2-2);
        text.setAttribute("y",top + RadiusOfHour/2 +TextLenHour/2 );
    } else {
        text.setAttribute("x",left + RadiusOfHour/2-TextLenHour/2+1);
        text.setAttribute("y",top + RadiusOfHour/2 +TextLenHour/2 );
    }
    SVGElem.appendChild(hour);
    SVGElem.appendChild(text);
}
// Logic
let UI = {
    time: elClock,
    second: second,
    minute: minute,
    hour: hours,
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