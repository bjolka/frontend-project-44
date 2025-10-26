#!/usr/bin/env node
import mainGame from '../src/index.js';


const isPrime = (number) => {
    if (number < 2) return false
    if (number == 2) return true
    if (number % 2 == 0) return false
    
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) return false
    }

    return true
}


const generateStep = () => {
    const randomNumber = Math.floor(Math.random() * 20) + 1
    
    const question = `${randomNumber}`
    let correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

    return {question, correctAnswer}

}

const prime = () => {
    const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".'
    mainGame(rules, generateStep)
}

export default prime;