#!/usr/bin/env node
import mainGame from '../src/index.js';

const generateStep = () => {
    let randomNumberOne = Math.floor(Math.random() * 20) 
    let randomNumberTwo = Math.floor(Math.random() * 20)

    const question = `${randomNumberOne} ${randomNumberTwo}`

    while (randomNumberTwo !== 0) {
        let temp = randomNumberOne
        randomNumberOne = randomNumberTwo
        randomNumberTwo = temp % randomNumberTwo

    }

    let correctAnswer = randomNumberOne.toString()
    return {question, correctAnswer}

}


const findgcd = () => {
    const rules = 'Find the greatest common divisor of given numbers.'
    mainGame(rules, generateStep)
} 


export default findgcd;