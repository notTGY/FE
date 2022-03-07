const guess = document.getElementById('guess')
const button = document.getElementById('send')
const result = document.getElementById('result')

const limit = 100
const secret = 1 + Math.floor(Math.random() * limit)
console.log(secret)
function check(num) {
  if (num === secret) {
    result.innerText = 'You guessed right!'
  } else if (num > secret) {
    result.innerText = 'Mine number is smaller'
  } else if (num < secret) {
    result.innerText = 'Mine number is bigger'
  } else {
    throw new Error('check error')
  }
}

button.addEventListener('click', e => {
  const num = Number(guess.value)
  check(num)
})
