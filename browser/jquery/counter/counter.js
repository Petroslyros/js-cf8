const DEFAULT = 0
let counter = DEFAULT

$(function() {
  $('#btnDecr').on('click', () => onDecreaseClicked())
  $('#btnReset').on('click', () => onResetClicked())
  $('#btnIncr').on('click', () => onIncreaseClicked())
})


const onDecreaseClicked = () => {
  decreaseCounter()
}

const onResetClicked = () => {
  resetCounter()
}

const onIncreaseClicked = () => {
  increaseCounter()
}

// Model

function decreaseCounter() {
  counter--
  render() 
}

function resetCounter() {
  counter = DEFAULT
  render() 
}

function increaseCounter() {
  counter++
  render() 
}

// Assigns the state to the correspodning UI element
// And gives style accordingly

function render() {
  const $counter = $('#counter')
  $counter.text(counter)
  styleCounterElement($counter)
}

function styleCounterElement($counter) {
  $counter.toggleClass('color-green', counter > 0)
  $counter.toggleClass('color-red', counter < 0)
  $counter.toggleClass('color-black', counter === 0)
}