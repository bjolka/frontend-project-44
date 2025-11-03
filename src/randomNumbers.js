const getRandomNumber = (start, end) => {
  const randomNumber = Math.floor(Math.random() * end) + start
  return randomNumber
}

export default getRandomNumber
