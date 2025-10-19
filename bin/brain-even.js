#!/usr/bin/env node
import readlineSync from 'readline-sync';


const checkEven = () => {

    const userName = readlineSync.question('May I have your name? ')
    console.log('Hello, ' + userName + '!')

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let count = 0; count < 3; count += 1 ) {

        const randomNumber = Math.floor(Math.random() * 50) + 1
        console.log(`Question: ${randomNumber}`)
        const userAnswer = readlineSync.question('Your answer: ')
        const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

        if (userAnswer === correctAnswer) {
            console.log('Correct!')
        }
        else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`)
            return
        }

    }
    console.log('Congratulations, ' + userName + '!')
}

checkEven()