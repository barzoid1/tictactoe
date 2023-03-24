
pscore = document.getElementById('player-score')
let hands = document.getElementById('hands')
let endGamebtn = document.getElementById('endGameButton')
let result = document.getElementById('result')

const totalScores = {computerScore:0, playerScore:0}

function getComputerChoice (){
  let choices = ['Rock','Paper','Scissors']
const randomChoice =Math.floor(Math.random()*3)
return choices[randomChoice]
}

function getResult(playerChoice,computerChoice){
  let score;
if (playerChoice == computerChoice){
  score = 0
}
else if (playerChoice == 'Rock' && computerChoice == 'Scissors'){
  score = 1
}
else if (playerChoice == 'Scissors' && computerChoice == 'Paper'){
score = 1
}
else if (playerChoice == 'Paper' && computerChoice == 'Rock'){
  score = 1
}
else{
  score = -1
}
return score
}

function showResult(score, playerChoice,computerChoice){
  if (score == -1){
    result.innerText = 'You Lost'
  }
  else if (score == 0 ){
  result.innerText = "It's a Tie"  
  }
  else {
    result.innerText = 'You won'
  }
  hands.innerText = `You: ${playerChoice} vs computer: ${computerChoice}`
  pscore.innerText = `Your Score: ${totalScores.playerScore}`
}
function onClickRPS(playerChoice) {
  console.log({playerChoice})
const compChoice = getComputerChoice()
console.log({compChoice})
const scores = getResult(playerChoice, compChoice)
totalScores['playerScore']+= scores
console.log({scores})
console.log({totalScores})
showResult(scores, playerChoice, compChoice)
}
function playGame() {
const RPSbutton = document.querySelectorAll('.rpsbutton')
RPSbutton.forEach(button => button.onclick = () =>{
onClickRPS(button.value)
})
  endGamebtn.onclick = () => endGame()
}
function endGame() {
totalScores.playerScore = 0  

pscore.innerText = ''
hands.innerText = ''
result.innerText = ''

}
playGame()