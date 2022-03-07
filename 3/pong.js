const ctx = c.getContext('2d')
const w = h = 600

let paddlePlayerY = 300
let paddleComputerY = 300

let playerScore = 0
let computerScore = 0

const paddleWidth = 10
const paddleHeight = 100

class Ball {
  constructor() {
    this.x = w / 2
    this.y = h / 2
    this.r = 10
    this.v = 5
    this.angle = Math.random() * Math.PI / 4
  }
  update() {
    this.x += this.v * Math.cos(this.angle)
    this.y += this.v * Math.sin(this.angle)
    if (this.x > w - paddleWidth) {
      this.x = w - paddleWidth
      this.angle = Math.PI - this.angle
      if (!this.intersectsComputer) {
        playerScore++
        return true
      }
    } else if (this.x < paddleWidth) {
      this.x = paddleWidth
      this.angle = Math.PI - this.angle
      if (!this.intersectsPlayer) {
        computerScore++
        return true
      }
    }

    if (this.y > h) {
      this.y = h
      this.angle = - this.angle
    } else if (this.y < 0) {
      this.y = 0
      this.angle = - this.angle
    }
    return false
  }

  paint() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
    ctx.fill()
  }

  get intersectsComputer() {
    if (this.y > paddleComputerY + paddleHeight / 2)
      return false
    if (this.y < paddleComputerY - paddleHeight / 2)
      return false
    return true
  }

  get intersectsPlayer() {
    if (this.y > paddlePlayerY + paddleHeight / 2)
      return false
    if (this.y < paddlePlayerY - paddleHeight / 2)
      return false
    
    const div = Math.abs(this.y - paddlePlayerY) / ( paddleHeight / 2 )
    this.v = 5 + div * 5
    return true
  }
}

function paintComputer() {
  ctx.fillRect(w - paddleWidth, paddleComputerY - paddleHeight / 2, paddleWidth, paddleHeight)
}

function paintPlayer() {
  ctx.fillRect(0, paddlePlayerY - paddleHeight / 2, paddleWidth, paddleHeight)
}


let ball = new Ball()

function updateComputer() {
  const computerV = 3
  if (Math.abs(ball.y - paddleComputerY) < computerV)
    return paddleComputerY = ball.y
  if (ball.y > paddleComputerY)
    return paddleComputerY += computerV
  if (ball.y < paddleComputerY)
    return paddleComputerY -= computerV
}

window.addEventListener('mousemove', e => {
  const { y } = e
  paddlePlayerY = Math.min(w, y)
})


function loop() {
  ctx.clearRect(0, 0, w, h)
  if (ball.update()) {
    ball = new Ball()
  }
  ball.paint()
  updateComputer()
  paintComputer()
  paintPlayer()
  requestAnimationFrame(loop)
}
loop()
