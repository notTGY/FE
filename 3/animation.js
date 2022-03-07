const ctx = c.getContext('2d')

function drawRedCircle(x, y) {
  ctx.clearRect(0, 0, 600, 600)
  ctx.fillStyle = 'red'
  ctx.beginPath()
  ctx.arc(x, y, 10, 0, 2*Math.PI)
  ctx.fill()
}

let x = 0
function animation() {
  drawRedCircle(x++, 50)
  requestAnimationFrame(animation)
}
animation()

