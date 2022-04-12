"use strict";

var racketHeight = 120;
var racketWidth = 10;
var ballRadius = 30;
var halfRacketHeight = racketHeight/2;
var speedOfRacket1 = 0;
var speedOfRacket2 = 0;
var pasitionOfRacket1 = 220;
var pasitionOfRacket2 = 220;
var topPositionBall = 510;
var leftPositionBall = 820;
var topSpeedOfBall = 0;
var leftSpeedOfBall = 0;
var score1 = 0;
var score2 = 0;

// Start Ball

function startBall() {
    topPositionBall = 510;
    leftPositionBall = 820;
    var side;
    if(Math.random() < 0.5) {
        side = 1;
    } else {
        side = -1;
    }
    leftSpeedOfBall = side * (Math.random() * 6 + 1.5);
    topSpeedOfBall = Math.random() * 6 + 1;
}

// 2 Players

document.addEventListener('keydown', function(e) {  // Вешаем оброботчик событий на рокетки при нажатии на клавиши
    if(e.keycode == 16 || e.which == 16) {
        speedOfRacket1 = -10;
    }
    if(e.keycode == 17 || e.which == 17) {
        speedOfRacket1 = 10;
    }
    if(e.keycode == 38 || e.which == 38) {
        speedOfRacket2 = -10;
    }
    if(e.keycode == 40 || e.which == 40) {
        speedOfRacket2 = 10;
    }
});

document.addEventListener('keyup', function(e) {  // Вешаем оброботчик событий на рокетки приотпускании клавиши
    if(e.keycode == 16 || e.which == 16) {
        speedOfRacket1 = 0;
    }
    if(e.keycode == 17 || e.which == 17) {
        speedOfRacket1 = 0;
    }
    if(e.keycode == 38 || e.which == 38) {
        speedOfRacket2 = 0;
    }
    if(e.keycode == 40 || e.which == 40) {
        speedOfRacket2 = 0;
    }
});

window.setInterval(function show() {  
    pasitionOfRacket1 += speedOfRacket1;
    pasitionOfRacket2 += speedOfRacket2;

    topPositionBall += topSpeedOfBall;
    leftPositionBall += leftSpeedOfBall;
    // Запрет рокетки на покидание поля сверху
    if(pasitionOfRacket1 <= 1) {
        pasitionOfRacket1 = 1;
    }
    if(pasitionOfRacket2 <= 1) {
        pasitionOfRacket2 = 1;
    }
    // Запрет рокетки на покидание поля снизу
    if(pasitionOfRacket1 >= window.innerHeight - racketHeight) {
        pasitionOfRacket1 = window.innerHeight - racketHeight;
    }
    if(pasitionOfRacket2 >= window.innerHeight - racketHeight) {
        pasitionOfRacket2 = window.innerHeight - racketHeight;
    }
    // Запрет на покидание мяча
    if(topPositionBall <= 10 || topPositionBall >= window.innerHeight - ballRadius - 10) {
        topSpeedOfBall = -topSpeedOfBall;
    }
    if(leftPositionBall <= racketWidth) {
        if(topPositionBall > pasitionOfRacket1 && topPositionBall < pasitionOfRacket1 + racketHeight){
            leftSpeedOfBall = -leftSpeedOfBall;
        }else{
            score2++;
            startBall();
        }
    }
    if(leftPositionBall >= window.innerWidth - ballRadius - racketWidth) {
        if(topPositionBall > pasitionOfRacket2 && topPositionBall < pasitionOfRacket2 + racketHeight) {
            leftSpeedOfBall = -leftSpeedOfBall;
        }else {
            score1++;
            startBall();
        }
    }

    document.getElementById('racket1').style.top = pasitionOfRacket1 + 'px';
    document.getElementById('racket2').style.top = pasitionOfRacket2 + 'px';

    document.getElementById('ball').style.top = topPositionBall+ 'px';
    document.getElementById('ball').style.left = leftPositionBall + 'px';
    document.querySelector('.messageGoal').innerHTML = score1.toString;
    document.querySelector('.messageGoal').innerHTML = score2.toString;
});
