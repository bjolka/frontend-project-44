#!/usr/bin/env node
import mainGame from '../index.js'
import getRandomNumber from '../randomNumbers.js'

const generateStep = () => {
  const randomNumberOne = getRandomNumber(1, 20)
  const randomNumberTwo = getRandomNumber(1, 20)

  const operations = ['+', '-', '*']
  const randomOperator = operations[Math.floor(Math.random() * operations.length)]

  const question = `${randomNumberOne} ${randomOperator} ${randomNumberTwo}`
  let correctAnswer
  switch (randomOperator) {
    case '+':
      correctAnswer = randomNumberOne + randomNumberTwo
      break
    case '-':
      correctAnswer = randomNumberOne - randomNumberTwo
      break
    case '*':
      correctAnswer = randomNumberOne * randomNumberTwo
      break
  }
  correctAnswer = correctAnswer.toString()
  return { question, correctAnswer }
}

const PlayBrainCalc = () => {
  const rules = 'What is the result of the expression?'
  mainGame(rules, generateStep)
}

export default PlayBrainCalc
