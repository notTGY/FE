class Ball {
  constructor(x, y) {
    this._x = x
    this._y = y
  }

  moveTo(x) {
    this._x = x
  }

  get x() { return this._x + 'px' }
  get y() { return this._y + 'px' }
}

const ball = new Ball(5, 5)
ball.moveTo(9)
console.log(ball.x, ball.y)
