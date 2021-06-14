const board = document.querySelector('#board')
const colors = ['#FE0620', '#F53A0C', '#F5EA0C', '#2D9C19','#0EEED2','#044FC3','#8204F1']
const SQUARES_NUMBER = 480

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', setColor)

  square.addEventListener('mouseleave', removeColor)

  board.append(square)
}
  function setColor(e) {
      const element = e.target;
      const color = getRandomColor()
      element.style.backgroundColor = color
      element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}` 
  }

  function removeColor(e) {
    const element = e.target;
    element.style.backgroundColor = '#fff'
    element.style.boxShadow = `0 0 2px #fff`
}

function getRandomColor() { 
  return colors[Math.floor(Math.random() * colors.length)]
}
