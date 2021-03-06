// I !

let canvas = document.getElementById("snake"); 
let context = canvas.getContext("2d"); 
let box = 32;
let snake = [];
//let img = window.document.getElementById("imagem");

snake[0] ={
  x: 8 * box,
  y: 8 * box
}

let direction = "right";

let apple ={
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function theBackGround(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16*box, 16*box);
}

function createSnake (){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function appleSnack (){
    //context.fillStyle = img;
    context.fillStyle = "red";
    context.fillRect(apple.x, apple.y, box, box);
}

document.addEventListener('keydown', commandFromKeyBoard);
// https://keycode.info/ Cool site

function commandFromKeyBoard(event){
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}

function startGame(){    

    if(snake[0].x > 15*box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15*box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;
    
    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(game);
            alert('Game Over :(');
        }
    }

    theBackGround();
    createSnake();
    appleSnack();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != apple.x || snakeY != apple.y){
        snake.pop();
    }else {
        apple.x = Math.floor(Math.random() * 15 +1) * box;
        apple.y = Math.floor(Math.random() * 15 +1) * box;
    }
    
    let theHead ={
        x: snakeX,
        y: snakeY
    }

    snake.unshift(theHead); 
}

let game = setInterval(startGame, 100);