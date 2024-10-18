const app = document.querySelector(`#app`);
const playerStatus = document.querySelector(`#player-status`);
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const player1Name = urlParams.get('player-1');
const player2Name = urlParams.get('player-2');

window.addEventListener(`DOMContentLoaded`, generateCells);

function generateCells () {
    for(let idx = 0; idx < 9; idx++) {
        let cell = document.createElement(`div`);
        cell.className = `cell-${idx+1} cell`;
        app.appendChild(cell);
    }
}

let player1 = true;
let player2 = false;
let gameStatus = true;

app.addEventListener(`click`, (event)=> {
    if(gameStatus) {
        console.log(event.target);
        if(player1) {
            
            if(event.target.textContent !== ``) {
                return;
            }
            playerStatus.textContent = `${player1Name} is Playing.`;
            event.target.textContent = `X`;
            winner();
            player1 = false;
            player2 = true;
            return;
        } 
        if(player2) {
            
            if(event.target.textContent !== ``) {
                return;
            }
            playerStatus.textContent = `${player2Name} is Playing.`;
            
            event.target.textContent = `0`;
            winner();
            player2 = false;
            player1 = true;
            return;
        }
    }
    });

    function checkCase(idx1, idx2, idx3) {
        let cells = document.querySelectorAll(`#app .cell`);
        if(cells[idx1].textContent === 'X' && cells[idx2].textContent === 'X' && cells[idx3].textContent === 'X') {
            playerStatus.textContent = `${player1Name} Won!`;
            gameStatus = false;
            return;
        } else if (cells[idx1].textContent === '0' && cells[idx2].textContent === '0' && cells[idx3].textContent === '0'){
            playerStatus.textContent = `${player2Name} Won!`;
            gameStatus = false;
            return;
        }
        else if(cells[0].textContent !== '' && cells[1].textContent !== '' && cells[2].textContent !== '' && cells[3].textContent !== '' && cells[4].textContent !== '' && cells[5].textContent !== '' &&cells[6].textContent !== '' && cells[7].textContent !== '' && cells[8].textContent !== '' ){
            playerStatus.textContent = `You have a DRAW!`;
        }
    }
function winner() {
    let cells = document.querySelectorAll(`#app .cell`);
   checkCase(0, 1, 2)
   checkCase(3, 4, 5);
   checkCase(6, 7, 8);
   checkCase(0, 3, 6);
   checkCase(1, 4, 7);
   checkCase(0, 4, 8);
   checkCase(2, 4, 6);
}


document.getElementById(`restart-btn`).addEventListener(`click`, ()=> {
    window.location.reload();
});
