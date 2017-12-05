var colors = ['RED', 'GREEN', 'BLUE'];
var color = document.getElementById('color');
var buttons = document.querySelectorAll('.button');

function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateText() {
    color.innerHTML = randomColor();
    color.style.color = randomColor();
}

document.getElementById('start').onclick = function() {
    interval = setInterval(generateText, 1000);
}

buttons.forEach(function(e) {
    var score = 0;    
    e.onclick = function() {
        if (color.innerHTML === e.innerHTML) {
            score++;
        } else {
            score--;
        }
        document.getElementById('score').innerHTML = 'SCORE: ' + score; 
    }   
})

