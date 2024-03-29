let playerText = document.getElementById('game_update')
let restartBtn = document.getElementById('reset-button')
let boxes = Array.from(document.getElementsByClassName('box'))
let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')
const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT
let spaces = Array(9).fill(null)

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked));
}

function boxClicked(e) {
    const id = e.target.id

    if(playerHasWon() !== false){
        return
    }
    
    if (!spaces[id]) {
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        if(playerHasWon() !== false){
            playerText.innerText = `Player ${currentPlayer} has Won!`;
            let winning_blocks = playerHasWon()
            console.log(winning_blocks)

            winning_blocks.map( box => boxes[box].style.backgroundColor = winnerIndicator)

            return
        }

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT: X_TEXT
        playerText.innerText = playerText.innerText == "Player X's Turn" ? "Player O's Turn":"Player X's Turn"
    }
}

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ]

function playerHasWon(){
    for (const condition of winningCombos){
        let [a,b,c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])){
            return  [a,b,c]
        }
    } 
    return false
}

restartBtn.addEventListener('click', restart)

function restart(){
    spaces.fill(null)

    boxes.forEach(box =>{
        box.innerText=''
        box.style.backgroundColor=''
    })

    playerText.innerText = "Player X's Turn"
    currentPlayer = X_TEXT
}

startGame()