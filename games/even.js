#!/usr/bin/env node
import mainGame from '../src/index.js';


const generateStep = () => {
    const randomNumber = Math.floor(Math.random() * 50) + 1
    const question = `${randomNumber}`
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    return {question, correctAnswer}
}

const checkEven = () => {
    const rules = 'Answer "yes" if the number is even, otherwise answer "no".'
    mainGame(rules, generateStep)
}

export default checkEven;