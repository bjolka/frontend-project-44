#!/usr/bin/env node
import mainGame from '../index.js'
import getRandomNumber from '../randomNumbers.js'

const generateStep = () => {
  const randomNumber = getRandomNumber(1, 50)
  const question = `${randomNumber}`
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no'
  return { question, correctAnswer }
}

const PlayBrainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".'
  mainGame(rules, generateStep)
}

export default PlayBrainEven
