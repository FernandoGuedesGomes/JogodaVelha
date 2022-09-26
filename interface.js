var jogador1 = prompt ("Escreva o nome do jogador 1:")
var jogador2 = prompt ("Escreva o nome do jogador 2:")

document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {

    console.log(event.target);

    let square = event.target;
    let position = square.id;

    if (handleMove(position)) {

        setTimeout(() => {
            let jogador;

            if(playerTime == 0){
                jogador = jogador1;
            }else{
                jogador = jogador2;
            }

            alert(`Parabéns ${jogador}, você venceu. `);
        }, 10);

    };
    updateSquare(position);
}


function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}