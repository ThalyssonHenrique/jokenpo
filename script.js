const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let numberYourScore = 0
let numberMachineScore = 0


const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())


}

const playMachine = () => {
    const choices = ['stone', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]

}

const playTheGame = (human, machine) => {

    console.log('human:' + human + ' machine: ' + machine)

    if (human === machine) {
        result.innerHTML = "Draw &#x26D4;"
    }

    else if (
        (human === 'paper' && machine === 'stone') ||
        (human === 'stone' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {


        numberYourScore++
        humanScore.innerHTML = numberYourScore
        result.innerHTML = "You Win &#x1F3C6;"

    }
    else {

        numberMachineScore++
        machineScore.innerHTML = numberMachineScore
        result.innerHTML = "You Lose &#x1F480;"
    }
}