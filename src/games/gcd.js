#!/usr/bin/env node
import mainGame from '../index.js'
import getRandomNumber from '../randomNumbers.js'

const generateStep = () => {
  let randomNumberOne = getRandomNumber(0, 20)
  let randomNumberTwo = getRandomNumber(0, 20)

  const question = `${randomNumberOne} ${randomNumberTwo}`

  while (randomNumberTwo !== 0) {
    let temp = randomNumberOne
    randomNumberOne = randomNumberTwo
    randomNumberTwo = temp % randomNumberTwo
  }

  let correctAnswer = randomNumberOne.toString()
  return { question, correctAnswer }
}

const PlayBrainGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.'
  mainGame(rules, generateStep)
}

export default PlayBrainGcd
