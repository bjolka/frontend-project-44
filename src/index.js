import readlineSync from 'readline-sync'

const mainGame = (rules, oneStep) => {
  const userName = readlineSync.question('May I have your name? ')
  console.log('Hello, ' + userName + '!')

  console.log(rules)

  for (let count = 0; count < 3; count += 1) {
    const { question, correctAnswer } = oneStep()

    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

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

export default mainGame
