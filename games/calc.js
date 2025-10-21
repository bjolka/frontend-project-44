#!/usr/bin/env node
import mainGame from '../src/index.js';

const generateStep = () => {
    const randomNumberOne = Math.floor(Math.random() * 20) + 1
    const randomNumberTwo = Math.floor(Math.random() * 20) + 1

    const operations = ['+', '-', '*'];
    const randomOperator = operations[Math.floor(Math.random() * operations.length)]

    const question = `${randomNumberOne} ${randomOperator} ${randomNumberTwo}`
    let correctAnswer
    switch (randomOperator) {
        case '+':
            correctAnswer = randomNumberOne + randomNumberTwo;
            break
        case '-':
            correctAnswer = randomNumberOne - randomNumberTwo;
            break
        case '*':
            correctAnswer = randomNumberOne * randomNumberTwo;
            break
    }
    correctAnswer = correctAnswer.toString()
    return {question, correctAnswer}

}

const calc = () => {
    const rules = 'What is the result of the expression?'
    mainGame(rules, generateStep)
}

export default calc;