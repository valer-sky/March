"use strict";
function updateClock(){

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.strokeRect(0,0,canvas.width, canvas.height);
	
//Расчет координат центра и радиуса часов
var radiusClock = canvas.width/2 - 10;
var xCenterClock = canvas.width/2;
var yCenterClock = canvas.height/2;
	
//Очистка экрана. 
context.fillStyle = "#ffffff";
context.fillRect(0,0,canvas.width,canvas.height);
	
//Рисуем контур часов
context.fillStyle =  "#fcca66";
context.beginPath();
context.arc(xCenterClock, yCenterClock, radiusClock, 0,Math.PI*2, true);
context.moveTo(xCenterClock, yCenterClock);
context.fill();
context.closePath();

//Рисуем рисочки часов
var radiusNum = radiusClock - 27; //Радиус расположения рисочек	
var radiusPoint;
for(var tm = 0; tm < 60; tm++){
  context.beginPath();
  if(tm % 5 == 0) {
      radiusPoint = 22;
    }else { 
    radiusPoint = 0;
} //для выделения часовых рисочек
  var xPointM = xCenterClock + radiusNum * Math.cos(-6*tm*(Math.PI/180) + Math.PI/2);
  var yPointM = yCenterClock - radiusNum * Math.sin(-6*tm*(Math.PI/180) + Math.PI/2);
  context.arc(xPointM, yPointM, radiusPoint, 0, 2*Math.PI, true);
  context.fillStyle = '#48b382';
  context.fill();
  
  context.closePath();
} 

//Оцифровка циферблата часов
for(var th = 1; th <= 12; th++){
	context.beginPath();
    context.font = 'normal 17px Arial';
    
	var xText = xCenterClock + radiusNum * Math.cos(-30*th*(Math.PI/180) + Math.PI/2);  
	var yText = yCenterClock - radiusNum * Math.sin(-30*th*(Math.PI/180) + Math.PI/2);
	if(th <= 9){      // расположение часов в кружлчках
		context.strokeText(th, xText - 5 , yText + 7);
	}else{
		context.strokeText(th, xText - 12 , yText + 7);
	}
     	context.stroke();
	context.closePath();	
    }

// Электронный циферблат
context.fillStyle = 'black';
context.font = 'normal 30px Arial';
context.fillText('00:00:00', 120, 120);

// Точка 
context.beginPath();
context.fillStyle = 'black';
context.lineWidth = 3;
context.arc(xCenterClock, yCenterClock, 8, 0, 2*Math.PI, true);
context.stroke();
context.fill();
context.closePath();

//Рисуем стрелки
var lengthSeconds = radiusNum + 10;
var lengthMinutes = radiusNum - 15;
var lengthHour = lengthMinutes / 1.5;
var d = new Date();                //Получаем экземпляр даты
var t_sec = 6*d.getSeconds();                           //Определяем угол для секунд
var t_min = 6*(d.getMinutes() + (1/60)*d.getSeconds()); //Определяем угол для минут
var t_hour = 30*(d.getHours() + (1/60)*d.getMinutes()); //Определяем угол для часов

//Рисуем секунды
context.beginPath();
context.lineWidth = 2;
context.strokeStyle = "black";
context.moveTo(xCenterClock, yCenterClock);
context.lineTo(xCenterClock + lengthSeconds*Math.cos(Math.PI/2 - t_sec*(Math.PI/180)),
            yCenterClock - lengthSeconds*Math.sin(Math.PI/2 - t_sec*(Math.PI/180)));
context.stroke();
context.closePath();

//Рисуем минуты
context.beginPath();
context.strokeStyle =  "black";
context.lineWidth = 3;
context.moveTo(xCenterClock, yCenterClock);
context.lineTo(xCenterClock + lengthMinutes*Math.cos(Math.PI/2 - t_min*(Math.PI/180)),
             yCenterClock - lengthMinutes*Math.sin(Math.PI/2 - t_min*(Math.PI/180)));
context.stroke();
context.closePath();

//Рисуем часы
context.beginPath();
context.lineWidth = 5;
context.moveTo(xCenterClock, yCenterClock);
context.lineTo(xCenterClock + lengthHour*Math.cos(Math.PI/2 - t_hour*(Math.PI/180)),
             yCenterClock - lengthHour*Math.sin(Math.PI/2 - t_hour*(Math.PI/180)));
context.stroke();
context.closePath();	
requestAnimationFrame(updateClock);
}
requestAnimationFrame(updateClock);
  



// function clockPainting() {
//     var now = new Date();
//     var sec = now.getSeconds();
//     var min = now.getMinutes();
//     var hr = now.getHours();

//     var ctx = document.getElementById("canvas").getContext("2d");
//     ctx.save();// помещаем текущий контекст в стэк

//     ctx.clearRect(0,0,150,150);
//     ctx.translate(75, 75);
//     ctx.scale(0.4,0.4);
//     ctx.rotate(-Math.PI/2);

//     ctx.strokeStyle = "black";
//     ctx.fillStyle = "black";
//     ctx.lineWidth = 8;
//     ctx.lineCap = "round";

//     ctx.save();
//     ctx.beginPath();

//     for (var i = 0; i < 12; i++) {
//         ctx.rotate(Math.PI/6);
//         ctx.moveTo(100,0);
//         ctx.lineTo(120,0);
//     }

//     ctx.stroke();// нарисовали то, что ранее описали
//     ctx.restore();// достаем последний сохраненный контекст из стэка

//     ctx.save();
//     // рисуем часовую стрелку, вращая холст
//     ctx.rotate((Math.PI/6)*hr +
//         (Math.PI/360)*min +
//         (Math.PI/21600)*sec);
//     ctx.lineWidth = 14;

//     ctx.beginPath();
//     ctx.moveTo(-20,0);

//     // линия почти до часовых меток
//     ctx.lineTo(80,0);
//     ctx.stroke();
//     ctx.restore();

//     ctx.save();

//     // минутная стрелка
//     ctx.rotate((Math.PI/30*min) +
//         (Math.PI/1800)*sec);
//     ctx.lineWidth = 10;

//     ctx.beginPath();
//     ctx.moveTo(-28,0);
//     ctx.lineTo(112,0);
//     ctx.stroke();
//     ctx.restore();

//     ctx.save();

//     // секундная стрелка
//     ctx.rotate(sec * Math.PI/30);
//     ctx.strokeStyle = "#D40000";// цвет контура
//     ctx.fillStyle = "#D40000";
//     ctx.lineWidth = 6;

//     ctx.beginPath();
//     ctx.moveTo(-30,0);
//     ctx.lineTo(83,0);
//     ctx.stroke();
//     ctx.restore();

//     ctx.restore();
// }
// window.onload = function() {
//     setInterval(clockPainting, 1000);// функция, перерисовывающая часы
//     //через равные промежутки времени
// }