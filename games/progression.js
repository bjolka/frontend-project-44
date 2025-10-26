#!/usr/bin/env node
import mainGame from '../src/index.js';

const generateStep = () => {
    const lengthProgression = 10
    const hiddenIndex = Math.floor(Math.random() * 9) + 0
    const startNumber = Math.floor(Math.random() * 20) + 1
    const step = Math.floor(Math.random() * 5) + 1

    const array = [] 
    for (let index = 0; index < lengthProgression; index += 1) {
        array.push(startNumber + index * step)
    }

    const correctAnswer = array[hiddenIndex].toString()
    array[hiddenIndex] = '..'
    const question = array.join(' ')
    
    return {question, correctAnswer}
}

const progression = () => {
    const rules = 'What number is missing in the progression?'
    mainGame(rules, generateStep)
}

export default progression;