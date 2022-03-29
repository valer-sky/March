"use strict";
function updateClock(){

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.strokeRect(0, 0, canvas.width, canvas.height);

//Расчет координат центра и радиуса часов
var radiusClock = canvas.width/2 - 10;
var xCenterClock = canvas.width/2;
var yCenterClock = canvas.height/2;
	
//Очистка экрана
context.fillStyle = "#ffffff";
context.fillRect(0, 0, canvas.width,canvas.height);
	
//Рисуем контур часов
context.fillStyle =  "#fcca66";
context.beginPath();
context.arc(xCenterClock, yCenterClock, radiusClock, 0, Math.PI*2, true);
context.moveTo(xCenterClock, yCenterClock);
context.fill();
context.closePath();

//Рисуем кружочки часов
var radiusNum = radiusClock - 27; //Радиус расположения кружочков
var radiusPoint;
for(var tm = 0; tm < 60; tm++){
  context.beginPath();
  if(tm % 5 == 0) {
      radiusPoint = 22;
    }else { 
    radiusPoint = 0;
} //для выделения часовых кружков
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
    context.fillStyle = 'black';
    context.font = '100 16px Arial';
    
    var xText = xCenterClock + radiusNum * Math.cos(-30*th*(Math.PI/180) + Math.PI/2);  
	var yText = yCenterClock - radiusNum * Math.sin(-30*th*(Math.PI/180) + Math.PI/2);
	if(th <= 9){      // расположение часов в кружечках
		context.fillText(th, xText - 5 , yText + 7);
	}else{
		context.fillText(th, xText - 12 , yText + 7);
	}
     	context.stroke();
	context.closePath();	
    }
        
// Точка 
context.beginPath();
context.fillStyle = 'black';
context.lineWidth = 3;
context.arc(xCenterClock, yCenterClock, 8, 0, 2*Math.PI, true);
context.stroke();
context.fill();
context.closePath();

// Функия на добовления нуля в электронные часы
function getZero(num) {  
    if(num >= 0 && num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}
//Рисуем стрелки
var lengthSeconds = radiusNum + 10;
var lengthMinutes = radiusNum - 15;
var lengthHour = lengthMinutes / 1.5;
var now = new Date();                                     //Получаем экземпляр даты
var t_sec = 6*now.getSeconds();                           //Определяем угол для секунд
var t_min = 6*(now.getMinutes() + (1/60)*now.getSeconds()); //Определяем угол для минут
var t_hour = 30*(now.getHours() + (1/60)*now.getMinutes()); //Определяем угол для часов
var time = `${getZero(now.getHours())}:${getZero(now.getMinutes())}:${getZero(now.getSeconds())}`;

// Электронный циферблат
context.fillStyle = 'black';
context.font = 'normal 30px Arial';
context.fillText(time, 120, 120);

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
context.lineWidth = 4;
context.moveTo(xCenterClock, yCenterClock);
context.lineTo(xCenterClock + lengthMinutes*Math.cos(Math.PI/2 - t_min*(Math.PI/180)),
             yCenterClock - lengthMinutes*Math.sin(Math.PI/2 - t_min*(Math.PI/180)));
context.stroke();
context.closePath();

//Рисуем часы
context.beginPath();
context.lineWidth = 7;
context.moveTo(xCenterClock, yCenterClock);
context.lineTo(xCenterClock + lengthHour*Math.cos(Math.PI/2 - t_hour*(Math.PI/180)),
             yCenterClock - lengthHour*Math.sin(Math.PI/2 - t_hour*(Math.PI/180)));
context.stroke();
context.closePath();	
requestAnimationFrame(updateClock);
}
requestAnimationFrame(updateClock);