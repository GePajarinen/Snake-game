let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snakebody = [];
let direction = "right";

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

function startTheGame(){
    BackGround();
    createSnake();

}
