const option = document.querySelectorAll('button');
const img = document.querySelectorAll('img')
const computer = document.querySelector('.computer')
const player = document.querySelector('.player')
const winText =  document.querySelector('.winner')
const choice = ['paper','rock','scissor']

let computerPoint = 0;
let playerPoint = 0;

updatePoints()
option.forEach(element => {
    
    element.addEventListener('click',(e)=>{
        let btnName = e.target.innerHTML.toLowerCase();
        if(btnName == 'rock' || btnName == 'paper' || btnName == 'scissor'){
            winText.classList.add('hide')
            winText.innerHTML = ''
            const playerChoice = btnName
            const computerChoice = choice[Math.floor(Math.random()*3)]
            img[0].classList.add('rotate')
            img[1].classList.add('rotate')

            setTimeout(()=>{
                img[0].classList.remove('rotate')
                img[1].classList.remove('rotate')
                img[0].setAttribute('src',`./Img/${computerChoice}Computer.png`)
                img[1].setAttribute('src',`./Img/${btnName}Player.png`);
                checkWin(computerChoice,playerChoice)
            },1000)

        }
        else if(btnName == 'reset'){
            img[0].setAttribute('src',`./Img/rockComputer.png`)
            img[1].setAttribute('src',`./Img/rockPlayer.png`);
            computerPoint = 0;
            playerPoint = 0;
            computer.innerHTML = `Computer Points: ${computerPoint}`
            player.innerHTML = `Player Points: ${playerPoint}`
            winText.classList.add('hide')
            winText.innerHTML = ''
        }
        else if(btnName == 'quit'){
            alert("Do you really want to Quit?");
            window.close()
        }

    })
});

function updatePoints(){
    winText.classList.remove('hide')
    computer.innerHTML = `Computer Points: ${computerPoint}`
    player.innerHTML = `Your Points: ${playerPoint}`
}

function checkWin(computerChoice,playerChoice){
    let winner;
    if(computerChoice == playerChoice){
        winText.style.backgroundColor = 'red'
        winText.innerHTML = 'Draw !!'
    }
    else{
        
        if(playerChoice == 'rock'){
            computerChoice == 'paper'?computerPoint++:playerPoint++
            winner = computerChoice=='paper'?'Computer':'You'
        }
        else if(playerChoice == 'scissor'){
            computerChoice == 'rock'?computerPoint++:playerPoint++
            winner = computerChoice=='rock'?'Computer':'You'
        }
        else if(playerChoice == 'paper'){
            computerChoice == 'scissor'?computerPoint++:playerPoint++
            winner = computerChoice=='scissor'?'Computer':'You'
        }

        winner == 'Computer' ? winText.style.backgroundColor = 'red': winText.style.backgroundColor = 'green'
        winText.innerHTML = `${winner} Win!!`
    }
    updatePoints()
}
