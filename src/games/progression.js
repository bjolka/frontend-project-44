#!/usr/bin/env node
import mainGame from '../index.js'
import getRandomNumber from '../randomNumbers.js'

const generateStep = () => {
  const lengthProgression = 10
  const hiddenIndex = getRandomNumber(0, 9)
  const startNumber = getRandomNumber(1, 20)
  const step = getRandomNumber(1, 5)

  const array = []
  for (let index = 0; index < lengthProgression; index += 1) {
    array.push(startNumber + index * step)
  }

  const correctAnswer = array[hiddenIndex].toString()
  array[hiddenIndex] = '..'
  const question = array.join(' ')

  return { question, correctAnswer }
}

const PlayBrainProgression = () => {
  const rules = 'What number is missing in the progression?'
  mainGame(rules, generateStep)
}

export default PlayBrainProgression
