const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load',render);
window.addEventListener('resize',render);
window.addEventListener('keydown',mover)

const playerPosition = {
    x:undefined,
    y:undefined

}

let elementSize;
let canvasSize;

function startGame(){

    window.innerWidth
    elementSize = (canvasSize / 10) -1
 //game.fillRect(0,0,100,100)
 //game.clearRect(0,0,50,50)
    game.font = elementSize +'px verdana';
    game.fillStyle = 'blue';
    game.textAlign = 'start';


    const map = maps[0]
    const mapRow = map.trim().split('\n')
    const mapRowColumn = mapRow.map(elemento => elemento.trim().split(''))

    mapRowColumn.forEach((row, rowI) => 
        row.forEach((col, colI) => {
            const emoji = emojis[col];
            game.fillText(emoji, elementSize * colI, elementSize * (rowI + 1))    
            if(playerPosition.x === undefined &&   col == "O"){
                playerPosition.x = elementSize * colI
                playerPosition.y = elementSize * (rowI + 1)
            }
        })
    );
    moverPlayer();    
    console.log(mapRowColumn)
    /*for(let i=0 ; i<10;i++){
        for(let j=0;j<10;j++){
            game.fillText(emojis[mapRowColumn[i ][j]],elementSize * j ,elementSize * (i  +1));

        }
    
    }*/
}

function moverPlayer(){
    game.fillText(emojis['PLAYER'],playerPosition.x,playerPosition.y)
}


function render(){
    

    if(window.innerHeight < window.innerWidth){
        canvasSize = window.innerHeight * 0.8
    }
    else{
        canvasSize = window.innerWidth * 0.8
    }


    canvas.setAttribute('width',canvasSize)
    canvas.setAttribute('height',canvasSize)
    startGame();
}
function mover(tecla) {
    console.log(tecla);
    switch(tecla.key) {
        case "ArrowUp":
            arriba();
            break;
        case "ArrowDown":
            abajo();
            break;
        case "ArrowLeft":
            izquierda();
            break;
        case "ArrowRight":
            derecha();
            break;
        default:
            console.log("tecla no reconocida");
            break;
    }
}
function arriba(){
    console.log("arriba");
    playerPosition.y -= elementSize;
    moverPlayer();
    render();    
    console.log(playerPosition.y)
}
function abajo(){
    console.log("abajo");
    playerPosition.y += elementSize;
    moverPlayer();
    render();    
    console.log(playerPosition.y)
}
function derecha(){
    console.log("derecha");
    playerPosition.x += elementSize;
    moverPlayer();
    render();    
    console.log(playerPosition.x)
}
function izquierda(){
    console.log("izquierda");
    playerPosition.x -= elementSize;
    moverPlayer();
    render();    
    console.log(playerPosition.x)
}
