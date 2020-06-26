let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snakebody = [];
let direction = "right";

let apple = {
    x: Math.floor(Math.random() * 15 + 1) * box, //Porque 15+1  e nao 16??
    y: Math.floor(Math.random() * 15 + 1) * box
}

snakebody[0]={
    x: 8* box,
    y: 8* box
} //Nao dá pra colocar isso já lá no let?? vou tentar depois.

function BackGround(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function createSnake(){
    for (i=0; i < snakebody.length; i++){
        context.fillStyle = "green";
        context.fillRect(snakebody[i].x, snakebody[i].y, box, box);
    }
}

function appleSnack(){
    context.fillStyle = "red";
    context.fillRect(apple.x, apple.y, box, box)
}

//Detect from the keyboard:
document.addEventListener('keydown', commandsKeyboard);

function commandsKeyboard (event){
    // Ex. "> && direction != "right" < " then it won't allow the snake go backwards. 
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode == 38 && direction != "down") direction = "up";
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 40 && direction != "up") direction = "down";

}


function startTheGame(){

    //Treating the edges:
    if (snakebody[0].x > 15 * box && direction == "right") snakebody[0].x = 0;
    if (snakebody[0].x < 0 && direction == "left") snakebody[0].x = 16 * box;
    if (snakebody[0].y > 15 * box && direction == "down") snakebody[0].y = 0;
    if (snakebody[0].y < 0 && direction == "up") snakebody[0].y = 16 * box;

    BackGround();
    createSnake();

    let snakeX = snakebody[0].x;
    let snakeY = snakebody[0].y;

    //Giving the orientations:
    if (direction == "right") snakeX +=box;
    if (direction == "left") snakeX -=box;
    if (direction == "up") snakeY -=box;
    if (direction == "down") snakeY +=box;

    //Delete the last box of the Snake body:
    snakebody.pop();

    //The Snake head:
    let head = {
        x: snakeX,
        y: snakeY
    }

    //Turn the head always to the first position:
    snakebody.unshift(head);
}

let game = setInterval(startTheGame, 100);
