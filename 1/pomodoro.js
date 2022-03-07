const message = document.getElementById('message')
const button = document.getElementById('start')
const delay = document.getElementById('delay')

button.addEventListener('click', handleClick)

// below this point live-coded

function displayMessage() {
  message.innerText = 'timer expired'
}

function handleClick() {
  const time = delay.value || 2
  setTimeout(displayMessage, time * 1000)
}
