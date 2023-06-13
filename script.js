'use strict';

/*console.log(document.querySelector('.guess-message').textContent)
document.querySelector('.guess-message').textContent = 'Правильно!'
document.querySelector('.question').textContent = 7
document.querySelector('.score').textContent = 19
console.log(document.querySelector('.number-input').value)*/

let secretNumber = Math.trunc(Math.random() * 20) + 1
console.log(secretNumber)
let score = 20
let highScore = 0

const displayMessage = (message) => document.querySelector('.guess-message').textContent = message

document.querySelector('.again').addEventListener('click', function(){
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1

    document.querySelector('.question').textContent = '???'
    document.querySelector('.question').style.width = '25rem'
    document.querySelector('body').style.backgroundColor = '#000'
    document.querySelector('.guess-message').textContent = 'Начни угадывать!'
    document.querySelector('.score').textContent = score
    document.querySelector('.number-input').value = ''


})

document.querySelector('.check').addEventListener('click', function(){
    const guessingNumber = Number(document.querySelector('.number-input').value)
    console.log(guessingNumber, typeof guessingNumber)
    
        // no input
    if (!guessingNumber) {
        displayMessage('Введите число...')
    
        // player won
    } else if(guessingNumber === secretNumber){
        displayMessage('Правильно!')
        document.querySelector('.question').textContent = secretNumber
        document.querySelector('body').style.backgroundColor = 'rgb(9,250,21)'
        document.querySelector('.question').style.width = '50rem'
        if(score > highScore){
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }

        
        // number from input is wrong
    }else if (guessingNumber !== secretNumber) {
        if(score > 1){
            displayMessage( guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!')
            score --
            document.querySelector('.score').textContent = score
            document.querySelector('.number-input').value = ''
            //player lost
        }else{
            displayMessage('Ты проиграл лох!')
            document.querySelector('body').style.backgroundColor = '#fc1212'
            document.querySelector('.question').style.width = '15rem'
            document.querySelector('.score').textContent = 0
        }
}

    }
)

        //too high
    //  else if(guessingNumber > secretNumber){
    //     if(score > 1){
    //         document.querySelector('.guess-message').textContent = 'Слишком много!'
    //         score --
    //         document.querySelector('.score').textContent = score
            
    //         //player lost
    //     }else{
    //         document.querySelector('.guess-message').textContent = 'Ты проиграл лох!'
    //         document.querySelector('body').style.backgroundColor = '#fc1212'
    //         document.querySelector('.question').style.width = '15rem'
    //         document.querySelector('.score').textContent = 0
    //     }

    //     //too low
    // }else if(guessingNumber < secretNumber){
    //     if(score > 1) {
    //         document.querySelector('.guess-message').textContent = 'Слишком мало!'
    //         score --
    //         document.querySelector('.score').textContent = score            
        
    //         //player lost
    //     }else{
    //         document.querySelector('.guess-message').textContent = 'Ты проиграл лох!'
    //         document.querySelector('body').style.backgroundColor = '#fc1212'
    //         document.querySelector('.question').style.width = '15rem'
    //         document.querySelector('.score').textContent = 0
    //     }



