const imgPlayerChoice = document.querySelector('#playerChoice')
const imgComputerChoice = document.querySelector('#computadoraChoice')
const resultado = document.querySelector('#resultado')
const reinicio = document.querySelector('#reinicio')
const score = document.querySelector('#score')
const buttons = document.querySelectorAll('button')
const choices=['piedra','papel','tijera']
const fileNames={
    'piedra':'../images/rock.png',
    'papel':'../images/paper.png',
    'tijera':'../images/scissors.png'
}
let positiveScore =0, negativeScore =0

// Funcion que me diga quien gana
const getWinner = (playerChoice, computerChoice)=>{
    if(playerChoice===computerChoice){
        return null
    }
    if(playerChoice==='piedra'){
        if(computerChoice==='papel'){
            return 'computer'
        }else{
            return 'player';
        }
    }else if(playerChoice==='papel'){
        if(computerChoice==='piedra'){
            return 'player';
        }else{
            return 'computer';
        }
    }else{
        if(computerChoice==='papel'){
            return 'player';
        }else{
            return 'computer';
        }
    }
}
// Funcion que me diga que elige la computadora
const getComputerChoice=()=>{
    const i = Math.floor(Math.random()*3);
    return choices[i];
}
// Funcion para el juego

const startGame=(event)=>{
    // Elección del jugador
    const button = event.currentTarget;
    const playerChoice = button.dataset.choice;
    console.log(playerChoice);
    // Elección de la computadora
    const computerChoice = getComputerChoice()
    console.log(computerChoice);
    const winner = getWinner(playerChoice, computerChoice);
    imgPlayerChoice.setAttribute('src',fileNames[playerChoice]);
    imgComputerChoice.setAttribute('src',fileNames[computerChoice]);
    let result
    if(winner==='player'){
        result='ganas'
        ++positiveScore
    }else if(winner==='computer'){
        result='perdiste'
        ++negativeScore
    }else{
        result='empatas'
    }
    resultado.innerHTML=`Tú ${result} escogiendo
    <strong>${playerChoice}</strong> en contra de
    <strong>${computerChoice}</strong>`;
    score.innerHTML=`Has ganado <strong>${positiveScore}</strong>
    y has perdido <strong>${negativeScore}</strong>`
}
buttons.forEach((button)=>{
    button.addEventListener('click',startGame);
})

reinicio.addEventListener('click',()=>{
    resultado.innerHTML = "Comienza el <strong>juego</strong>"
    score.innerHTML = "Comienza el <strong>juego</strong>"
    positiveScore = 0
    negativeScore = 0
})